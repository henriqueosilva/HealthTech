import React, { useContext } from 'react'
import { BehaviorSubject } from 'rxjs'
import HandleResponse from '../Helpers/HandleResponse';

const AuthContext = React.createContext();
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {

  function login(username, password) {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.parse({username, password})
    }

    return fetch(`${process.env.API_URI}/users/authenticate`, requestOptions)
    .then(HandleResponse)
    .then(user => {
      localStorage.setItem('currentUser', JSON.stringify(user))
      currentUserSubject.next(user);

      return user;
    })

  }
  function logout() {
    localStorage.removeItem('curentUser')
    currentUserSubject.next(null)
  }

  const value = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value}
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}