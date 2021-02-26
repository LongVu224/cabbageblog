import React, { useEffect } from 'react';
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"

const Home = (props) => {
    const video = '/videos/video-1.mp4'

    useEffect(() => {
        window.scrollTo(0,0)
        props.onFetchBlog()
    }, [props.onFetchBlog])
    
    return (
    <div>
        <HeroSection video={video}/>
        {props.blogs.data ? <Cards 
            blogs = {props.blogs.data}
        /> : null}
    </div>
    )
}

export default Home;