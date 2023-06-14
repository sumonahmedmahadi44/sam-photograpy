import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';

const Main = () => {
    const {loading}= useContext(AuthContext)
    if(loading){
        <span className="loading loading-infinity loading-lg text-secondary"></span>
      }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;