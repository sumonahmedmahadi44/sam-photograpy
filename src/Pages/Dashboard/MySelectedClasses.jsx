import React from "react";
import UseSelectedClass from "../../Hooks/UseSelectedClass";
import SectionTitle from "../../components/SectionTitle";
import { FaCcAmazonPay, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.jpg";

const MySelectedClasses = () => {
  const [selectedClass, , refetch] = UseSelectedClass();

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
        fetch(
          `https://sam-photgrapy-server.vercel.app/deleteSelectedClass/${cls._id}`,
          {
            method: "DELETE",
          }
        )
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
        image={logo}
      ></SectionTitle>
      <div className="overflow-x-auto w-full mt-8">
        <table className="table w-full bg-gradient-to-r from-purple-500 to-pink-500100">
          {/* head */}
          <thead>
            <tr>
              <th className="font-extrabold text-orange-600 text-xs">#</th>
              <th className="font-extrabold text-orange-600 text-xs">
                className
              </th>
              <th className="font-extrabold text-orange-600 text-xs">Image</th>
              <th className="font-extrabold text-orange-600 text-xs">
                InstructorName
              </th>
              <th className="font-extrabold text-orange-600 text-xs">
                InstructorEmail
              </th>
              <th className="font-extrabold text-orange-600 text-xs">Price</th>
              <th className="font-extrabold text-orange-600 text-xs">
                Available seat
              </th>

              <th className="font-extrabold text-orange-600 text-xs">
                Payment
              </th>
              <th className="font-extrabold text-orange-600 text-xs">Delete</th>
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

                <td className="font-bold">${cls.InstructorName}</td>
                <td className="font-bold">${cls.InstructorEmail}</td>
                <td className="font-bold">${cls.price}</td>
                <td className="font-bold text-center">{cls.AvailableSeat}</td>

                <td className="font-bold">
                  <Link to={`/dashboard/payment/${cls._id}`}>
                    {" "}
                    <button className="btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500500 ">
                      <FaCcAmazonPay></FaCcAmazonPay> Pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteClass(cls)}
                    className="btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500500 "
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
