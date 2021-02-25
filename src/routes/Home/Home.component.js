import React, { useEffect } from 'react';
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"

const Home = (props) => {

    useEffect(() => {
        props.onFetchBlog();
    }, [props.onFetchBlog]);
    

    return (
    <div>
        <HeroSection />
        <Cards />
    </div>
    )
}

export default Home;