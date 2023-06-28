import { writable } from "svelte/store";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../lib/firebase/firebase";
import { collection, addDoc } from "firebase/firestore"; 


export const authStore = writable({
    user: null,
    loading: true,
    data: {}
})

export const authHandlers = {
    signup: async (email, pass) => {
        await createUserWithEmailAndPassword(auth, email, pass)
    },
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth);
    }
}

export const userNames = {
    addnames: async (first, last) => {
        await addDoc(collection(db, "users"), {
            first: first,
            last: last
        })
    }
}