import React, {useEffect, useState} from "react";
import { db } from "../firebase/config";
import {removeNote} from '../firebase/firestore';
import swal from 'sweetalert';
import remove from '../img/remove.png'
import "./styles/notes.css";

function WallNotes () {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            db.collection('reminds').onSnapshot((querySnapshot) => {
              const docs = [];
              querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
              });
              setNotes(docs);
            });
          };
        getNotes();
      }, []);
    
      const alertRemove =(id) => {
        swal({
          title: "Eliminar",
          text: "¿deseas eliminar esta nota?",
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
        {notes.map((note) => (
            <section className="content-note" key={note.id} >
                <h2 className="title-note">{note.title}</h2>
                <p className="text-note">{note.note}</p>
              <div className="content-delete">
              <img onClick={()=>alertRemove(note.id)}
              src={remove} alt="icon-img" className="icon-remove" />
              </div>
            </section>

  ))}
        </div>
);
}
export default WallNotes