import React, { useState } from "react";
import { createNotes } from '../firebase/firestore';
import "./styles/modal.css"

function Modal ({ openModal, closeShowModal, user }) {
 const [title, setTitle] = useState('');
 const [note, setNote] = useState('');
// const dates= new Date().toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
     createNotes(title, note, user.email, new Date())
     .then(() => {
      console.log('Ya esta en FireStore')
      closeShowModal((visible) => !visible)
     })
  };
  return openModal ? (
    <section className="modal">
      <form className="form-createNote"onSubmit={handleSubmit} >
      <div className="content-btn-close">
        <button className="btn-close" onClick={() => closeShowModal((visible) => !visible)}>x</button>
      </div>
        <input onChange={(e) => {setTitle(e.target.value)}}
        name="title-note" id="title-note" placeholder="Título"/>
        <textarea onChange={(e) => {setNote(e.target.value)}} rows="15"
        name="text-note" id="text-note" placeholder="Escribe tu nota">
        </textarea>
        <button type="submit" className="btn-add-note">Guardar</button>
      </form>
    </section>
  ) : null;
};

export default Modal;