import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }) => {
  const initialState = () =>
    JSON.parse(localStorage.getItem('auth')) || {
      email: '',
      token: '',
      name: '',
      accessLevel: '',
      id: '',
      isAuthenticated: false,
    };

  const [state, setState] = useState(initialState);

  useEffect(() => localStorage.setItem('auth', JSON.stringify(state)), [state]);

  const signIn = authData => {
    authData.isAuthenticated = true;
    authData.accessLevel = authData.access_level;
    delete authData.access_level;
    delete authData.__typename;
    setState(authData);
  };

  const signOut = () => {
    const reset = {
      accessLevel: '',
      token: '',
      name: '',
      email: '',
      id: '',
      isAuthenticated: false,
    };
    setState(reset);
    console.log('signing out');
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signOut,
        signIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
