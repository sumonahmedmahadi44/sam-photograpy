import React, { useContext } from "react";
import UseClasses from "../../Hooks/UseClasses";
import SectionTitle from "../../components/SectionTitle";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCheck, FaTimes } from "react-icons/fa";
import logo from '../../../public/logo.jpg'
import { Link } from "react-router-dom";


const AllClasses = () => {
  const [classes, , refetch] = UseClasses();
  const { user } = useContext(AuthContext);

  const handleApproved = (user) => {
    fetch(
      `https://sam-photgrapy-server.vercel.app/classes/status/approved/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "approved succesfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  const handleDenied = (user) => {
    fetch(
      `https://sam-photgrapy-server.vercel.app/classes/status/denied/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "denied succesfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <SectionTitle
        heading="My Classes"
        subHeading="Welcome to Sam Photography"
        image={logo}
      ></SectionTitle>
      <div className="overflow-x-auto w-full bg-gradient-to-r from-purple-500 to-pink-500200">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th className="font-extrabold text-orange-600 text-xs">#</th>
              <th className="font-extrabold text-orange-600 text-xs">Image</th>
              <th className="font-extrabold text-orange-600 text-xs">
                className
              </th>
              <th className="font-extrabold text-orange-600 text-xs">
                Instructor Name
              </th>
              <th className="font-extrabold text-orange-600 text-xs">
                Instructor email
              </th>
              <th className="font-extrabold text-orange-600 text-xs">Price</th>
              <th className="font-extrabold text-orange-600 text-xs">
                 seat
              </th>
              <th className="font-extrabold text-orange-600 text-xs">status</th>
              <th className="font-extrabold text-orange-600 text-xs">
                Approved
              </th>
              <th className="font-extrabold text-orange-600 text-xs">Denied</th>
              <th className="font-extrabold text-orange-600 text-xs">Feedback</th>
              {/* <th>Update</th>
                            <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={cls._id}>
                <td className="font-bold">{index + 1}</td>
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
                <td>
                  <div>
                    <div className="font-bold">{cls.className}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{cls?.displayName}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{cls?.email}</div>
                  </div>
                </td>

                <td className="font-bold">${cls.price}</td>
                <td className="font-bold">{cls.AvailableSeat}</td>
                <td className="font-bold">{cls.status}</td>
                <td>
                  {cls?.status === "approved" || cls.status === "denied" ? (
                    <button
                      disabled
                      className="bg-slate-600 text-xl p-3 rounded-3xl"
                    >
                      <FaCheck></FaCheck>
                    </button>
                  ) : (
                    <button className="p-2 text-2xl" onClick={() => handleApproved(cls)}>
                      <FaCheck></FaCheck>
                    </button>
                  )}
                </td>
                <td>
                  {cls?.status === "denied" || cls?.status === "approved" ? (
                    <button
                      disabled
                      className={"bg-slate-400 text-xl p-3 rounded-3xl"}
                    >
                      <FaTimes></FaTimes>
                    </button>
                  ) : (
                    <button className="p-2 text-2xl" onClick={() => handleDenied(cls)}>
                      {" "}
                      <FaTimes></FaTimes>
                    </button>
                  )}
                </td>
                <td>
                  {cls.status === 'denied'? <Link to='/feedback'><button className="btn bg-gradient-to-r from-purple-500 to-pink-500200 ">Feedback</button> </Link>: <button className="p-2 btn bg-gradient-to-r from-purple-500 to-pink-500200 " disabled>Not Need</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllClasses;
