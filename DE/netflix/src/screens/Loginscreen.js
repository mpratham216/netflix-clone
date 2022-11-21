import React, { useState } from "react";
import './Loginscreen.css';
import SignInscreen from "./SignInscreen.js"

function Loginscreen(){
    const [signIn, setSignIn] = useState(false);
    return (
      <div className="loginscreen">
        <div className="loginscreen_background">
            <img 
            className="loginscreen_logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt=""/>
            <button onClick={() => setSignIn(true)} 
            className="loginscreen_btn">
            Sign In
            </button>

            <div className="loginscreen_gradient"/>
        </div>

        <div className="loginscreen__body">
            {signIn ? (
                <SignInscreen/>
            ):(
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3> Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="loginscreen_input">
                    <form>
                        <input type="email" placeholder="Email Address"/>
                        <button onClick={() => setSignIn(true)}
                        className="loginscreen_getStarted">
                            GET STARTED
                        </button>
                    </form>
                    </div>
                </>
            )}
           
        </div>
    </div>
    )
    
}
export default Loginscreen;