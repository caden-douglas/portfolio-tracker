import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA3lecJxpQPd0idxR16zQl8Rn3C15n1t3I",
    authDomain: "portfolio-tracker-52b65.firebaseapp.com",
    projectId: "portfolio-tracker-52b65",
    storageBucket: "portfolio-tracker-52b65.appspot.com",
    messagingSenderId: "124755753100",
    appId: "1:124755753100:web:210de41c3e5a140cf123a9",
    measurementId: "G-2T95QGXP9B"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Sign up function
export const signUp = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return { success: true, data: userCredential.user };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

// Sign in function
export const signIn = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return { success: true, data: userCredential.user };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

// Sign out function
export const signOut = async () => {
  try {
    await auth.signOut();
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: error.message };
  }
};

// Function to get the current user
export const getCurrentUser = () => {
  return auth.currentUser;
};