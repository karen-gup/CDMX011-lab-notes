import { useState, useEffect } from "react";
import { auth } from '../firebase/config';
import Modal from "./modal";
import Notes from './notes';
import {BannerWall} from "./banner"
import "./styles/notes.css"

function Wallnotes () {
  const [user, setUser] = useState({});
  const newNote = { title: "", information: "", date: "" };
  useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user) {
          setUser({email: user.email})
        } 
    })
}, [])

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal((visible) => !visible);
      console.log('abreModal')
    };

return( 
        <section className="body-wall">
              <BannerWall/>
          <div className="main-bnt">
            <p className="text-profile">{user.email} <br/> My reminds </p>
            <button onClick={openModal}
            className="btn-add"> Añadir nota   + </button>
          </div> 
              <Modal 
              showModal={showModal} 
              setShowModal={setShowModal} 
              user={user}
              notes={newNote}
              />
              <Notes user={user}/>
      </section>
    ) 
};
export default Wallnotes;