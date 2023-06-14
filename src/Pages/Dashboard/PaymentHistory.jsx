import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/SectionTitle';
import logo from '../../../public/logo.jpg'


const PaymentHistory = () => {
    const {user}=useContext(AuthContext);
    const {data:enrolledClass=[],isLoading:loading, refetch}=useQuery({
        queryKey:['enrolledClass',user?.email],
        queryFn:async()=>{
            const res = await fetch(`https://sam-photgrapy-server.vercel.app/paymentHistory?email=${user?.email}`);
            return res.json();
        }
    })
    return (
        <div className="w-full">
      <SectionTitle
        heading="My Payment History"
        subHeading="Welcome to Sam Photography"
        image={logo}
      ></SectionTitle>
      <div className="overflow-x-auto w-full bg-gradient-to-r from-purple-500 to-pink-500200">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="font-extrabold text-orange-600 text-xs">#</th>
              <th className="font-extrabold text-orange-600 text-xs">className</th>
              <th className="font-extrabold text-orange-600 text-xs">Quantity</th>
              <th className="font-extrabold text-orange-600 text-xs">email</th>
              <th className="font-extrabold text-orange-600 text-xs">Image</th>
              <th className="font-extrabold text-orange-600 text-xs">InstructorName</th>
              <th className="font-extrabold text-orange-600 text-xs">Price</th>
              
              {/* <th>Update</th>
                            <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <div className="font-bold">{cls.className}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{cls.quantity}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{cls.email}</div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.image}
                          alt="internet Error"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td className="font-bold">${cls.InstructorName}</td>
               
                <td className="font-bold">${cls.price}</td>
                
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default PaymentHistory;