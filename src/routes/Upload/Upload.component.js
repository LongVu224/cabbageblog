import React, { useState, useEffect } from "react";
import  { Redirect } from 'react-router-dom'
import './Upload.scss';
import { FilePond } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import { ModalInfo } from '../../components/Modal2/Modal'

const SignIn = (props) => {
    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [tag, setTag] = useState(null)
    const [images, setImages] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const fileData = new FormData()
        fileData.append("title", title)
        fileData.append("text", text)
        fileData.append("tag", tag)
        images.map(image => fileData.append("blogImg", image))
        props.onUploadBlog(fileData)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        if(props.upload.uploaded) {
            setShowModal(true)
        }
    },[props.upload.uploaded])

    if (props.token.fail) {
        return <Redirect to='/sign-in'/>
    }


    return (
        <div className="upload-container">
        <ModalInfo 
            showModal={showModal} 
            setShowModal={() => setShowModal(!showModal)}
            title="Successfully created blog"
            content="Congrats, another awesome blog is now available"/>
        <div className="upload-form-box">
          <div className="upload-header-form">
            <h4 className="text-center"><i className="fas fa-cloud-upload-alt" style={{fontSize:"70px"}}></i></h4>
          </div>
          <div className="upload-body-form">
           <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 upload-input">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-id-card"></i></span>
                </div>
                <input  type="text" 
                        className="form-control" 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Title &#10024;" />
            </div>
            <div className="input-group mb-3 upload-input">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i class="fa fa-tag"></i></span>
                </div>
                <input  type="text" 
                        className="form-control" 
                        onChange={(e) => setTag(e.target.value)} 
                        placeholder="Tag &#128205;" />
            </div>
            <div className="input-group mb-3 upload-input">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i class="fas fa-align-justify"></i></span>
                </div>
                <input  type="text" 
                        className="form-control" 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Text &#128221;" />
            </div>
            <div className="">
                <FilePond
                    files={images}
                    onupdatefiles={fileItems => {setImages(fileItems.map(fileItem => fileItem.file))}}
                    allowMultiple={true}
                    maxFiles={10}
                    name="images"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
            </div>
                <button type="submit" className="btn btn-secondary btn-block upload-button" >Upload</button>
            </form>
          </div>
        </div>
       </div>   
    );
}

export default SignIn;