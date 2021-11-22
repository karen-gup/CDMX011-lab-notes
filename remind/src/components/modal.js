import React, { useState } from "react";
import { createNotes } from '../firebase/firestore';
import "./styles/modal.css"

function Modal ({ showModal, setShowModal, user, mood }) {
 const [title, setTitle] = useState('');
 const [note, setNote] = useState('');
 const [updTitle, setUpdTitle] =useState(title);
 const [updNote, setUpdNote] = useState(note);

// const dates= new Date().toLocaleDateString();
  
  const handleTitle =(e) => {setTitle(e.target.value)}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(mood=== 'edit'){
      console.log('Para editar')
     }else{
      createNotes(title, note, user.email, new Date())
      .then(() => {
       console.log('Ya esta en FireStore');
       setShowModal((visible) => !visible);
      })
     }
  };


  return showModal ? (
    <section className="modal">
      <div className="container-modal">
        <button className="btn-close" onClick={() => setShowModal((visible) => !visible)}>x</button>
       <form className="form-createNote" onSubmit={handleSubmit} >
          <input onChange={handleTitle} maxLength="22"
            name="title-note" id="title-note" placeholder="Título"/>
          <textarea onChange={(e) => {setNote(e.target.value)}} rows="15" maxLength="120"
            name="text-note" id="text-note" placeholder="Escribe tu nota">
          </textarea>
        {   mood==='edit'?
          <button type="submit" className="btn-edit-note">Actualizar</button>:
          <button type="submit" className="btn-add-note">Guardar</button>
      }
       </form>
      </div>
    </section>
  ) : null;
};

export default Modal;