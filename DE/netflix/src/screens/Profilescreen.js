import { signOut } from "@firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./Profilescreen.css"

function Profilescreen() {
    const user = useSelector(selectUser);

    return(
        
        <div className="profilescreen">
            <Nav />
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilescreen_info">
                    <img src="https://imgs.search.brave.com/FwIanBLasy_cznSSRbkZMbVpUKghdwWiYpE0ZIX75ZM/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tLy1F/cU1qYmdJTlU0OC9B/QUFBQUFBQUFBSS9B/QUFBQUFBQUFBQS9I/Q3hZUm9vbUJ4cy9z/OTAwLWMtay1uby9w/aG90by5qcGc" alt=""/>
                
                    <div className="profilescreen_details">
                        <h2>{user.email}</h2>
                        <div className="profilescreen_plans">
                            <h3>Plans</h3>
                           
                            <button onClick={() =>{
                                signOut(auth);
                            }} 
                            className="profilescreen_signout">Sign Out</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
};

export default Profilescreen;