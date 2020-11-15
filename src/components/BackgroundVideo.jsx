import React from 'react'

const BackgroundVideo = () => {
    const videoSource = "/Videos/video1.mp4";
    return (
        <div>
           <video loop autoPlay>
                <source src= { videoSource } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
        </div>
    );
}

export default BackgroundVideo;