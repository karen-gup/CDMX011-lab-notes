import { logOut } from "../firebase/auth";
import { useHistory } from "react-router-dom"
import exit from '../img/exit.png'
import icon from '../img/icon.png'
import "./styles/banner.css"


export function Banner (){
    return (
    <div className="banner">
        <div className="title-icon">
            <p>Reminds</p>
            <img src={icon} alt="icon-img" className="icon-app" />
        </div>
    </div>)
}
export function BannerWall () {
    const history = useHistory();
    const handleLogOut= () =>{
        logOut()
        .then(() => {
            history.push('/')
            console.log('saliste de la sesión')
        })
    }
    return (
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