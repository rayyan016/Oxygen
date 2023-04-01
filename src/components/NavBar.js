import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <>
            <div className="p-3 my-2 mx-1 bg-algae text-xl flex justify-end">
                <Link className="px-2 hover:opacity-60" to={"/"}>Home</Link>
                <Link className="px-2 hover:opacity-60" to={"https://github.com/rayyan016"}>About</Link>
                <Link className="px-2 hover:opacity-60" to={"https://www.linkedin.com/in/rayyan-aslam-686366235/"}>Contact</Link>
            </div>
        </>
    )

}