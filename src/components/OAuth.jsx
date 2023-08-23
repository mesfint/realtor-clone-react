import React from 'react'
import  {FcGoogle} from "react-icons/fc"

const OAuth = () => {
  return (
    
         <button className='w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-900 flex items-center justify-center ' type='submit' > <FcGoogle className=' text-2xl bg-white rounded-full mr-2 '/> Continue with Google</button>

    
  )
}

export default OAuth