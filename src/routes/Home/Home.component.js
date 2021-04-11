import React, { useEffect } from 'react'
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"

const Home = (props) => {
    const videoUrl = '/videos/header.mp4'

    useEffect(() => {
        props.onFetchBlog()
    }, [props.onFetchBlog])
    
    return (
    <div>
        <HeroSection video={videoUrl}/>
        <Cards 
            blogs = {props.home.data}
            loading = {props.home.loading}
        />
    </div>
    )
}

export default Home;