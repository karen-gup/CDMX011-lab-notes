import 'firebase/firestore'
import { db } from "./config";

export const createNotes = () => db.collection('reminds').doc();

export const notesRef = db.collection('reminds');

export const removeNote = (id) => db.collection('reminds').doc(id).delete();

export const editNote = (id) => db.collection('reminds').doc(id);

export const getDetailnote =(id)=>db.collection("reminds").doc(id).get();