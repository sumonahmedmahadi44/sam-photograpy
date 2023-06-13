import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
// import { updateProfile } from 'firebase/auth';
import SectionTitle from '../../components/SectionTitle';
import Swal from 'sweetalert2';


const Registration = () => {
  
 
  // const {createUser,logOut,signInWithGoogle} = useContext(AuthContext)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    


    
    const { createUser, userUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleBtn=()=> {
      signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
      })
      .catch(error => console.error(error));
      
      
    }

    const onSubmit = data => {
     
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                userUpdateProfile(data.name, data.photo)
                
                .then(() => {
                    
                  const saveUser = { name: data.name, email: data.email }
                  fetch('https://sam-photgrapy-server.vercel.app/users', {
                      method: 'POST',
                      headers: {
                          'content-type': 'application/json'
                      },
                      body: JSON.stringify(saveUser)
                  })
                      .then(res => res.json())
                      .then(data => {
                          if (data.insertedId) {
                              reset();
                              Swal.fire({
                                  position: 'top-end',
                                  icon: 'success',
                                  title: 'User created successfully.',
                                  showConfirmButton: false,
                                  timer: 1500
                              });
                              navigate('/');
                          }
                      })



              })

                    .catch(error => console.log(error))
            })
    };
    return (
    
     <div>
      <SectionTitle subHeading='welcome to SAM Photography' heading='Please Sign up'></SectionTitle>
       <div className="w-full max-w-xs mx-auto m-10 border border-black border-spacing-9 p-10">
         
      <form  onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8" placeholder='name' {...register("name",{ required: true })} />
            {errors.name && <span className='text-red-600'>name is required</span>}
            <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8" placeholder='photo' {...register("photo",{ required: true })} />
            {errors.photo && <span className='text-red-600'>photo is required</span>}
            <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline my-8" placeholder='email' {...register("email",{ required: true, })} />
            {errors.email && <span className='text-red-600'>email is required</span>}
            
            {/* include validation with required or other standard HTML validation rules */}
            <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-8" placeholder='password' {...register("password", { required: true,minLength:6,pattern:/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/})} />
            {/* errors will return when field validation fails  */}
            {errors.password?. type==='required' && <span className='text-red-600'>password is required</span>}
            {errors.password?.type==='minLength' && <span className='text-red-600'>password need atleast 6 character</span>}
       {errors.password?.type==='pattern' && <span className='text-red-600'>password  required atleast one captial letter and one special character</span>}
       <input className="shadow  border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline my-8" placeholder='confirm password' {...register("confirm password", { required: true})} />
            
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full btn " type="submit" value='Registration' />
          </form>
          <div>
               <h1 className='text-center text-xl font-semibold text-black '>Already Have Account ? <Link to='/login'><button className='btn btn-outline btn-sm my-5'>login!!</button></Link></h1>
                   </div>
          <Link to ='/'><button  onClick={handleGoogleBtn} className="btn btn-outline btn-info w-full mt-5"> <FaGoogle className="me-2"></FaGoogle>  Google</button></Link>
      </div>
     </div>
    );
};

export default Registration;