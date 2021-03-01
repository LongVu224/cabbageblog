import React, { useEffect } from 'react'
import './Info.scss';

export const Info  = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="info-root">
            <div className="info-container container">
                <div className="info-header">
                    <h1 className="info-title">~~&nbsp;Cabbage World&nbsp;~~</h1>
                </div>
                <div className="info-content">
                    <hr className="info-hr" />
                    <div className="info-row">
                        <div className="info-text text1">
                            <p>
                            👋 Welcome to my awesome blog 😸 Cabbage World is based on my life with my family in Finland 🧡 
                            </p>
                        </div>
                        <div className="info-img img1">
                            <img alt='' src={"images/info1.jpeg"} />
                        </div>
                    </div>
                    <hr className="info-hr" />
                    <div className="info-row">
                        <div className="info-img img2">
                            <img alt='' src={"images/info2.JPG"} />
                        </div>
                        <div className="info-text text2">
                            <p>
                            The Cabbage Blog will show you that my enjoyment and super fun life besides sleeping 🛏️ 
                            playing toys 🧸 playing catnips 🌿⚗️ or scratching my nails 💅🏻 on something.
                            Do you wonder where I scratched? Sofa, bed or furniture. Visit the blog post to see it. Meow 😻
                            </p>
                        </div>
                    </div>
                    <hr className="info-hr" />
                    <div className="info-row">
                        <div className="info-text text3">
                            <p>
                            If you are curious and love me then give me the motivation to blog every day by subscribing ✨ 
                            The superstar Cabbage cat thank you ✨ I hope you have a purfect meowy day 🥰
                            </p>
                        </div>
                        <div className="info-img img3">
                            <img alt='' src={"images/info3.jpeg"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}