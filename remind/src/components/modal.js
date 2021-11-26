import React, { useState } from "react";
import { createNotes, editNote } from '../firebase/firestore';
import "./styles/modal.css"

function Modal({ showModal, setShowModal, user ,selectedNote = { title: "", message: ""} }) {
  const [note, setnote] = useState(selectedNote)
  
  const handleInput = (e) => {
    setnote({ ...note, [e.target.id]: e.target.value })
  }

  const handleClose = () => {
    setShowModal((visible) => !visible)
    setnote(prevNote => prevNote = selectedNote);
    console.log(note)
  }

  const handleEdit = (e) => {
      editNote(note.id).update({
        title: note.title,
        note: note.note,
        date: new Date()
      })
        .then(() => {
          console.log('Ya esta editado');
          setShowModal((visible) => !visible)
          setnote(prevNote => prevNote = selectedNote);
          console.log(note)
        })
  }    

  const handleCreate = (e) => {
    e.target.reset()
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
          setnote(selectedNote);
        })
    
  };



  return showModal ? (
    <section className="modal">
      <div className="container-modal">
        <button className="btn-close" onClick={handleClose}>x</button>
        <form className="form-createNote" /* onSubmit={handleSubmit} */ >
          <input onChange={handleInput} maxLength="22"
            name="title" id="title" placeholder="Título" value={note.title} />
          <textarea onChange={handleInput} rows="15" maxLength="120" name="note" id="note"
            placeholder="Escribe tu nota" value={note.note} />
          {note.id ?
            <button onClick={handleEdit}
            /* type="submit" */ className="btn-edit-note">Actualizar</button> :
            <button onClick={handleCreate}
            /* type="submit" */ className="btn-add-note">Guardar</button>
          }
        </form>
      </div>
    </section>
  ) : null;
};

export default Modal;