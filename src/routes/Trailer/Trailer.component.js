import React, { useEffect } from 'react';
import './Trailer.css';


export const Trailer = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div>
            <div className="trailer">
                <div className="video-container">
                    <video src='/videos/trailer.mp4' autoPlay controls/>
                </div>
            </div>
        </div>
    )
}
