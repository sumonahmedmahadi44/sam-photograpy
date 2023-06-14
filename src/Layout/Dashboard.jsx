import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../public/logo.jpg'
import UseAdmin from '../Hooks/UseAdmin';
import UseInstructor from '../Hooks/UseInstructor';
import { FaHistory, FaHome, FaSchool, FaUserCircle} from 'react-icons/fa';
import { MdClass, MdOutlineClass } from "react-icons/md";
import { GrCheckboxSelected , GrRadialSelected } from "react-icons/gr";
import { AuthContext } from '../Provider/AuthProvider';


const Dashboard = () => {
  const {user,loading}= useContext(AuthContext)
    const [isAdmin]= UseAdmin();
    const [isInstructor] = UseInstructor();
    if(loading){
      <span className="loading loading-infinity loading-lg text-secondary"></span>
    }
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    
    <Outlet></Outlet>
  
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    
    <div className="menu p-4 w-80 h-full  to-pink-500200 text-base-content">
    <div className='flex flex-col items-center my-10 border border-pink-700 border-y-8 p-2'>
    <img className='w-20 h-20 rounded-full' src={logo} alt="" />
     <h1 className='text-2xl font-bold text-black '>SAM Photography</h1>
     <div className=' border  border-pink-700 border-y-4 p-3 rounded-3xl'>
     <h1 className='text-pink-700 font-semibold'>{user?.displayName}</h1>
     <h1 className='text-pink-700 font-semibold'>{user?.email}</h1>
     </div>

    </div>
    <ul >
        {
            
            isAdmin ? <> <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='allUser'> <FaUserCircle></FaUserCircle> All Users</Link></li>
           <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='allClasses'> <FaSchool></FaSchool> All classes</Link></li>
            <div className="divider"></div>
      <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'> 
      <FaHome></FaHome> Home</Link></li>
      
            </> : isInstructor? <>
            <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='addClasses'> <MdClass></MdClass> Add classes</Link></li>
            <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='myClasses'> <MdOutlineClass></MdOutlineClass>  My classes</Link></li>
            <div className="divider"></div>
      <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'> 
      <FaHome></FaHome> Home</Link></li>
            </> : <div className='h-full'>
          
            <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl  hover:bg-orange-300 hover:text-white'><Link to='mySelectedClasses'> <GrCheckboxSelected></GrCheckboxSelected> my selected classes</Link></li>
            <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl  hover:bg-orange-300 hover:text-white'><Link to='myEnrolledClasses'> <GrRadialSelected></GrRadialSelected> My enrolled classes</Link></li>
            <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl  hover:bg-orange-300 hover:text-white'><Link to='paymentHistory'> <FaHistory></FaHistory> My Payment History</Link></li>
            <div className="divider"></div>
      <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'> 
      <FaHome></FaHome> Home</Link></li>
            </div>
            
        }
      {/* Sidebar content here */}
      {/* <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='mySelectedClass'>My Selected Class</Link></li>
      <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='allUser'>All Users</Link></li>
      <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link>My Enrolled Class</Link></li>
      <div className="divider"></div>
      <li className='text-xl font-semibold border  border-pink-700 border-y-4 p-2 rounded-3xl my-2 hover:bg-orange-300 hover:text-white'><Link to='/'>Home</Link></li> */}
    </ul>
    </div>
  
  </div>
</div>
    );
};

export default Dashboard;