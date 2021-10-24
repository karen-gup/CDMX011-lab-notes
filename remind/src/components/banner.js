import icon from '../img/icon.png'
import "./styles/banner.css";
function Banner (){
    return (
    <div className="banner">
       <p>Reminds</p>
       <img src={icon} alt="icon-img" className="icon-app"/>
    </div>)
}
export default Banner