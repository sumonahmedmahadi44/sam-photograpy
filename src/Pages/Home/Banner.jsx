import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/download1.jpg'
import img2 from '../../assets/download2.jpg'
import img3 from '../../assets/download3.jpg'
import Container from '../Shared/Container/Container';



const Banner = () => {
    return (
       <Carousel className='text-center max-w-[2520px] mx-auto  md:px-10 sm:px-2 px-4 '>
        <div className=' p-2 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl'>
            <img className='rounded-3xl' src={img1} />
        
        </div>
        <div className=' p-2 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl'>
            <img className='rounded-3xl' src={img2}/>
        
        </div>
        <div className=' p-2 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl'>
            <img className='rounded-3xl' src={img3} />
        
        </div>
        <div className=' p-2 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl'>
            <img className='rounded-3xl' src={img1} />
        
        </div>
        <div className=' p-2 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl'>
            <img className='rounded-3xl' src={img3}/>
        
        </div>
        <div className=' p-2 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl'>
            <img className='rounded-3xl' src={img2} />
        
        </div>
    </Carousel>
    );
};

export default Banner;