import React, { useContext } from 'react';
import Banner from '../Banner';
import PopularClass from './PopularClass';
import PopularInstructor from './PopularInstructor';
import GallerySection from './GallerySection';
import { AuthContext } from '../../../Provider/AuthProvider';

const Home = () => {
    const {loading}=useContext(AuthContext);

    if(loading){
        <div className='text-center'><div><progress className="progress progress-primary w-56" value="0" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="10" max="100"></progress></div>
        <div><progress className="progress progress-success w-56" value="40" max="100"></progress></div>
        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="100" max="100"></progress></div></div>
    }
    return (
        <div>
            
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <GallerySection></GallerySection>
            
        </div>
    );
};

export default Home;