import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux'
import { registerUser } from '../redux/slice/userSlice'

function Register() {
  const dispatch= useDispatch()
  const navigate= useNavigate()
    const initialState= {username:"", email:"",password: ""}
    const[ formValues, setFormValues]=useState(initialState)
    const { username, email,password}= initialState

    function handleChange(e){
      setFormValues({...formValues,[e.target.name]:e.target.value})
        
    }
    function handleSubmit(e){
      e.preventDefault()
      dispatch(registerUser({formValues,navigate,toast}))

    }
    return (
    <>

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 " >
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
      
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#290942]">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            
      
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
          <div className=" py-8 px-4  sm:rounded-lg sm:px-10 bg-[#ffffff] shadow-lg ">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#290942]">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                  onChange={handleChange}
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
                  />
                </div>

                
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#290942]">
                  Password
                </label>
                <div className="mt-1">
                  <input
                       onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#290942]">
                  Username
                </label>
                <div className="mt-1">
                  <input
                       onChange={handleChange}
                    id="username"
                    name="username"
                    type="username"
              
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-[#290942] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#502989] focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 ">
                <div>
                  <button
                  
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <i class="fa-brands fa-google"></i>
                
                  </button>
                </div>

                <div>
                 
                </div>

                <div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Register