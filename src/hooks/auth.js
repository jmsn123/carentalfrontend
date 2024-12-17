import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

async function handleSignUp(email, password, role) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), { role });

        alert("User registered successfully!");
    } catch (error) {
        console.error("Error registering user:", error);
        alert("Error registering user.");
    }
}

async function handleSignIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const role = docSnap.data().role;
            alert(`Welcome, ${role}!`);
        } else {
            console.error("No user role found!");
        }
    } catch (error) {
        console.error("Error signing in:", error);
        alert("Error signing in.");
    }
}

function useAuth() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            setUser(user);
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) setRole(docSnap.data().role);
            } else {
                setRole(null);
            }
        });

        return unsubscribe;
    }, []);

    return { user, role };
}

export { handleSignIn, handleSignUp, useAuth };