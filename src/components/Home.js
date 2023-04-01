import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <div className="text-3xl flex flex-col h-screen items-center justify-center">
                <Link className="hover:opacity-70" to="/nasaphoto" >See into the stars!</Link>
            </div>
        </>
    );
};

