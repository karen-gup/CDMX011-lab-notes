/* eslint-disable react-hooks/rules-of-hooks */
import { logOut } from "../firebase/auth";
import { auth } from "../firebase/config";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import exit from '../img/exit.png'
import icon from '../img/icon.png'
import "./styles/forms.css"


function Home () {
    const [user, setUser] = useState({});
        useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setUser({email: user.email})
            } 
        })
    }, [])
    console.log(user)

    const history = useHistory();
    const handleLogOut= () =>{
        logOut()
        .then(() => {
            history.push('/')
            console.log('saliste de la sesión')
        })
    }
return(
        <div className="banner">
            <div className="title-icon">
           <p>Reminds</p>
            <img src={icon} alt="icon-img" className="icon-app" />
        </div>
        <img onClick={handleLogOut}
            src={exit} alt="logOut-icon" />
        </div>
    )
}
export default Home