import React, { useEffect } from 'react'
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"
import { Spinner } from "../../components/Spinner"

const Home = (props) => {
    const video = '/videos/video-1.mp4'

    useEffect(() => {
        window.scrollTo(0,0)
        props.onFetchBlog()
    }, [props.onFetchBlog])
    
    return (
    <div>
        <HeroSection video={video}/>
        {props.blogs.loading ? 
            <Spinner /> : 
            <Cards 
                blogs = {props.blogs.data}
            />}
    </div>
    )
}

export default Home;