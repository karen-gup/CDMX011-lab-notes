import React, { useState } from "react";
import { createNotes, editNote } from '../firebase/firestore';
import "./styles/modal.css"

function Modal ({ showModal, setShowModal, user, mood, id }) {
 // const { id, title, note }= notes
 const [newTitle, setNewTitle] = useState('');
 const [newNote, setNewNote] = useState('');


// const [updTitle, setUpdTitle] =useState(newTitle);
//  const [updNote, setUpdNote] = useState(note);

 
  const handleTitle =(e) => {
      setNewTitle(e.target.value)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(mood=== 'edit'){
      console.log('Para editar')
      editNote(id).update({
        title:newTitle,
        note: newNote,
        date: new Date()
      })
      .then(() => {
        console.log('Ya esta editado');
        setShowModal((visible) => !visible);
       })
     }else{
      createNotes().set({
        title:newTitle,
        note: newNote,
        user: user.email,
        date: new Date(),
    })
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
           value={newTitle} name="title-note" id="title-note" placeholder="Título"/>
          <textarea onChange={(e) => {setNewNote(e.target.value)}} rows="15" maxLength="120"
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