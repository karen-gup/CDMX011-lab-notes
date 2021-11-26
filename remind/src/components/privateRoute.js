// import React from "react";
// import { useState, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from '../firebase/config';

export default function PrivateRoute  ({component: Componet, ...rest})  {
/*   const [user, setUser] = useState({});
  
useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user) {
          setUser({email: user.email})
        } else{
          setUser(null)
        }
    })
}, []) */
const user = {algo:'algo'}
// const user = null
console.log(auth.currentUser)

    return (
      <Route {...rest}>{user?<Componet/> : <Redirect to="/" /> } </Route>
    )


};