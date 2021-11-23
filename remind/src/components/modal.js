import React, { useState, useEffect } from "react";
import { createNotes, editNote, getDetailnote } from '../firebase/firestore';
import "./styles/modal.css"

function Modal ({ showModal, setShowModal, user, mood, id/* , title, note */ }) {
 // const { id, title, note }= notes
 const [newTitle, setNewTitle] = useState('');
 const [newNote, setNewNote] = useState('');
const [detail,setDetail] = useState(null)

// const [updTitle, setUpdTitle] =useState(title);
//  const [updNote, setUpdNote] = useState(note);`

useEffect(()=>{
getDetailnote(id).then((doc) => {
  if (doc.exists) {
      console.log("Document data:", doc.data());
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});
},[])

console.log('Para editar', id)
 
  const handleTitle =(e) => {
      setNewTitle(e.target.value)
    
  }
  
  const handleNote =(e) => {
      setNewNote(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(mood=== 'edit'){
      
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
          <input onChange={handleTitle} maxLength="22" /* value={updTitle} */
           name="title-note" id="title-note" placeholder="Título"/>
          <textarea onChange={handleNote} rows="15" maxLength="120"
            /* value={updNote} */
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