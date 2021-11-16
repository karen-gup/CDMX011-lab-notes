/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
// import { getUser } from '../firebase/auth';
import Modal from "./modal";
import Notes from './notes';
import {BannerWall} from "./banner"
import "./styles/notes.css"

function Wallnotes ({user}) {

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal((visible) => !visible);
      console.log('abreModal')
    };
   // console.log(user)

return(
        <div className="body-wall">
              <BannerWall/>
          <div className="main-bnt">
            <p className="text-profile">My reminds <br/> {user.email}</p>
            <button onClick={openModal}
            className="btn-add"> Añadir nota   + </button>
          </div> 
              <Modal showModal={showModal} setShowModal={setShowModal} user={user}/>
              <Notes user={user}/>
      </div>
    ) 
}
export default Wallnotes