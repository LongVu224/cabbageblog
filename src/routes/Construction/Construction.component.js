import React, {useEffect} from 'react'
import './Construction.scss'

export const Construction = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="construct-wrap">
            <div className="construct-content">
                <div className="construct-text">
                    <h1 className="construct-title">COMING SOON</h1>
                    <p className="construct-desc">We`ll be here soon with our new awesome site</p>
                    <p className="construct-desc">Subcribe to be notified and thank you for your patience</p>
                </div>
                <div className="construc-form">
                    <input  type="text" 
                            className="construct-input" 
                            placeholder="Email" />
                    <button class="construct-button" name="subscribe">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}