import React, { useState } from "react";
import { createNotes, editNote } from '../firebase/firestore';
import "./styles/modal.css"

 function Modal ({ showModal, setShowModal, user, mood, id, title, note}) {
  

  const [updateTitle, setUpdateTitle] = useState(title)
  const [updateNote, setUpdateNote] = useState(note)
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");




  const handleTitle =(e) => {
    console.log("Document data:", title, note, id)
    if(mood==='edit'){
        setUpdateTitle(e.target.value)
    }else{
      setNewTitle(e.target.value)
    }
  }
  
  
  const handleNote =(e) => {
    if(mood==='edit'){
      setUpdateNote(e.target.value)
    }else{
      setNewNote(e.target.value)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if(mood=== 'edit'){
      
      editNote(id).update({
        title:updateTitle,
        note: updateNote,
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
          <input onChange={handleTitle} maxLength="22" value={mood==='edit'?updateTitle:newTitle}
           name="title-note" id="title-note" placeholder="Título"/>
          <textarea onChange={handleNote} rows="15" maxLength="120"
          
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