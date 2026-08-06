import React, { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { ArrowLeft, ImagePlus, Loader2, LogOut, Save, ShieldCheck, Trash2, Upload } from 'lucide-react';
import { auth, db, storage } from '../lib/firebase';
import { GALLERY_IMAGES } from '../data/propertyData';
import { useSiteContent, type SiteContent } from '../context/SiteContentContext';
import type { GalleryCategory, GalleryImage } from '../types';

const ADMIN_EMAIL = 'trishmariedigital@gmail.com';

const friendlyFirebaseError = (error: unknown) => {
  const message = error instanceof Error ? error.message : 'Something went wrong.';
  if (message.includes('invalid-credential')) return 'The email or password is incorrect.';
  if (message.includes('permission-denied')) return 'This account does not have permission to edit the site.';
  if (message.includes('storage/')) return 'The image could not be uploaded. Firebase Storage may still need to be enabled.';
  return message.replace(/^Firebase:\s*/i, '');
};

export const AdminPage: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const live = useSiteContent();
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState('');
  const [draft, setDraft] = useState<SiteContent>({ imageOverrides: {}, galleryAdditions: [], hiddenGalleryIds: [] });
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [newPhoto, setNewPhoto] = useState({ title: '', alt: '', category: 'views' as GalleryCategory });

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    setAuthLoading(false);
  }), []);

  useEffect(() => {
    if (!live.loading) {
      setDraft({
        imageOverrides: { ...live.imageOverrides },
        galleryAdditions: [...live.galleryAdditions],
        hiddenGalleryIds: [...live.hiddenGalleryIds],
      });
    }
  }, [live.loading]);

  const uniqueDefaults = useMemo(() => {
    const seen = new Set<string>();
    return GALLERY_IMAGES.filter((image) => !seen.has(image.src) && Boolean(seen.add(image.src)));
  }, []);

  const persist = async (next: SiteContent, success: string) => {
    setError('');
    await setDoc(doc(db, 'siteContent', 'main'), next, { merge: true });
    setDraft(next);
    setMessage(success);
  };

  const upload = async (file: File, folder: string) => {
    if (!file.type.startsWith('image/')) throw new Error('Please choose an image file.');
    if (file.size > 10 * 1024 * 1024) throw new Error('Images must be smaller than 10 MB.');
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
    const target = ref(storage, `site-images/${folder}/${Date.now()}-${safeName}`);
    await uploadBytes(target, file, { contentType: file.type });
    return getDownloadURL(target);
  };

  const replaceImage = async (original: string, file?: File) => {
    if (!file) return;
    setBusyKey(original);
    setMessage('');
    try {
      const url = await upload(file, 'replacements');
      await persist({ ...draft, imageOverrides: { ...draft.imageOverrides, [original]: url } }, 'Image updated across the website.');
    } catch (uploadError) {
      setError(friendlyFirebaseError(uploadError));
    } finally {
      setBusyKey(null);
    }
  };

  const addGalleryPhoto = async (file?: File) => {
    if (!file) return;
    if (!newPhoto.title.trim()) {
      setError('Add a title before uploading the gallery photo.');
      return;
    }
    setBusyKey('new-gallery');
    setMessage('');
    try {
      const src = await upload(file, 'gallery');
      const photo: GalleryImage = {
        id: `custom-${Date.now()}`,
        src,
        title: newPhoto.title.trim(),
        alt: newPhoto.alt.trim() || newPhoto.title.trim(),
        category: newPhoto.category,
      };
      await persist({ ...draft, galleryAdditions: [...draft.galleryAdditions, photo] }, 'Photo added to the gallery.');
      setNewPhoto({ title: '', alt: '', category: 'views' });
    } catch (uploadError) {
      setError(friendlyFirebaseError(uploadError));
    } finally {
      setBusyKey(null);
    }
  };

  const removeGalleryPhoto = async (image: GalleryImage, isCustom: boolean) => {
    const next = isCustom
      ? { ...draft, galleryAdditions: draft.galleryAdditions.filter((item) => item.id !== image.id) }
      : { ...draft, hiddenGalleryIds: [...new Set([...draft.hiddenGalleryIds, image.id])] };
    try {
      await persist(next, 'Photo removed from the gallery.');
    } catch (removeError) {
      setError(friendlyFirebaseError(removeError));
    }
  };

  if (authLoading) return <div className="min-h-screen bg-[#091726] grid place-items-center"><Loader2 className="w-8 h-8 animate-spin text-amber-400" /></div>;

  if (!user) {
    return (
      <div className="min-h-screen bg-[#091726] text-white grid place-items-center px-4">
        <form className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl" onSubmit={async (event) => {
          event.preventDefault(); setError('');
          try { await signInWithEmailAndPassword(auth, email, password); }
          catch (signInError) { setError(friendlyFirebaseError(signInError)); }
        }}>
          <button type="button" onClick={onExit} className="text-sm text-slate-300 hover:text-white flex items-center gap-2 mb-8"><ArrowLeft className="w-4 h-4" /> Back to website</button>
          <ShieldCheck className="w-10 h-10 text-amber-400 mb-4" />
          <h1 className="font-serif-heading text-4xl mb-2">Site Admin</h1>
          <p className="text-slate-400 mb-8">Sign in to update the property photos and gallery.</p>
          <label className="block text-sm text-slate-300 mb-2">Admin email</label>
          <input className="w-full rounded-xl bg-slate-950/60 border border-white/15 px-4 py-3 mb-5" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label className="block text-sm text-slate-300 mb-2">Password</label>
          <input className="w-full rounded-xl bg-slate-950/60 border border-white/15 px-4 py-3 mb-3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <a className="text-xs text-amber-300 hover:text-amber-200" href="https://cliff-house-canyon-lake.firebaseapp.com/__/auth/action" target="_blank" rel="noreferrer">Password help</a>
          {error && <p className="mt-4 text-sm text-red-300">{error}</p>}
          <button className="w-full mt-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-3">Sign in</button>
          <p className="text-xs text-slate-500 mt-5">Only the authorized owner account can save changes.</p>
        </form>
      </div>
    );
  }

  if (user.email?.toLowerCase() !== ADMIN_EMAIL) {
    return <div className="min-h-screen bg-[#091726] text-white grid place-items-center px-4"><div className="text-center"><h1 className="text-3xl mb-3">Access denied</h1><p className="text-slate-400 mb-6">This account is not an authorized site administrator.</p><button onClick={() => signOut(auth)} className="px-5 py-3 rounded-xl bg-white/10">Sign out</button></div></div>;
  }

  const visibleDefaultGallery = GALLERY_IMAGES.filter((image) => !draft.hiddenGalleryIds.includes(image.id));
  return (
    <div className="min-h-screen bg-[#07131f] text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07131f]/95 backdrop-blur px-4 sm:px-8 py-4 flex items-center justify-between">
        <div><p className="text-xs uppercase tracking-[.2em] text-amber-300">Cliff House</p><h1 className="font-serif-heading text-2xl">Image Manager</h1></div>
        <div className="flex gap-2"><button onClick={onExit} className="px-4 py-2 rounded-lg bg-white/10 text-sm">View site</button><button onClick={() => signOut(auth)} className="px-4 py-2 rounded-lg bg-white/10 text-sm flex items-center gap-2"><LogOut className="w-4 h-4" /> Sign out</button></div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-14">
        {(message || error) && <div className={`rounded-xl px-4 py-3 text-sm ${error ? 'bg-red-500/15 text-red-200 border border-red-400/20' : 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/20'}`}>{error || message}</div>}

        <section>
          <h2 className="font-serif-heading text-3xl mb-2">Website images</h2>
          <p className="text-slate-400 mb-7">Replace any image below and every place that uses it will update automatically.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {uniqueDefaults.map((image, index) => (
              <article key={image.src} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img src={draft.imageOverrides[image.src] || image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" referrerPolicy="no-referrer" />
                <div className="p-4"><p className="font-medium mb-1">{image.title}</p><p className="text-xs text-slate-500 mb-4">Image slot {index + 1}</p>
                  <label className="cursor-pointer rounded-lg bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2.5 inline-flex items-center gap-2">
                    {busyKey === image.src ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />} Replace image
                    <input type="file" accept="image/*" className="sr-only" disabled={Boolean(busyKey)} onChange={(e) => replaceImage(image.src, e.target.files?.[0])} />
                  </label>
                  {draft.imageOverrides[image.src] && <button onClick={() => persist({ ...draft, imageOverrides: Object.fromEntries(Object.entries(draft.imageOverrides).filter(([key]) => key !== image.src)) }, 'Original image restored.')} className="ml-3 text-xs text-slate-300 hover:text-white">Restore original</button>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 pt-12">
          <h2 className="font-serif-heading text-3xl mb-2">Add to gallery</h2>
          <p className="text-slate-400 mb-7">Upload a new property photo and choose where visitors will find it.</p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-3 gap-4 items-end">
            <label className="text-sm text-slate-300">Photo title<input value={newPhoto.title} onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })} className="mt-2 w-full rounded-xl bg-slate-950/60 border border-white/15 px-4 py-3" placeholder="Sunset from the lower deck" /></label>
            <label className="text-sm text-slate-300">Category<select value={newPhoto.category} onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value as GalleryCategory })} className="mt-2 w-full rounded-xl bg-slate-950/60 border border-white/15 px-4 py-3"><option value="views">Views & decks</option><option value="interior">Living & kitchen</option><option value="bedrooms">Bedrooms & baths</option><option value="outdoor">Hot tub & firepit</option></select></label>
            <label className="cursor-pointer rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-5 py-3 flex justify-center items-center gap-2">
              {busyKey === 'new-gallery' ? <Loader2 className="w-5 h-5 animate-spin" /> : <ImagePlus className="w-5 h-5" />} Choose & upload photo
              <input type="file" accept="image/*" className="sr-only" disabled={Boolean(busyKey)} onChange={(e) => addGalleryPhoto(e.target.files?.[0])} />
            </label>
          </div>
        </section>

        <section className="border-t border-white/10 pt-12">
          <h2 className="font-serif-heading text-3xl mb-7">Gallery photos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...visibleDefaultGallery, ...draft.galleryAdditions].map((image) => {
              const custom = image.id.startsWith('custom-');
              return <article key={image.id} className="group relative rounded-xl overflow-hidden border border-white/10"><img src={draft.imageOverrides[image.src] || image.src} alt={image.alt} className="aspect-square w-full object-cover" referrerPolicy="no-referrer" /><div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent"><p className="text-xs truncate pr-8">{image.title}</p><button onClick={() => removeGalleryPhoto(image, custom)} aria-label={`Remove ${image.title}`} className="absolute right-2 bottom-2 p-2 rounded-lg bg-red-500/80 hover:bg-red-500"><Trash2 className="w-4 h-4" /></button></div></article>;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

