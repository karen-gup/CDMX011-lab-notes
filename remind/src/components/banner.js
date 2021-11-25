import { logOut } from "../firebase/auth";
import { useHistory } from "react-router-dom"
import swal from 'sweetalert';
import exit from '../img/exit.png'
import icon from '../img/icon.png'
import "./styles/banner.css"


export function Banner (){
    return (
    <header className="banner">
        <div className="title-icon">
            <p>Reminds</p>
            <img src={icon} alt="icon-img" className="icon-app" />
        </div>
    </header>)
}
export function BannerWall () {
    const history = useHistory();
    const handleLogOut= () =>{
        swal({
            title: "Estas por cerrar sesión",
            text: "¿Quieres continuar?",
            icon: "warning",
            buttons: ["No", "Sí"]
        }).then(confirm => {
            if(confirm){
            logOut()
            history.push('/')
            console.log('saliste de la sesión')
        }
        })

    }
    return (
       <header className="banner">
                <div className="title-icon">
                    <p>Reminds</p>
                    <img src={icon} alt="icon-img" className="icon-app" />
                </div>
                    <img onClick={handleLogOut}
                    src={exit} alt="logOut-icon" />
            </header>  
        )
}