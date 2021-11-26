import React, { useState } from "react";
import { createNotes, editNote } from '../firebase/firestore';
import "./styles/modal.css"

function Modal({ showModal, setShowModal, user ,selectedNote = { title: '', message: ''} }) {
  const [note, setnote] = useState(selectedNote)

  const handleInput = (e) => {
    setnote({ ...note, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.id) {
      editNote(note.id).update({
        title: note.title,
        note: note.note,
        date: new Date()
      })
        .then(() => {
          console.log('Ya esta editado');
          setShowModal((visible) => !visible);
        })
    } else {
        createNotes().set({
        title: note.title,
        note: note.note,
        user: user.email,
        date: new Date(),
      })
        .then(() => {
          console.log('Ya esta en FireStore');
          console.log(note.title, note.note, user.email)
          setShowModal((visible) => !visible);
        })
    }
  };



  return showModal ? (
    <section className="modal">
      <div className="container-modal">
        <button className="btn-close" onClick={() => setShowModal((visible) => !visible)}>x</button>
        <form className="form-createNote" onSubmit={handleSubmit} >
          <input onChange={handleInput} maxLength="22"
            name="title" id="title" placeholder="Título" value={note.title} />
          <textarea onChange={handleInput} rows="15" maxLength="120" name="note" id="note"
            placeholder="Escribe tu nota" value={note.note} />
          {note.id ?
            <button type="submit" className="btn-edit-note">Actualizar</button> :
            <button type="submit" className="btn-add-note">Guardar</button>
          }
        </form>
      </div>
    </section>
  ) : null;
};

export default Modal;