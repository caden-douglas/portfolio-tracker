import React from 'react';
import { auth } from './firebaseFunctions';

const SignOutButton = () => {
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={signOut}>Sign Out</button>
  );
};

export default SignOutButton;