import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAFloJvretZHnj6y90F6_KygXZTsM0LCwk',
  authDomain: 'cliff-house-canyon-lake.firebaseapp.com',
  projectId: 'cliff-house-canyon-lake',
  storageBucket: 'cliff-house-canyon-lake.firebasestorage.app',
  messagingSenderId: '23937630290',
  appId: '1:23937630290:web:12a33ad9c849d6fa009f8b',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

