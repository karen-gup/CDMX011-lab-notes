import { auth, provider } from "./config";

export const createUser = (email,password) => auth.createUserWithEmailAndPassword(email, password);

export const gmailAuth = () => auth.signInWithPopup(provider)
    

export const logIn = (email,password) => auth.signInWithEmailAndPassword(email, password);