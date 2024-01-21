import React, { useState, useEffect } from 'react'
import { ModalInfo } from '../../../components/Modal2/Modal'
import { Input, TextArea } from "../../../components/Input";
import { Bar } from "../../../components/BarLoader";
import './Contact.scss'

const Contact = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showModalError, setShowModalError] = useState(false)

    const modalError = (
        <ModalInfo 
            showModal={showModalError}
            setShowModal={() => setShowModalError(!showModalError)}
            title="Oops"
            content="We are sorry that our Email system is currently down. You can contact us by email: vuhailong224@gmail.com"
            img="https://i.chzbgr.com/full/9347829760/hBCBC6D9E/sorry"
        />
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        const fileData = new URLSearchParams()
        fileData.append("contactEmail", email.toString())
        fileData.append("contactSubject", subject.toString())
        fileData.append("contactMessage", message.toString())
        const emailData = {
            contactEmail: email,
            contactSubject: subject,
            contactMessage: message
        }
        props.onSendEmail(emailData)
    }

    useEffect(() => {
        if(props.contact.sent) {
            setShowModal(true)
        }
    },[props.contact.sent])

    useEffect(() => {
        setShowModalError(true)
    },[])

    return(
        <div>
            {modalError}
            <ModalInfo 
                showModal={showModal} 
                setShowModal={() => setShowModal(!showModal)}
                title="Successfully send email"
                content="Thank you for reaching out to me, meow"
                img="https://i.pinimg.com/originals/55/d3/16/55d3167181de5179c72c8472aaeb8cf1.jpg"/>
            <div className="contact-root">
                <div className="contact-wrap container">
                    <div className="contact-side">
                        <div className="contact-side-form">
                        <h3>Get in touch with Cabbage</h3>
                        <Input 
                            placeholder="Name" 
                            onChange={(e) => setName(e.target.value)} />
                        <Input
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <Input 
                            placeholder="Subject" 
                            onChange={(e) => setSubject(e.target.value)} />
                        <TextArea 
                            type="text" 
                            placeholder="Message" 
                            onChange={(e) => setMessage(e.target.value)} />
                        <button onClick={handleSubmit}>Submit</button>
                        <Bar loading={props.contact.loading} />
                        </div>
                    </div>
                    <div className="contact-title">
                        <h1>
                            Dear <br />
                            Cabbage
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact