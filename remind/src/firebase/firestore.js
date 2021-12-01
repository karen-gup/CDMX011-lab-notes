import 'firebase/firestore'
import { db } from "./config";

export const createNotes = (addNote) => db.collection('reminds').doc().set(addNote);

export const notesRef = db.collection('reminds');

export const removeNote = (id) => db.collection('reminds').doc(id).delete();

export const editNote = (id, newNote) => db.collection('reminds').doc(id).update(newNote);

export const getDetailnote =(id)=>db.collection("reminds").doc(id).get();