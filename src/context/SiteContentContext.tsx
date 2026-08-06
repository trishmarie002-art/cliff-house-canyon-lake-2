import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { GALLERY_IMAGES } from '../data/propertyData';
import type { GalleryImage } from '../types';

export interface SiteContent {
  imageOverrides: Record<string, string>;
  galleryAdditions: GalleryImage[];
  hiddenGalleryIds: string[];
}

const emptyContent: SiteContent = {
  imageOverrides: {},
  galleryAdditions: [],
  hiddenGalleryIds: [],
};

interface SiteContentValue extends SiteContent {
  loading: boolean;
  imageFor: (original: string) => string;
  galleryImages: GalleryImage[];
}

const SiteContentContext = createContext<SiteContentValue>({
  ...emptyContent,
  loading: true,
  imageFor: (original) => original,
  galleryImages: GALLERY_IMAGES,
});

export const SiteContentProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(emptyContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onSnapshot(
      doc(db, 'siteContent', 'main'),
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as Partial<SiteContent>;
          setContent({
            imageOverrides: data.imageOverrides ?? {},
            galleryAdditions: data.galleryAdditions ?? [],
            hiddenGalleryIds: data.hiddenGalleryIds ?? [],
          });
        }
        setLoading(false);
      },
      () => setLoading(false),
    );
  }, []);

  const value = useMemo<SiteContentValue>(() => {
    const imageFor = (original: string) => content.imageOverrides[original] || original;
    const galleryImages = [
      ...GALLERY_IMAGES.filter((image) => !content.hiddenGalleryIds.includes(image.id)).map((image) => ({
        ...image,
        src: imageFor(image.src),
      })),
      ...content.galleryAdditions,
    ];

    return { ...content, loading, imageFor, galleryImages };
  }, [content, loading]);

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => useContext(SiteContentContext);

