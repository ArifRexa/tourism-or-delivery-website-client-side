import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const AuthInit = () => {
    initializeApp(firebaseConfig)
}

export default AuthInit;