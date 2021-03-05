import React, { createContext, useContext, useState } from 'react';
import { useApi } from '.';
import { apiConfig } from '../config';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const { setCookie, getCookie, eraseCookie, updateUserData, updateSupervisorData } = useApi();

  // const BASE_URL = `${apiConfig.baseURL || "https://open-poortje-api.herokuapp.com"}`;
  const BASE_URL = "https://open-poortje-api.herokuapp.com";

  const getToken = async ( role, username, password ) => {
    const url = `${BASE_URL}/token/${role}`;

    const auth = { username: username.toLowerCase(), password };

    const options = {
      method:'POST',
      body: JSON.stringify({auth}),
      headers: new Headers({
          // 'Authorization': 'Bearer '+ token, 
          'Content-Type': 'application/json',
        }), 
    }

    const response = await fetch(url, options).then((result) => result.json())
      .catch(() => {
        return {error: "Inloggegevens zijn onjuist!"}
      });

    if (response.message) return {error: "Uw gebruikersnaam/wachtwoord zijn onjuist."}

    if(role === 'organisation' || role === 'kid') {
      setCookie('auth', JSON.stringify({token: response.token, role}), 30);
      await updateUserData();
    } else if (role === 'supervisor') {
      setCookie('sup-auth', JSON.stringify({token: response.token, role}), 1);
      // remove organisation login data
      // eraseCookie('auth');
      // sessionStorage.removeItem('user');

    }


    return response;
  }

  const checkForUserUpdate = async () => {
    if (!sessionStorage.getItem('user')) await updateUserData();
  }

  const checkSupervisorForUpdate = async () => {
    if (!sessionStorage.getItem('supervisor')) await updateSupervisorData();
  }

  const getLoggedInRole = () => {
    const auth = JSON.parse(getCookie('auth'));
    if (auth !== null) {
      checkForUserUpdate();
      console.log(auth.role)
      return auth.role;
    }
    return '';
  }

  const getIsSupervisorLoggedIn= () => {
    const auth = JSON.parse(getCookie('sup-auth'));
    if (auth !== null) {
      checkSupervisorForUpdate();
      return true;
    }
    return '';
  }

  const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  const logoutSupervisor = () => {
    eraseCookie('sup-auth');
    sessionStorage.removeItem('supervisor')
    sessionStorage.removeItem('selected-kid')
  }

  return (
    <AuthContext.Provider value={{ 
      getToken,
      getLoggedInRole,
      getUserData,
      getIsSupervisorLoggedIn,
      logoutSupervisor
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
