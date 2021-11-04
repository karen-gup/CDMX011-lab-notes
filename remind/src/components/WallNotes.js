import React, {useEffect, useState} from "react";
import { db } from "../firebase/config";
import "./styles/notes.css"

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
      console.log(notes.title)

return (
    <div className="div-notes">
        {notes.map((note) => (
            <section className="content-note">
                <h2 className="title-note">{note.title}</h2>
                <p className="text-note">{note.note}</p>
            </section>

  ))}
        </div>
);
}
export default WallNotes