import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const apps = getApps();

const app = apps.length > 0 ? apps[0] : initializeApp(firebaseConfig);
// const app = firebase.app();
// const auth = firebase.auth();
const auth = getAuth();
// const db = firebase.firestore();
// const now = firebase.firestore.Timestamp.now();
// const storage = firebase.storage();
const db = getFirestore();
const storage = getStorage();
export { auth, db, storage };
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');
