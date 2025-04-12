import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCCsmEjbjTxWh_8136walxaZ-nsnY0MjCE",
  authDomain: "netflix-clone-f29aa.firebaseapp.com",
  projectId: "netflix-clone-f29aa",
  storageBucket: "netflix-clone-f29aa.firebasestorage.app",
  messagingSenderId: "502331153325",
  appId: "1:502331153325:web:c65bbd76897a0c17271f24",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(
      collection(db, "user", {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      })
    );
  } catch (err) {
    console.log(err);
    toast.error(err.code
        .split("/")[1] // get the part after the slash
        .split("-")     // split by dash
        .join(" ")
    )
  }
};

const login = async (email,password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("login Successfully")
  } catch (err) {
    console.log(err);
    toast.error(err.code
        .split("/")[1] // get the part after the slash
        .split("-")     // split by dash
        .join(" ")
    )
  }
};

const logOut = ()=>{
    signOut(auth);
    toast.success("logOut ")
}

export  {logOut,login,signup,auth,db}