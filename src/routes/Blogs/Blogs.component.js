import React, { useEffect } from 'react'
import { Spinner } from "../../components/Spinner"
import './Blogs.scss'

const Blogs = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
        props.onFetchBlog()
    }, [props.onFetchBlog])
    
    return (
    <div className="blog-root">
        {props.blogs.loading ? 
            <Spinner /> : 
            <div className="wrap container">
            <h1 class="background"><span>Cabbage Collections</span></h1>
            {props.blogs.data.map(blog => 
                <div className="blog-row">
                    <a href={'/blog/' + blog._id}>
                    <div className="blog-overlay"></div>
                    <div className="blog-icon">
                        <img className="blog-img" src={blog.blogImg ? blog.blogImg[0] : null} />
                    </div>
                    <div class="blog-content">
                        <h3>{blog.title}</h3>
                        <h6>{blog.date}</h6>
                    </div>

                    <div class="blog-arrow">
                        <i class="fa fa-angle-right"></i>
                    </div>
                    </a>
                </div>
            )}
        </div>}
    </div>
    )
}

export default Blogs;