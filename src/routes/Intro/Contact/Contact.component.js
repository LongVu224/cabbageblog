import React from 'react'
import { Input, TextArea } from "../../../components/Input";
import { Link } from 'react-router-dom';
import './Contact.scss'

const Contact = () => {

    return(
        <div className="contact-root">
            <div className="contact-wrap container">
                <div className="contact-side">
                    <div>
                    <Link to='/' className='social-logo contact-side-logo'>
                        Cabbage 
                        <i className='fas fa-paw' />
                    </Link>
                    </div>
                    <div className="contact-side-form">
                    <h3>Get in touch with Cabbage</h3>
                    <Input placeholder="Name" />
                    <Input type="text" placeholder="Email" />
                    <Input type="text" placeholder="Subject" />
                    <TextArea type="text" placeholder="Message" />
                    <button>Submit</button>
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
    )
}

export default Contact