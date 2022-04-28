import React, { useContext, useEffect, useState } from 'react'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    function login(){

    }
    function logoff(){

    }
    function register(){

    }
    const value = {
        currentUser,
        login,
        logoff,
        register
    }
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('currentUser'));
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    })
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}