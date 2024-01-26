//import { Link } from "react-router-dom";
import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
export const Login = () => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);

        }
        ).catch((error) => {
            console.log(error.message);

    });
    };
        

    return (
        <div>
        <h1>Login Page</h1>
        <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    );
}