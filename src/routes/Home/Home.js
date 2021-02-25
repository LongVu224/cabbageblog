import React from 'react';
import './Home.css'
import { HeroSection } from '../../components/HeroSection'
import { Cards} from "../../components/Cards"

export const Home = () => {
    return (
    <div>
        <HeroSection />
        <Cards />
    </div>
    )
}