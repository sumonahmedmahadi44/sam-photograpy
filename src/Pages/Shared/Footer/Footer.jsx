import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import logo from '../../../../public/logo.jpg'
import Container from "../Container/Container";

const Footer = () => {
  return (
    <Container>
      <div className="border-t-2 my-10 border-[#757EFA]">
      
      <footer className="footer grid md:grid-cols-4 p-10  text-base-content">
        <div>
          <span className="footer-title">Useful Links</span>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Tarms & Conditions</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>
            State/area: Gulshan,Dhaka <br />
            Phone number 018******** <br />
            Zip code 1212 <br />
            Country calling code +880 <br />
            Country Bangladesh
          </p>
        </div>
        <div>
          <span className="footer-title">About Us</span>
          <p>
          Experience the art of photography in a captivating and immersive environment at our Photography Camp. Unleash your creativity while learning from industry professionals, exploring breathtaking landscapes, and mastering the technical aspects of capturing stunning images. Join us for an unforgettable journey that will enhance your skills, expand your vision, and create lifelong memories. Discover the world through the lens and elevate your photography to new heights.
          </p>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t  text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img
            className="w-24"
            src={logo}
            alt=""
          />
          <p>
           SAM Photography <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to={"#"}>
              <FaFacebookSquare />
            </Link>
            <Link to={"#"}>
              <FaInstagramSquare />
            </Link>
            <Link to={"#"}>
              <FaTwitterSquare />
            </Link>
            <Link to={"#"}>
              <FaYoutubeSquare />
            </Link>
          </div>
        </div>
      </footer>
      <p className="text-center bg-black text-white">
        <small>Copyright All right reserved || 2023 || ToyLand</small>
      </p>
    </div>
    </Container>
  );
};

export default Footer;