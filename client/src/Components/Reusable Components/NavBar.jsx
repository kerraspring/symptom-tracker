import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <div>
            <ul className="">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/log"}> Detailed Log</Link></li>
                <li><Link to={"/logout"}>Logout</Link></li>
                <li><Link to={"/about"}>About</Link></li>
            </ul>
        </div>
    )
    
}