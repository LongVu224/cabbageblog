import React, { useEffect } from 'react';
import './Blog.scss'

const Blog = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        props.onFetchBlog(props.match.params.id)
    }, [props.onFetchBlog])

    const {title, text, date, tag, blogImg} = props.blog.data
    
    return (
    <div>
        <div className='blog-header'>
            {props? console.log(props.blog.data) : null}
            <img alt='' className='blog-image' src={blogImg} />
        </div>
        <div className='blog-body container col-sm-12 col-md-8'>
            <div className='blog-post'>
                <hr />
                <div className="blog-post-header">
                    <h2 className="blog-post-title"> {title} <small className="blog-post-date"> {date} </small></h2>
                </div>
                <p>{text}</p>
                <div className="callout callout-post">
                    <ul className="menu simple">
                        <li>Tags: {tag}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Blog;