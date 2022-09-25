import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase, ref } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDgyVzHAdJiDrmDU7upd99JEq0VR9l0RU4",
    authDomain: "react-d12ba.firebaseapp.com",
    databaseURL: "https://react-d12ba-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-d12ba",
    storageBucket: "react-d12ba.appspot.com",
    messagingSenderId: "7295027194",
    appId: "1:7295027194:web:3c4a3bf048165790020643"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const signUp = async (email: string, password: string) => await createUserWithEmailAndPassword(firebaseAuth, email, password);
export const logIn = async (email: string, password: string) => await signInWithEmailAndPassword(firebaseAuth, email, password);
export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);
export const getChats = () => ref(db, 'chats');