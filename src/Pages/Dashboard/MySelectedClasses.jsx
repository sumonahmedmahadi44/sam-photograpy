import React from "react";
import UseSelectedClass from "../../Hooks/UseSelectedClass";
import SectionTitle from "../../components/SectionTitle";
import {  FaCcAmazonPay, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MySelectedClasses = () => {
  const [selectedClass, refetch] = UseSelectedClass();

  const handleDeleteClass = (cls) => {
    Swal.fire({
      title: "Are you sure?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sam-photgrapy-server.vercel.app/deleteSelectedClass/${cls._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <SectionTitle
        heading="My Selected  Classes"
        subHeading="Welcome to Sam Photography"
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>className</th>
              <th>Image</th>
              <th>InstructorName</th>
              <th>InstructorEmail</th>
              <th>Price</th>
              <th>Available seat</th>
              <th>Payment</th>
              <th>Delete</th>
              {/* <th>Update</th>
                            <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {selectedClass.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <div className="font-bold">{cls.className}</div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>

                <td>${cls.InstructorName}</td>
                <td>${cls.InstructorEmail}</td>
                <td>${cls.price}</td>
                <td>${cls.AvailableSeat}</td>
                <td>
                 <Link to={`/dashboard/payment/${cls._id}`}> <button  className="btn btn-ghost bg-teal-500 ">
                    <FaCcAmazonPay></FaCcAmazonPay> Pay
                  </button></Link>
                  
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteClass(cls)}
                    className="btn btn-ghost bg-teal-500 "
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
