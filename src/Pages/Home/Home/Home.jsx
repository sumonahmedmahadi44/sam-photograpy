import React from 'react';
import Banner from '../Banner';
import PopularClass from './PopularClass';
import PopularInstructor from './PopularInstructor';
import GallerySection from './GallerySection';
import DarkMode from '../../../components/DarkMode/Darkmode';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <DarkMode></DarkMode>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <GallerySection></GallerySection>
            
        </div>
    );
};

export default Home;