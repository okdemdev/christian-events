// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUDvzZrLNgISW2sKvfR2_paDjUgi-EzaA',
  authDomain: 'ai-sales-assistant-3c705.firebaseapp.com',
  projectId: 'ai-sales-assistant-3c705',
  storageBucket: 'ai-sales-assistant-3c705.appspot.com',
  messagingSenderId: '742209961843',
  appId: '1:742209961843:web:c505271fbfe41ff2b50f06',
  measurementId: 'G-B2WFN95MNB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
