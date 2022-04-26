import React, { useContext } from 'react'
import AuthHeader from '../Helpers/AuthHeader';
import HandleResponse from '../Helpers/HandleResponse';

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({children}) {
  function getAll() {
    const requestOptions = {
      method: 'GET',
      headers: AuthHeader()
    }
    return fetch(`${process.env.API_URI}/users`, requestOptions).then(HandleResponse)
  }

  function getById(id) {
    const requestOptions = {
      method: 'GET',
      headers: AuthHeader()
    }
    return fetch(`${process.env.API_URI}/users/${id}`, requestOptions).then(HandleResponse)
  }

  //Future register

  const value = {
    getAll,
    getById
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}