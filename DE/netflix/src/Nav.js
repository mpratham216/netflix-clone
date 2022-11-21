import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav(){
    const[show, handleShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            onClick={() => history.push("/")}
            className="nav_logo"
            src="https://imgs.search.brave.com/XcwRIeFyNq3CSs0lzeUpr-vItcln4sj8Q3SpCUXOFJg/rs:fit:1200:550:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDMvTmV0Zmxp/eF9Mb2dvXzIwMTQt/MjA0OHg1NTAucG5n"
            alt="Netflix Logo"
            />
            <img 
            onClick={() => history.push("/profile")}
            className="nav_avatar"
            src="https://imgs.search.brave.com/FwIanBLasy_cznSSRbkZMbVpUKghdwWiYpE0ZIX75ZM/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tLy1F/cU1qYmdJTlU0OC9B/QUFBQUFBQUFBSS9B/QUFBQUFBQUFBQS9I/Q3hZUm9vbUJ4cy9z/OTAwLWMtay1uby9w/aG90by5qcGc"
            alt="Netflix Logo"
            />
        </div>
    );
}   
export default Nav