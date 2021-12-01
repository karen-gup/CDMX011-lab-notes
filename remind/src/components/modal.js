import React, { useState } from "react";
import { createNotes, editNote } from '../firebase/firestore';
import "./styles/modal.css"

function Modal({ showModal, setShowModal, user ,selectedNote  }) {
  const [note, setnote] = useState(selectedNote)

  const handleInput = (e) => {
    setnote({ ...note, [e.target.id]: e.target.value })
    
  }
 
  const handleClose = () => {
    setnote(selectedNote);
    setShowModal((visible) => !visible)
     console.log(note);
  }

  const handleEdit = (e) => {
    e.preventDefault()
      editNote(note.id,{
        title: note.title,
        note: note.note,
        date: new Date()
      })
        .then(() => {
          console.log('Ya esta editado');
          setShowModal((visible) => !visible)
          setnote(selectedNote);
          // console.log(selectedNote)
        })
  }    

  const handleCreate = (e) => {
    e.preventDefault()
        createNotes({
        title: note.title,
        note: note.note,
        user: user.email,
        date: new Date(),
      })
        .then(() => {
          console.log('Ya esta en FireStore');
          setShowModal((visible) => !visible);
          setnote(selectedNote);
        })
        .catch((error)=> {
          console.log(error.message)
          console.log('no se subio')
        })
    
  };



  return showModal ? (
    <section className="modal">
      <div className="container-modal">
        <button className="btn-close" onClick={handleClose}>x</button>
        <form className="form-createNote" >
          <input onChange={handleInput} maxLength="22"
            name="title" id="title" placeholder="Título" value={note.title} />
          <textarea onChange={handleInput} rows="15" maxLength="120" name="note" id="note"
            placeholder="Escribe tu nota" value={note.note} />
          {note.id ?
            <button onClick={handleEdit}
            className="btn-edit-note">Actualizar</button> :
            <button onClick={handleCreate}
            className="btn-add-note">Guardar</button>
          }
        </form>
      </div>
    </section>
  ) : null;
};

export default Modal;