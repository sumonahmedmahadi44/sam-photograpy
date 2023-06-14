import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAdmin from "../../Hooks/UseAdmin";
import UseInstructor from "../../Hooks/UseInstructor";
import logo from '../../../public/logo.jpg'
import SectionTitle from "../../components/SectionTitle";


const Classes = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin]=UseAdmin();
  const [isInstructor]=UseInstructor();


  const navigate = useNavigate();
  const location = useLocation();

  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://sam-photgrapy-server.vercel.app/approved");
      return res.json();
    },
  });
  

  

  

  const handleSelectClass = (cls) => {
    console.log(cls)
    const { className, image, price, AvailableSeat, displayName, email, _id} = cls;
    if (user && user.email) {
      const classData = {
        classId:_id,
        className,
        image,
        price,
        AvailableSeat,
        InstructorName: displayName,
        InstructorEmail: email,
        email: user.email,
      };

      fetch('https://sam-photgrapy-server.vercel.app/selectedClass', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "class has been selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to Select the classes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Plese Login!!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <Container>
      <SectionTitle
        heading="ALL  Classes"
        subHeading="Welcome to Sam Photography"
        image={logo}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center my-10">
        {classes.map((cls) => (
          <div key={cls._id} className="card w-96 bg-gradient-to-r from-purple-500 to-pink-500200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={cls.image} alt="Shoes" className="rounded-xl h-96 " />
            </figure>
            <div className="card-body  items-center text-center">
              <h2 className="card-title">ClassName: {cls.className}</h2>
              <p className="font-bold">Instructor Name: {cls.displayName}</p>
              <p className="font-bold">Available Seat :{cls.AvailableSeat}</p>
              <p className="font-bold">Enroll Students : {cls.enroll}</p>
              <p className="font-bold">Price : {cls.price}</p>
              <div className="card-actions">
                <button disabled={isAdmin || isInstructor || cls.AvailableSeat == '0'}
                   onClick={() => handleSelectClass(cls)}
                  className={cls?.AvailableSeat==='0'? 'bg-red-500 font-bold' : 'btn btn-primary'}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Classes;
