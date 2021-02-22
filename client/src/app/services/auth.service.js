import React, { createContext, useContext, useState } from 'react';
import { useApi } from '.';
import { apiConfig } from '../config';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const { setCookie, getCookie, eraseCookie, updateUserData } = useApi();

  const BASE_URL = `${apiConfig.baseURL || "http://localhost:8080"}`;

  const getToken = async ( role, username, password ) => {
    const url = `${BASE_URL}/token/${role}`;

    const auth = { username, password };

    const options = {
      method:'POST',
      body: JSON.stringify({auth}),
      headers: new Headers({
          // 'Authorization': 'Bearer '+ token, 
          'Content-Type': 'application/json',
        }), 
    }

    const response = await fetch(url, options).then((result) => result.json());

    if (response.message) return {error: "Inloggegevens zijn onjuist!"}

    setCookie('auth', JSON.stringify({token: response.token, role}), 1);

    await updateUserData();

    return response;
  }

  const checkForUserUpdate = async () => {
    if (!sessionStorage.getItem('user')) await updateUserData();
  }

  const getLoggedInRole = () => {
    const auth = JSON.parse(getCookie('auth'));
    console.log(auth)
    if (auth !== null) {
      checkForUserUpdate();
      return auth.role;
    }
    return '';
  }

  const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  return (
    <AuthContext.Provider value={{ 
      getToken,
      getLoggedInRole,
      getUserData
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export {
  AuthContext,
  AuthProvider,
  useAuth,
}
