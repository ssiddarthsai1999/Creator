import { useEffect, useState } from 'react'
import { loginUser } from '../redux/slice/userSlice'
import { useDispatch,useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { updateUser } from '../redux/slice/userSlice'
import { useParams } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserEdit() {

  const dispatch= useDispatch()
  const navigate= useNavigate()
  const {id}=useParams()


const {specificuser,user,allusers}= useSelector((state)=>({...state.user}))
    const initialState= { description:"",city: "",country:"",dob: "",gender:"",role: "",img:"",firstname:"",lastname: "",username:""}
    const[ formValues, setFormValues]=useState(initialState)
    const {description,city,country,dob,gender,role,img,firstname,lastname,username}= formValues
      const singleUser = allusers.find((item) => item._id === id);
    function handleChange(e){
      e.preventDefault()
        setFormValues({...formValues,[e.target.name]:e.target.value})
        }

        function handleSubmit(e){
          e.preventDefault()
          dispatch(updateUser({formValues,id,toast,navigate}))
        }



useEffect(() => {
    const singleUser = allusers.find((item) => item._id === id);
    console.log(singleUser);
    setFormValues({ ...singleUser });
}, [singleUser]);

  return (
      <>
          <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 ">
              <form className="space-y-6" action="#" method="POST">
                  <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                      <div className="md:grid md:grid-cols-3 md:gap-6">
                          <div className="md:col-span-1">
                              <h3 className="text-lg font-medium leading-6 text-gray-900">
                                  Profile
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                  This information will be displayed publicly so
                                  be careful what you share.
                              </p>
                          </div>
                          <div className="mt-5 space-y-6 md:col-span-2 md:mt-0">
                              <div>
                                  <label
                                      htmlFor="description"
                                      className="block text-sm font-medium text-gray-700"
                                  >
                                      Description
                                  </label>
                                  <div className="mt-1">
                                      <textarea
                                          id="description"
                                          onChange={handleChange}
                                          name="description"
                                          rows={3}
                                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black bg-slate-50 p-2"
                                          defaultValue={""}
                                          value={description}
                                      />
                                  </div>
                              </div>

                              <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                      Profile photo
                                  </label>
                                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                      <div className="space-y-1 text-center">
                                          <svg
                                              className="mx-auto h-12 w-12 text-gray-400"
                                              stroke="currentColor"
                                              fill="none"
                                              viewBox="0 0 48 48"
                                              aria-hidden="true"
                                          >
                                              <path
                                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                  strokeWidth={2}
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                              />
                                          </svg>
                                          <div className="flex text-sm text-gray-600">
                                              <label
                                                  htmlFor="file-upload"
                                                  className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                              >
                                                  <span>Upload a file</span>
                                                  <input
                                                      id="file-upload"
                                                      name="file-upload"
                                                      type="file"
                                                      className="sr-only"
                                                  />
                                              </label>
                                              <p className="pl-1">
                                                  or drag and drop
                                              </p>
                                          </div>
                                          <p className="text-xs text-gray-500">
                                              PNG, JPG, GIF up to 10MB
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
                      <div className="md:grid md:grid-cols-3 md:gap-6">
                          <div className="md:col-span-1">
                              <h3 className="text-lg font-medium leading-6 text-gray-900">
                                  Personal Information
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                  Use a permanent address where you can receive
                                  mail.
                              </p>
                          </div>
                          <div className="mt-5 md:col-span-2 md:mt-0">
                              <div className="grid grid-cols-6 gap-6">
                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="firstname"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          First name
                                      </label>
                                      <input
                                          onChange={handleChange}
                                          type="text"
                                          name="firstname"
                                          id="firstname"
                                          value={firstname}
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black bg-slate-50 p-2"
                                      />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="lastname"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          Last name
                                      </label>
                                      <input
                                          onChange={handleChange}
                                          value={lastname}
                                          type="text"
                                          name="lastname"
                                          id="lastname"
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black bg-slate-50 p-2"
                                      />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="username"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          Username
                                      </label>
                                      <input
                                          value={username}
                                          onChange={handleChange}
                                          type="text"
                                          name="username"
                                          id="username"
                                          className=" text-black bg-slate-50 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="role"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          Role
                                      </label>
                                      <input
                                          onChange={handleChange}
                                          type="text"
                                          value={role}
                                          name="role"
                                          id="role"
                                          className="text-black bg-slate-50 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="last-name"
                                          className="block text-sm font-medium text-gray-700 "
                                      >
                                          Gender
                                      </label>
                                      <select
                                          name="gender"
                                          id="gender"
                                          onChange={handleChange}
                                          value={gender}
                                          className="text-black bg-slate-50 p-2"
                                      >
                                          <option>Choose your gender </option>
                                          <option
                                              className="text-black bg-slate-50 p-2"
                                              value="Male"
                                          >
                                              Male
                                          </option>
                                          <option
                                              className="text-black bg-slate-50 p-2"
                                              value="Female"
                                          >
                                              Female
                                          </option>
                                          <option
                                              className="text-black bg-slate-50 p-2"
                                              value="Other"
                                          >
                                              Other
                                          </option>
                                      </select>
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="dob"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          DOB
                                      </label>
                                      <input
                                          onChange={handleChange}
                                          value={dob}
                                          type="date"
                                          name="dob"
                                          id="dob"
                                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black bg-slate-50 p-2"
                                      />
                                  </div>

                                  <div className="col-span-6 sm:col-span-3">
                                      <label
                                          htmlFor="country"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          Country
                                      </label>
                                      <select
                                          id="country"
                                          value={country}
                                          name="country"
                                          onChange={handleChange}
                                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black bg-slate-50 p-2"
                                      >
                                          <option>United States</option>
                                          <option>Canada</option>
                                          <option>India</option>
                                      </select>
                                  </div>

                                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                      <label
                                          htmlFor="city"
                                          className="block text-sm font-medium text-gray-700"
                                      >
                                          City
                                      </label>
                                      <input
                                          type="text"
                                          name="city"
                                          value={city}
                                          onChange={handleChange}
                                          id="city"
                                          className="text-black bg-slate-50 p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="flex justify-end">
                      <Link to={`/profile/${user._id}`}>
                          {" "}
                          <button
                              type="button"
                              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                              Cancel
                          </button>{" "}
                      </Link>
                      <button
                          onClick={handleSubmit}
                          type="submit"
                          className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                          Save
                      </button>
                  </div>
              </form>
          </div>
      </>
  );

  
}

export default UserEdit