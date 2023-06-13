import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";

const MyClasses = () => {
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
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>className</th>
              <th>Image</th>
              <th>Price</th>
              <th>Available seat</th>
              <th>Status</th>
              <th>Update</th>
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

                <td>${cls.price}</td>
                <td>${cls.AvailableSeat}</td>
                <td>${cls.status}</td>
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
