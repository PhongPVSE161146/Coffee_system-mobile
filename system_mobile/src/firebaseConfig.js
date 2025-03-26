import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import dotenv from 'dotenv';

// Load biến môi trường
dotenv.config();

// Firebase Config sử dụng biến môi trường
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

export const googleSignIn = async (id_token) => {
    const credential = GoogleAuthProvider.credential(id_token);
    try {
        const userCredential = await signInWithCredential(auth, credential);
        console.log('User signed in with Google:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Error signing in with Google:', error);
        throw error;
    }
};
