import React, { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const[formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  
  });
  const {name,email, password} = formData

  const onShowPassword=(e)=>{
    e.preventDefault();
    
    setShowPassword(prevState=> !prevState)
  }

  const  onChange=(e)=>{
    //we target the id of input since its unique
    setFormData((prevState)=>({
      ...prevState, [e.target.id] : e.target.value


    }));

  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        Sign Up
      </h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img className='w-full rounded-2xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" alt="key" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          {/* for mobile the form will be full */}
          <form className='flex  flex-col ' >
            <input className='w-full px-4 py-2 mb-5 text-xl text-gray-700 bg-white border-gray-300 rounded transition  ease-in-out ' type="text"
             id='name' 
             value={name}
             onChange={onChange}
             placeholder='Name'
             
              />
            <input className='w-full px-4 py-2  mb-5 text-xl text-gray-700 bg-white border-gray-300 rounded transition  ease-in-out ' type="email"
             id='email' 
             value={email}
             onChange={onChange}
             placeholder='Email address'
             
              />
              <div className='relative mb-6'>
              <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition  ease-in-out ' type={showPassword ? "text" : "password"}
             id='password' 
             value={password}
             onChange={onChange}
             placeholder='Password'
             
              />
              <span  onClick={onShowPassword}>{showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' /> : <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer'  />}</span>
              </div>
              <div className='flex justify-between whitespace-nowrap  text-sm sm:text-lg'>
                <p className="mb-6">Have account?
                  <Link to="/sign-in" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out mx-1' >Sign in</Link>
                </p>
                <p>Forgot Password?
                  <Link className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out mx-1'to="/forgot-password">Forgot Password</Link>
                </p>
              </div>
          </form>
          <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type='submit'>Sign up</button>
         <div className='my-4 flex items-center
         before:border-t  before:flex-1 
         before:border-gray-300
         after:border-t after:flex-1
         after:border-gray-300'>
          
          <p className='text-center font-semibold mx-4'>OR</p>

         </div>
          <OAuth />
        </div>
      </div>
    </section>
  )
}

export default SignUp