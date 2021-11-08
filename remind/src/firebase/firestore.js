import { db } from "./config";

export const createNotes = (title, note) => db.collection('reminds').doc().set({
    title,
    note,
});
export const showNotes = (querySnapshot) => db.collection('reminds').onSnapshot(querySnapshot);

export const removeNote = (id) => db.collection('reminds').doc(id).delete();