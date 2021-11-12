import { db } from "./config";

export const createNotes = (title, note, user) => db.collection('reminds').doc().set({
    title,
    note,
    user,
});
export const notesRef = db.collection('reminds');

export const removeNote = (id) => db.collection('reminds').doc(id).delete();