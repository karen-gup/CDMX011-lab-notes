import React, {useEffect, useState} from "react";
import {notesRef, removeNote} from '../firebase/firestore';
import Modal from "./modal";
import swal from 'sweetalert';
import remove from '../img/remove.png'
import edit from '../img/edit.png'
import "./styles/notes.css";

function Notes (user) {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const userValue= Object.values(user.user).toString();
    
    useEffect(() => {
        const getNotes =  () => {  
          notesRef.orderBy('date','desc').onSnapshot((snapshot) => {
              let docs = [];
              snapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
                       //   console.log(docs)
              });
             
              setNotes(docs)
            })
          };
        getNotes();
      }, []);
    
    
      const alertRemove =(id) => {
        swal({
          title: "¿Deseas eliminar esta nota?",
          text: "No se podrá recuperar el contenido",
          icon: "warning",
          buttons:["No","Sí"]
        }).then(confirm => {
          if(confirm){
            swal({text:"Se ha eliminado nota",
              icon:"success", timer:"800"});
            removeNote(id);
          }
        });
     }
    
     const editModal = (id) => {
       console.log('Soy el boton editar',id )
       setShowModal((visible) => !visible);
     }
      
return (
    <div className="div-notes">
        {notes.map((note) => 
        userValue=== note.user?
        (
            <section className="content-note" key={note.id} >
                <h2 className="title-note">{note.title.toUpperCase()}</h2>
                <p className="text-note">{note.note}</p>
              <div className="content-delete">
              <small className="date">Modificado:{note.date.toDate().toLocaleString()}</small>
                <img onClick={()=>alertRemove(note.id)}
                src={remove} alt="delete-note" className="icon-remove" />
                <img onClick={()=>editModal(note.id)}
                src={edit} alt="edit-note" className="icon-edit"/>
              </div>
                <Modal
                 showModal={showModal} 
                 setShowModal={setShowModal} 
                 user={user}
                 mood='edit'
                />
            </section>

  ): null
  )}
        </div>
)
}
export default Notes