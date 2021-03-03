import React, { useEffect } from 'react'
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"
import { Spinner } from "../../components/Spinner"

const Home = (props) => {
    const videoUrl = '/videos/header.mp4'

    useEffect(() => {
        props.onFetchBlog()
    }, [props.onFetchBlog])
    
    return (
    <div>
        <HeroSection video={videoUrl}/>
        {props.home.loading ? 
            <Spinner /> : 
            <Cards 
                blogs = {props.home.data}
            />}
    </div>
    )
}

export default Home;