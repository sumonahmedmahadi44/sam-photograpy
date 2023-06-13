import React, { useContext } from 'react';
import UseClasses from '../../Hooks/UseClasses';
import SectionTitle from '../../components/SectionTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcApproval } from 'react-icons/fc';
import { FaCheck, FaTimes } from 'react-icons/fa';

const AllClasses = () => {
    const [classes, refetch] = UseClasses();
    const { user } = useContext(AuthContext);

    const handleApproved = user => {
        
        fetch(`https://sam-photgrapy-server.vercel.app/classes/status/approved/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'approved succesfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                   
                }
            })
    }
    const handleDenied = user => {
        
        fetch(`https://sam-photgrapy-server.vercel.app/classes/status/denied/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'denied succesfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                   
                }
            })
    }




    return (
        <div className="w-full">
            <SectionTitle heading="My Classes" subHeading="Welcome to Sam Photography"></SectionTitle>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>className</th>
                            <th>Instructor Name</th>
                            <th>Instructor email</th>
                            <th>Price</th>
                            <th>Available seat</th>
                            <th>status</th>
                            <th>Approved</th>
                            <th>Denied</th>
                            {/* <th>Update</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr key={cls._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{cls.className}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{user?.displayName}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{user?.email}</div>
                                    </div>
                                </td>

                                <td >${cls.price}</td>
                                <td >${cls.AvailableSeat}</td>
                                <td >${cls.status}</td>
                                <td >
                                    {cls?.status==='approved' || cls.status === 'denied'?
        (<button disabled className='bg-slate-600 text-xl p-3 rounded-3xl'><FaCheck></FaCheck></button>)  : (<button onClick={()=>handleApproved(cls)} >
            <FaCheck></FaCheck>
        </button> )                         }
                                </td>
                                <td>
                                    {cls?.status ==='denied' || cls?.status === 'approved'?(<button disabled className={'bg-slate-400 text-xl p-3 rounded-3xl'}><FaTimes></FaTimes></button>):(<button onClick={()=>handleDenied(cls)} > <FaTimes></FaTimes></button>)}
                                </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default AllClasses;