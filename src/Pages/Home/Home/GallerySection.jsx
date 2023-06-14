import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle';
import logo from '../../../../public/logo.jpg'
import Container from '../../Shared/Container/Container';

const GallerySection = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1641202905211-1c82ff51f6e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 1' },
    { src: 'https://images.unsplash.com/photo-1679027506214-b9e78b7c64dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 2' },
    { src: 'https://images.unsplash.com/photo-1667777529243-bb5aa732924b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 3' },
    { src: 'https://images.unsplash.com/photo-1681507353720-923db81f937b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob3RvZ3JhcGh5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 4' },
    { src: 'https://images.unsplash.com/photo-1683195071117-17941dd368e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBob3RvZ3JhcGh5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 5' },
    { src: 'https://images.unsplash.com/photo-1685993569453-25e1c761dc90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBob3RvZ3JhcGh5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 6' },
    { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 7' },
    { src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', alt: 'Image 8' },
    { src: 'https://images.unsplash.com/photo-1611670996450-eb7f17a52a83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBob3RvZ3JhcGh5JTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', alt: 'Image 9' },
  ];

  return (
   <Container> <div className="bg-gray-900 py-12">
        
   <SectionTitle
heading="Our Gallery Section"
subHeading="Welcome to Sam Photography"
image={logo}
></SectionTitle>
<div className="container mx-auto">

<div className="flex flex-wrap justify-center">
  {images.map((image, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.9 },
        rotate:[0, 0, 270, 270, 0]
      }}
      whileTap={{ scale: 0.95 }}
      
      
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2"
    >
      <div className="rounded-lg overflow-hidden">
        <img src={image.src} alt={image.alt} className="w-full h-auto" />
      </div>
    </motion.div>
  ))}
</div>
</div>
</div></Container>
  );
};

export default GallerySection;
