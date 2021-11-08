import { useState } from "react"
import { logIn, gmailAuth } from "../firebase/auth";
import { Link, useHistory } from "react-router-dom"

import google from "../img/google.png"
import "./styles/forms.css"

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history =  useHistory();
    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('Iniciando sesión ')
        logIn(email, password)
        .then(() =>{
            console.log('Iniciaste sesión')
            history.push('/wallNotes')  
        }).catch((error) => {
            setError(error.message)
        });
    }
    const handleGmail= (e) =>{
        e.preventDefault()
        gmailAuth()
        .then((result) => {
            history.push('/wallNotes')
            const user = result.user.displayName;
            const userPhoto = result.user.photoURL;
            console.log(user, userPhoto);
            console.log('Logeado con Gmail')
        }).catch((error) => {
            console.log(error.message);
          });
    }

    return (
           <div className="first-body">
                <form className="form-container">
                    <h1 className="form-header">INICIA SESIÓN</h1>
                    <input onChange={(e) => { setEmail(e.target.value); } }
                        id="email" type="email" placeholder="Correo electronico" />
                    <br />
                    <input onChange={(e) => { setPassword(e.target.value); } }
                        id="password" type="password" placeholder="Contraseña" />
                    <br />
                    <p className="error-p">{error} </p>
                    <br />
                    <button onClick={handleSignIn}
                        type="submit" className="btn-form">ENTRAR</button>
                    <br/>
                    <button onClick={handleGmail}
                        className="g-btn-form">CONTINUAR CON <img src={google} alt="google-icon" className="icon-g" /></button>
                    <br />
                    <p className="text-link">¿No tienes cuenta?
                        <Link to="/signin"> Regístrate</Link>
                    </p>
                </form>
            </div>)
   
}
export default Login