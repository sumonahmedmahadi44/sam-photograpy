import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../public/logo.jpg'
import UseAdmin from '../Hooks/UseAdmin';
import UseInstructor from '../Hooks/UseInstructor';
import { FaHome} from 'react-icons/fa';


const Dashboard = () => {
    const [isAdmin]= UseAdmin();
    const [isInstructor] = UseInstructor();
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    
    <div className="menu p-4 w-80 h-full bg-teal-200 text-base-content">
    <div className='flex flex-col items-center my-10'>
    <img className='w-20 h-20 rounded-full' src={logo} alt="" />
     <h1 className='text-2xl font-bold text-black '>SAM Photography</h1>
    </div>
    <ul >
        {
            
            isAdmin ? <> <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='allUser'>All Users</Link></li>
           <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='allClasses'>All classes</Link></li>
            <div className="divider"></div>
      <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'> 
      <FaHome></FaHome> Home</Link></li>
      
            </> : isInstructor? <>
            <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='addClasses'>Add classes</Link></li>
            <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='myClasses'>My classes</Link></li>
            <div className="divider"></div>
      <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'> 
      <FaHome></FaHome> Home</Link></li>
            </> : <>
          
            <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='mySelectedClasses'>my selected classes</Link></li>
            <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='myEnrolledClasses'>My enrolled classes</Link></li>
            <div className="divider"></div>
      <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'> 
      <FaHome></FaHome> Home</Link></li>
            </>
            
        }
      {/* Sidebar content here */}
      {/* <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='mySelectedClass'>My Selected Class</Link></li>
      <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='allUser'>All Users</Link></li>
      <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link>My Enrolled Class</Link></li>
      <div className="divider"></div>
      <li className='text-xl font-semibold border border-black p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'>Home</Link></li> */}
    </ul>
    </div>
  
  </div>
</div>
    );
};

export default Dashboard;