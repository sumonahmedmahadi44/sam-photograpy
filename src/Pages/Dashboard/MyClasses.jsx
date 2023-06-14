import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from '../../../public/logo.jpg'

const MyClasses = ({feedback}) => {
  const { user } = useContext(AuthContext);
  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://sam-photgrapy-server.vercel.app/classes/${user?.email}`);
      return res.json();
    },
  });

  return (
    <div className="w-full">
      <SectionTitle
        heading="My Classes"
        subHeading="Welcome to Sam Photography"
        image={logo}
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="font-extrabold text-orange-600 text-xs">#</th>
              <th className="font-extrabold text-orange-600 text-xs">className</th>
              <th className="font-extrabold text-orange-600 text-xs">Image</th>
              <th className="font-extrabold text-orange-600 text-xs">Price</th>
              <th className="font-extrabold text-orange-600 text-xs">Available seat</th>
              <th className="font-extrabold text-orange-600 text-xs">Enroll Students</th>
              <th className="font-extrabold text-orange-600 text-xs">Status</th>
              <th className="font-extrabold text-orange-600 text-xs">Feedback</th>
              <th className="font-extrabold text-orange-600 text-xs">Update</th>
              {/* <th>Update</th>
                            <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
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

                <td className="font-bold">${cls.price}</td>
                <td className="font-bold text-center">{cls.AvailableSeat}</td>
                <td className="font-bold text-center">{cls.enroll}</td>
                <td className="font-bold">${cls.status}</td>
                <td className="font-bold">{feedback? feedback : 'NO Feedback'}</td>
                <td>
                  <button className="btn btn-secondary">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
