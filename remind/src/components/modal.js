import React, { useState } from "react";
import { createNotes } from '../firebase/firestore';
import "./styles/modal.css"

function Modal ({ showModal, setShowModal, user }) {
 const [title, setTitle] = useState('');
 const [note, setNote] = useState('');

// const dates= new Date().toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
     createNotes(title, note, user.email, new Date())
     .then(() => {
      console.log('Ya esta en FireStore')
      setShowModal((visible) => !visible)
     })
  };
  return showModal ? (
    <section className="modal">
      <div className="container-modal">
        <button className="btn-close" onClick={() => setShowModal((visible) => !visible)}>x</button>
       <form className="form-createNote"onSubmit={handleSubmit} >
          <input onChange={(e) => {setTitle(e.target.value)}}
            name="title-note" id="title-note" placeholder="Título"/>
          <textarea onChange={(e) => {setNote(e.target.value)}} rows="15"
            name="text-note" id="text-note" placeholder="Escribe tu nota">
          </textarea>
          <button type="submit" className="btn-add-note">Guardar</button>
       </form>
      </div>
    </section>
  ) : null;
};

export default Modal;