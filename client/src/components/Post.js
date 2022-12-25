import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createPost } from '../redux/slice/postSlice';
import { updatequestions } from '../redux/slice/userSlice';
import "./HomePosts.css";
function Post({setisPostOpen,isPostOpen}) {
  const dispatch= useDispatch()
  const navigate= useNavigate()
    const { specificuser, user } = useSelector((state) => ({ ...state.user }));
  const userId= user?._id
  const yourId= user._id
const otheruserId= specificuser?._id
      const initialState= { title:"",description: "", to:""}
      const[ formValues, setFormValues]=useState(initialState)
      const {title,description,to}= formValues
  
      function handleChange(e){
        e.preventDefault()
          setFormValues({...formValues,[e.target.name]:e.target.value})
          }


  
          function handleSubmit(e){
            e.preventDefault()
            const updatedFormValues = {
                ...formValues,
                uploader: userId,
                to: otheruserId,
            };
            dispatch(createPost({updatedFormValues,navigate,toast}))
            window.location.reload()
             }

             function toggleOpenPost(){
              setisPostOpen(isPostOpen===false)
            }

  return (
    <div className='mb-6'>
    <>

<div className="flex min-h-full flex-col justify-center py-2 sm:px-6 lg:px-8  " >
  <div className="sm:mx-auto sm:w-full sm:max-w-md p-5">

    <h2 className=" text-center text-2xl font-bold tracking-tight text-[#290942]">Ask a question</h2>
    <p className="mt-1 text-center text-sm text-gray-600">
      

    </p>
  </div>

  <div className=" lg:w-5/12 mx-auto ">
    <div className=" py-8 px-4  sm:rounded-lg sm:px-10 bg-[#ffffff] shadow-lg ">
      <form className="space-y-6" action="#" method="POST" >
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-[#290942]">
           Title
          </label>
          <div className="mt-1">
            <input
     onChange={handleChange}
              id="title"
    placeholder='Title'
              name="title"
              type="text"
              autoComplete="title"
          
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
            />
          </div>

          
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-[#290942]">
            Description
          </label>
          <div className="mt-1">
            <textarea
placeholder='Description'
              id="description"
              name="description"
              onChange={handleChange}
            
            
        
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm text-black"
            />
          </div>
        </div>

<div className='askto '>
<h3>You are asking a question to </h3>
<div className='flex  imgandsam'>
<img className=' asktoimg' src={specificuser.img} alt="" />
<h3 className="">{specificuser.username}</h3>

</div></div>


        <div className="flex items-center justify-between">
         

          <div className="text-sm">
          
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex  justify-center rounded-md border border-transparent bg-[#1aba3d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#502989] focus:ring-indigo-500 focus:ring-offset-2 "
          >
            Donate +
          </button>
        </div>
        
        

        <div className='flex justify-between w-5/6'>
          <button
          onClick={handleSubmit}
            type="submit"
            className="flex  justify-center rounded-md border border-transparent bg-[#290942] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#502989] focus:ring-indigo-500 focus:ring-offset-2 w-6/12 "
          >
            Post
          </button>
          <button onClick={toggleOpenPost}
            type="Cancel"
            className="flex  justify-center rounded-md border border-transparent bg-[#d80d0d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#502989] focus:ring-indigo-500 focus:ring-offset-2 w-3/12 "
          >
            Cancel
          </button>
        </div>
      </form>

      <div className="mt-6">


        <div className="mt-6 ">


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




    </div>
  )
}

export default Post