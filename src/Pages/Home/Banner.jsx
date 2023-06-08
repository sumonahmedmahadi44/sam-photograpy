import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/download1.jpg'
import img2 from '../../assets/download2.jpg'
import img3 from '../../assets/download3.jpg'
import Container from '../Shared/Container/Container';



const Banner = () => {
    return (
        <Container><Carousel className='text-center'>
        <div>
            <img src={img1} />
        
        </div>
        <div>
            <img src={img2}/>
        
        </div>
        <div>
            <img src={img3} />
        
        </div>
        <div>
            <img src={img1} />
        
        </div>
        <div>
            <img src={img3}/>
        
        </div>
        <div>
            <img src={img2} />
        
        </div>
    </Carousel></Container>
    );
};

export default Banner;