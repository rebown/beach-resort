import React from 'react'
import BackgroundVideo from './BackgroundVideo';


export const Banner = ({ children, title, subtitle }) => {
    return (
        <>
            <div className="banner">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {children}
            </div>
            <BackgroundVideo />
        </>
    )
}
