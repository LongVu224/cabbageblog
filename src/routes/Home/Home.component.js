import React, { useEffect, useState } from 'react';
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"

const Home = (props) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        props.onFetchBlog()
    }, [props.onFetchBlog]);
    

    return (
    <div>
        <HeroSection />
        {props.blogs.data ? <Cards 
            blogs = {props.blogs.data}
        /> : null}
    </div>
    )
}

export default Home;