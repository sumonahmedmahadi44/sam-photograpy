import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.jpg";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggole =(e)=>{
    if(e.target.checked){
        setTheme('dark')
    }else{
        setTheme('light')
    }

  }

  const loggedOut = () => {
    logOut().then((result) => {
      const loggedOutUser = result.user;
    });
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <div className=" bg-gradient-to-r from-purple-500 to-pink-500200  container rounded-3xl px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="">
        <div className="relative flex text-stone-100 items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <img className="w-16 rounded-full h-16" src={logo} alt="" />
            <span className="ml-2 text-indigo-600 text-3xl font-bold tracking-wide ">
              SAM Photography
            </span>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-8 lg:flex">
          <li onClick={handleToggole}>
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
            <li className="text-black font-bold text-xl">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>

            <li className="text-black font-bold text-xl">
              <NavLink
                to="/instructor"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Instructor
              </NavLink>
            </li>
            <li className="text-black font-bold text-xl">
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Classes
              </NavLink>
            </li>
            
            <li className="text-black font-bold text-xl">
              {user ? (
                <div className="flex items-center gap-6">
                  <li className="text-black font-bold text-xl">
                    <NavLink
                      to="dashboard"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      DashBoard
                    </NavLink>
                  </li>

                  <button onClick={loggedOut} className="btn btn-primary">
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
            <li>
              {user ? (
                <img
                  title={user.displayName}
                  className="w-10 rounded"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                ""
              )}
            </li>
           
          </ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img
                          className="w-16 rounded-full h-16"
                          src={logo}
                          alt=""
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          SAM Photography
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Home
                        </Link>
                      </li>

                      <li></li>

                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Instructor
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          classes
                        </Link>
                      </li>
                      <li>
                        {user ? (
                          <div className="flex flex-col gap-6">
                            <li>
                              <Link
                                to="dashboard/mySelectedClass"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400  "
                              >
                                DashBoard
                              </Link>
                            </li>
                            <button
                              onClick={loggedOut}
                              className="btn btn-primary"
                            >
                              Logout
                            </button>
                          </div>
                        ) : (
                          <NavLink
                            to="/login"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                          >
                            Login
                          </NavLink>
                        )}
                      </li>
                      <li className="">
                        {/* {user ?
                                              <img title={user.displayName} className='w-10 rounded' src={user.photoURL} alt="" /> : ''

                                          } */}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
