import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBCyqN_PU4jXqpus5DAr9jO9_dGrodYiI0",
  authDomain: "netflix-clone-21616.firebaseapp.com",
  projectId: "netflix-clone-21616",
  storageBucket: "netflix-clone-21616.firebasestorage.app",
  messagingSenderId: "619082127025",
  appId: "1:619082127025:web:594bc5a10b3a8b5025b490"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {//create user in firebase authentication
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        // store users data in firestore
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "Local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));  
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.done("Redirecting...");
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));       
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,login,signup,logout,db};