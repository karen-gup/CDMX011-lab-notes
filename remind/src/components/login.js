import { Link } from "react-router-dom"
import "./styles/forms.css"
function Login (){
    return (
        <div className="first-body">
        <form className="form-container">
            <h1>INICIA SESIÓN</h1>
            <input id="email" type="email" placeholder="Ingresa tu correo electrónico" />
            <br/>
            <input id="password" type="password" placeholder="Contraseña"  />
            <br/>
            <button>INICIAR SESIÓN</button>
            <button>CONTINUAR CON G</button>
            <br/>
            <p className="text-link">¿No tienes cuenta? 
            <Link to="/signin"> Registrate</Link>
            </p>
          </form>
    </div>)
   
}
export default Login