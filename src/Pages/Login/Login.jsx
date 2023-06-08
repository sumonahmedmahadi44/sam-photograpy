import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

 
    const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);

    signIn(data.email,data.password)
    .then(result=>{
      const loggedUser = result.user;
      navigate(from,{replace:true});
      console.log(loggedUser)
    })
  

 
    
    
  }
    return (


<div className="w-full max-w-xs mx-auto m-20 border border-black border-spacing-9 p-10">
<form  onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8" placeholder='email' {...register("email",{ required: true })} />
      {errors.email && <span>email is required</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-8" placeholder='password' {...register("password", { required: true})} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>password is required</span>}
      {errors.password?.type==='minlength' && <span className='text-red-600'>password need atleast 6 character</span>}
 {errors.password?.type==='pattern' && <span className='text-red-600'>password  required atleast one captial letter and one special character</span>}
      
      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full btn " type="submit" value= 'login'/>
    </form>
    <div>
         <h1 className='text-center text-xl font-semibold text-black '>Don't Have Account ? <Link to='/register'><button className='btn btn-outline btn-sm my-5'>Register!!</button></Link></h1>
             </div>
    <Link to ='/'><button   className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button></Link>
</div>
    );
};

export default Login;