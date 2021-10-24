import { Link } from "react-router-dom"
import "./styles/forms.css"
function SignIn (){
    const handleRegister= (e)=>{
        e.preventDefault();
        console.log('Boton de registro')
    }
    return (
        <div className="first-body">
        <form className="form-container">
            <h1>REGISTRATE</h1>
            <input placeholder="Ingresa tu nombre" />
            <br/>
            <input type="email" placeholder="Ingresa tu correo electrónico" />
            <br/>
            <input type="password" placeholder="Crea una contraseña"  />
            <br/>
            <input type="password" placeholder="Confirmar contraseña"  />
            <br/>
            <button className="g-btn-form" onClick={handleRegister}>REGISTRAR</button>
            <button className="g-btn-form">CONTINUAR CON G</button>
            <br/>
            <p>¿Ya tienes una cuenta? 
               <Link to="/">Inicia Sesión</Link> 
            </p>
          </form>
    </div>)
}
export default SignIn