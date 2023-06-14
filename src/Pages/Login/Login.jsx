import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle,FaEyeSlash,FaEye } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import SectionTitle from '../../components/SectionTitle';
import Swal from 'sweetalert2';
import logo from '../../../public/logo.jpg'
import Container from '../Shared/Container/Container';
import pic from '../../assets/124956-login.json';

import Lottie from 'lottie-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signIn,signInWithGoogle,loading} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

 
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const handleGoogleBtn=()=> {
      signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
      })
      .catch(error => console.error(error));
      
      
    }
  const onSubmit = data => {

    signIn(data.email,data.password)
    .then(result=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User login successfully.',
        showConfirmButton: false,
        timer: 1500
    });
      const loggedUser = result.user;
      navigate(from,{replace:true});
    })
  

 
    
    
  }

  if(loading){
    <span className="loading loading-infinity loading-lg text-secondary"></span>
  }
    return (


<Container>
<SectionTitle subHeading='welcome to SAM Photography' heading='Please Log in' image={logo}></SectionTitle>
  <div className='flex '>
    <div className='w-1/2'> <Lottie animationData={pic}></Lottie> </div>


    <div className='w-1/2 ' >

  <div className="w-full rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500200 max-w-xs mx-auto m-20 border border-black border-spacing-9 p-10">
<form  onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8" placeholder='email' {...register("email",{ required: true })} />
      {errors.email && <span>email is required</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input type={showPassword ? "text" : "password"} className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-8 relative" placeholder='password' {...register("password", { required: true})} />
      <p onClick={() => setShowPassword(!showPassword)}>

<small className=" absolute -mt-8 ml-48 md:ml-52">
    {
        showPassword ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
    }
</small>
</p>
      {/* errors will return when field validation fails  */}
      {errors.password && <span>password is required</span>}
      {errors.password?.type==='minlength' && <span className='text-red-600'>password need atleast 6 character</span>}
 {errors.password?.type==='pattern' && <span className='text-red-600'>password  required atleast one captial letter and one special character</span>}
      
      <input className="bg-gradient-to-r from-purple-500 to-pink-500200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full btn " type="submit" value= 'login'/>
    </form>
    <div>
         <h1 className='text-center text-xl font-semibold text-black '>Don't Have Account ? <Link to='/register'><button className='btn btn-outline btn-sm my-5'>Register!!</button></Link></h1>
             </div>
    <Link to ='/'><button onClick={handleGoogleBtn} className="btn btn-outline btn-secondary w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button></Link>
</div>
</div>
  </div>
</Container>
    );
};

export default Login;