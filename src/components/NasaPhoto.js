import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto(){
    const [photoData, setPhotoData] = useState(null);

    useEffect(()=>{
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);
    console.log(photoData);

    if(!photoData) 
        return("Not Found");
    

    return(
        <>
            <NavBar/>
            {/* //flex flex-row */}
            <div className="grid md:grid-cols-2 gap-4 m-4">
                {
                    photoData.media_type === "image" ? (
                        <img src={photoData.url} alt={photoData.title} className="rounded-xl" />
                    ) : (
                        <iframe
                            title="space-video"
                            src={photoData.url}
                            //frameBorder="0"
                            //gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo" />
                    )
                }
                <div>
                    <h1 className="text-3xl mb-3 text-heading font-semibold font-serif">Astronomy Picture of the Day</h1>
                    <h1 className="text-2xl mb-3 text-heading font-serif">APOD Title: {photoData.title}</h1>
                    <p className="mb-2 text-2xl text-heading font-serif">Date: {photoData.date}</p>
                    <p className="text-xl font-mono leading-normal">{photoData.explanation}</p>
                </div>

            </div>
        </>
    );
}