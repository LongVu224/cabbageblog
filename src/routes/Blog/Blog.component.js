import React, { useEffect } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/styles.css';
import './Blog.scss';
import Badge from 'react-bootstrap/Badge'
import { Spinner } from '../../components/Spinner'

const Blog = (props) => {

    useEffect(() => {
        props.onFetchBlog(props.match.params.id)
    }, [props.onFetchBlog])

    const {title, text, date, tag, blogImg} = props.blog.data

    const slider = (
        <AwesomeSlider cssModule={AwesomeSliderStyles}>
            {blogImg ? blogImg.map(img => (
                <div className="">
                    <img alt='' className='blog-image' src={img} />
                </div>
            )) : null}
        </AwesomeSlider>
      );
    
    return (
    <div className="wrapper">
        {props.blog.loading ? 
        <Spinner /> :
        <div>
            <div className='blog-header'>
                {slider}
            </div>
            <div className='blog-body container col-sm-12 col-md-8'>
                <div className='blog-post'>
                    <hr />
                    <div className="blog-post-header">
                        <h2 className="blog-post-title"> {title} <small className="blog-post-date"> {date} </small></h2>
                    </div>
                    <p>{text}</p>
                    <div className="blog-post-tag">
                        <p>Tags: <Badge variant="dark">{tag}</Badge></p>
                    </div>
                </div>
            </div>
        </div>}
    </div>
    )
}

export default Blog;