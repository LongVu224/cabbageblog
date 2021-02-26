import React from 'react';
import './Trailer.css';

export const Trailer = () => {
    const video = '/videos/video-1.mp4'

    return (
        <div>
            <div className="trailer">
                <div className="video-container">
                    <video src='/videos/trailer.mp4' autoPlay/>
                </div>
            </div>
        </div>
    )
}
