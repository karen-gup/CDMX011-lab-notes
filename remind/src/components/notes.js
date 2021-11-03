/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { auth } from '../firebase/config';
import Modal from "./modal";
import { BannerWall } from "./banner"
import "./styles/notes.css"

function Notes () {
    const [user, setUser] = useState({});
        useEffect(() => {
            auth.onAuthStateChanged(user => {
            if(user) {
              setUser({email: user.email})
            } else {
              setUser({null:''})
            }
        })
    }, [])
    console.log(user)
    
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
    console.log('Aqui va el modal')

    setShowModal((prev) => !prev);
    };
    

return(
        <div className="body-wall">
            <BannerWall/>
        <button onClick={openModal}
        className="btn-add"> Añadir nota   + </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    ) 
}
export default Notes