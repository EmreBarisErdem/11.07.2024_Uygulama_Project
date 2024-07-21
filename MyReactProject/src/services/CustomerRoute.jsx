import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const CustomerRoute = ({element}) => {

const {isAuthenticated} = useContext(AuthContext);

  return isAuthenticated ? element : <Navigate to="/"/>
  
}

export default CustomerRoute