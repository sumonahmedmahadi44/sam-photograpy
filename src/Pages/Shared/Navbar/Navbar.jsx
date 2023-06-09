import React, {  useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../public/logo.jpg'

import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loggedOut = ()=>{
    logOut()
    .then(result=>{
      const loggedOutUser = result.user;
    })
  }
    return (
      
      <div className='bg-teal-200 container rounded px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className=''>
          <div className='relative flex text-stone-100 items-center justify-between'>
              {/* Logo Section */}
              <Link to='/' className='inline-flex items-center'>
                  
                  <img className='w-16 rounded-full h-16' src={logo} alt="" />
                  <span className='ml-2 text-indigo-600 text-3xl font-bold tracking-wide '>
                      SAM Photography
                  </span>
              </Link>

              {/* Nav Items Section */}
              <ul className='items-center hidden space-x-8 lg:flex'>
                  <li className='text-black font-bold text-xl'>
                      <NavLink
                          to='/'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          Home
                      </NavLink>
                  </li>



                  <li className='text-black font-bold text-xl'>
                      <NavLink
                          to='/blog'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          Instructor
                      </NavLink>
                  </li>
                  <li className='text-black font-bold text-xl'>
                      <NavLink
                          to='/blog'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          Classes
                      </NavLink>
                  </li>
                  <li className='text-black font-bold text-xl'>
                      {user ?
                      <div className='flex items-center gap-6'>
                        <li className='text-black font-bold text-xl'>
                      <NavLink
                          to='dashboard'
                          className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                          DashBoard
                      </NavLink>
                  </li>
                          <button onClick={loggedOut}  className='btn btn-primary'>Logout</button>
                      </div>
                          :
                          <NavLink
                              to='/login'
                              className={({ isActive }) => (isActive ? 'active' : 'default')}
                          >
                              Login
                          </NavLink>

                      }
                  </li>
                  <li>
                    
                      {user ?
                      
                          <img title={user.displayName} className='w-10 rounded' src={user.photoURL} alt="" /> : ''

                      }
                  </li>
              </ul>
              {/* Mobile Navbar Section */}
              <div className='lg:hidden'>
                  {/* Dropdown Open Button */}
                  <button
                      aria-label='Open Menu'
                      title='Open Menu'
                      onClick={() => setIsMenuOpen(true)}
                  >
                      <Bars3BottomRightIcon className='w-5 text-gray-600' />
                  </button>
                  {isMenuOpen && (
                      <div className='absolute top-0 left-0 w-full z-10'>
                          <div className='p-5 bg-white border rounded shadow-sm'>
                              {/* Logo & Button section */}
                              <div className='flex items-center justify-between mb-4'>
                                  <div>
                                      <Link to='/' className='inline-flex items-center'>
                                      <img className='w-16 rounded-full h-16' src={logo} alt="" />
                                          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                          SAM Photography
                                          </span>
                                      </Link>
                                  </div>
                                  {/* Dropdown menu close button */}
                                  <div>
                                      <button
                                          aria-label='Close Menu'
                                          title='Close Menu'
                                          onClick={() => setIsMenuOpen(false)}
                                      >
                                          <XMarkIcon className='w-5 text-gray-600' />
                                      </button>
                                  </div>
                              </div>
                              {/* Mobile Nav Items Section */}
                              <nav>
                                  <ul className='space-y-4'>

                                      <li>
                                          <Link
                                              to='/'
                                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                          >
                                              Home
                                          </Link>
                                      </li>

                                      <li>
                                          
                                      </li>

                                      <li>
                                          <Link
                                              to='/blog'
                                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                          >
                                              Instructor
                                          </Link>
                                      </li>
                                      <li>
                                          <Link
                                              to='/blog'
                                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                          >
                                              classes
                                          </Link>
                                      </li>
                                      <li>
                      {user ?
                      <div className='flex flex-col gap-6'>
                        <li>
                      <Link
                          to='dashboard/mySelectedClass'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400  '
                      >
                          DashBoard
                      </Link>
                  </li>
                          <button onClick={loggedOut}  className='btn btn-primary'>Logout</button>
                      </div>
                          :
                          <NavLink
                              to='/login'
                              className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                          >
                              Login
                          </NavLink>

                      }
                  </li>
                                      <li className=''>
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