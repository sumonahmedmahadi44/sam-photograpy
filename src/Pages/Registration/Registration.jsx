import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { updateProfile } from 'firebase/auth';
import SectionTitle from "../../components/SectionTitle";
import Swal from "sweetalert2";
import logo from '../../../public/logo.jpg'
import Container from "../Shared/Container/Container";
import pic from '../../assets/124956-login.json';
import Lottie from 'lottie-react';


const Registration = () => {
  // const {createUser,logOut,signInWithGoogle} = useContext(AuthContext)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, userUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => console.error(error));
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      userUpdateProfile(data.name, data.photo)
        .then(() => {
          const saveUser = { name: data.name, email: data.email, image:data.photo };
          fetch("https://sam-photgrapy-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })

        .catch((error) => console.log(error));
    });
  };
  return (
    <Container>
        <SectionTitle
        subHeading="welcome to SAM Photography"
        heading="Please Sign up"
        image={logo}
      ></SectionTitle>
        <div className="flex">
        <div className='w-1/2'> <Lottie animationData={pic}></Lottie> </div>

            <div className="w-1/2">
      
      <div className="w-full max-w-xs mx-auto m-10 border border-black border-spacing-9 bg-gradient-to-r from-purple-500 to-pink-500200 rounded-3xl p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8"
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">name is required</span>
          )}
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8"
            placeholder="photo"
            {...register("photo", { required: true })}
          />
          {errors.photo && (
            <span className="text-red-600">photo is required</span>
          )}
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">email is required</span>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-8"
            placeholder="password"
            type="password"
                name="password"
            {...register("password", {
                
                
              minLength: 6,
              pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
            })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password?.type === "required" && (
            <span className="text-red-600">password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-600">
              password need atleast 6 character
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-red-600">
              password required atleast one captial letter and one special
              character
            </span>
          )}
          <input
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-8"
            placeholder="confirm password"
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", { required: true,validate: (value) => value === watch('password'), })}
          />
          {errors.confirmPassword && (
            <span className="text-red-600">Passwords do not match</span>
          )}

          <input
            className="bg-gradient-to-r from-purple-500 to-pink-500200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full btn "
            type="submit"
            value="Registration"
          />
        </form>
        <div>
          <h1 className="text-center text-xl font-semibold text-black ">
            Already Have Account ?{" "}
            <Link to="/login">
              <button className="btn btn-outline btn-sm my-5">login!!</button>
            </Link>
          </h1>
        </div>
        <Link to="/">
          <button
            onClick={handleGoogleBtn}
            className="btn btn-outline btn-secondary w-full mt-5"
          >
            {" "}
            <FaGoogle className="me-2"></FaGoogle> Google
          </button>
        </Link>
      </div>
    </div>
        </div>
    </Container>
  );
};

export default Registration;
