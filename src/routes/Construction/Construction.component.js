import React, { useState, useEffect } from 'react'
import './Construction.scss'
import { Modal } from '../../components/Modal2/Modal'

const Construction = (props) => {

    const [email, setEmail] = useState('')
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const handleSubcribe = (e) => {
        e.preventDefault();
        props.onEmailSubcribe({email: email})
        openModal();
    }

    return (
        <div className="construct-wrap">
            <Modal
                showModal={showModal} 
                setShowModal={setShowModal} />
            <div className="construct-content">
                <div className="construct-text">
                    <h1 className="construct-title">COMING SOON</h1>
                    <p className="construct-desc">We`ll be here soon with our new awesome site</p>
                    <p className="construct-desc">Subcribe to be notified and thank you for your patience</p>
                </div>
                <div className="construc-form">
                    <input  type="text" 
                            className="construct-input" 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Email" />
                    <button class="construct-button" name="subscribe" onClick={handleSubcribe}>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Construction;