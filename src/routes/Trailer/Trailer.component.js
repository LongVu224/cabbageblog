import React, { useEffect } from 'react';
import './Trailer.css';


export const Trailer = () => {
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
