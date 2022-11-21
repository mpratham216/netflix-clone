import React, { useRef } from "react";
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, 
    signInWithEmailAndPassword } from "@firebase/auth";
import "./SignInscreen.css";

function SignInscreen(){
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, 
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then((userAuth) => {
            console.log(userAuth.user);
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    
    const signIn = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, 
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then((userAuth) => {
            console.log(userAuth.user);
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    

    
    return(
        <div className="signinscreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn} >Sign In</button>
                <h4>
                    <span className="signinscreen_gray">New to Netflix?</span>
                    <span className="signinscreen_link" onClick={register}>Sign Up now.</span>
                </h4>

            </form>
        </div>
    )
}
export default SignInscreen;