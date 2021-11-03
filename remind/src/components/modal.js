import React, { useState } from "react";
import { createNotes } from '../firebase/firestore';
import "./styles/modal.css"

function Modal ({ showModal, setShowModal }) {
 const [title, setTitle] = useState('')
 const [note, setNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
     createNotes(title, note)
     .then(() => {
      console.log('Ya esta en FireStore')
     })
  };
  return showModal ? (
    <div className="modal">
      <form className="form-createNote" >
      <div className="content-btn-close">
        <button className="btn-close" onClick={() => setShowModal((prev) => !prev)}>x</button>
      </div>
        <input onChange={(e) => {setTitle(e.target.value)}}
        name="title-note" id="title-note" placeholder="Título"/>
        <textarea onChange={(e) => {setNote(e.target.value)}} rows="15"
        name="text-note" id="text-note" placeholder="Estribe tu nota">
        </textarea>
        <button onClick={handleSubmit}
        type="submit" className="btn-add-note">Guardar</button>
      </form>
    </div>
  ) : <h3>Modal oculto</h3>;
};

export default Modal;