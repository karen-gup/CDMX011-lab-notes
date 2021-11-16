import React, {useEffect, useState} from "react";
import {notesRef, removeNote} from '../firebase/firestore';
import swal from 'sweetalert';
import remove from '../img/remove.png'
import "./styles/notes.css";

function Notes (user) {
    const [notes, setNotes] = useState([]);
    // let userCollection = notes.map((note)=> note.user.email)
    const userValue= Object.values(user.user).toString();
    console.log(userValue); 
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
              icon:"success", timer:"1000"});
            removeNote(id);
          }
        });
     }
    
      
return (
    <div className="div-notes">
        {notes.map((note) => 
        userValue=== note.user?
        (
            <section className="content-note" key={note.id} >
                <h2 className="title-note">{note.title}</h2>
                <p className="text-note">{note.note}</p>
              <div className="content-delete">
              <small>modificado:{note.date.toDate().toLocaleString()}</small>
                <img onClick={()=>alertRemove(note.id)}
                src={remove} alt="icon-img" className="icon-remove" />
              </div>
            </section>

  ): null
  )}
        </div>
)
}
export default Notes