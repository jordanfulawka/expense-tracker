'use client';

import { auth, db } from '@/firebase';
import { subscriptions } from '@/utils';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    setCurrentUser(null);
    setUserData(null);
    return signOut(auth);
  }

  async function handleAddSubscription(newSubscription) {
    const newSubscriptions = [...userData.subscriptions, newSubscription];
    setUserData({ subscriptions: newSubscriptions });
  }

  async function handleDeleteSubscription(index) {
    const newSubscriptions = userData.subscriptions.filter((val, valIndex) => {
      return valIndex !== index;
    });
    console.log(newSubscriptions);
    setUserData({ subscriptions: newSubscriptions });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setLoading(true);
        setCurrentUser(user);

        if (!user) return;

        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        console.log('Fetching user data');

        // let firebaseData = { subscriptions: [] };
        let firebaseData = { subscriptions };
        if (docSnap.exists()) {
          console.log('Found user data');
          firebaseData = docSnap.data();
        }

        setUserData(firebaseData);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    loading,
    signup,
    login,
    logout,
    handleAddSubscription,
    handleDeleteSubscription,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
