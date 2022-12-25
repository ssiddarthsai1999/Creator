import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./SinglePost.css"
import { Menu, Transition } from "@headlessui/react";
import _ from "lodash";


import {
    CodeBracketIcon,
    EllipsisVerticalIcon,
    FlagIcon,
    StarIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
import {
    getPosts,
    getUserPost,
     updateAnswer,
    likePosts,
    getSinglePost,
} from "../redux/slice/postSlice";

import { FaLongArrowAltRight } from "react-icons/fa";

function SinglePost() {



    const { post, userpost, singlePost } = useSelector((state) => ({
        ...state.post,
    }));
  
        const { specificuser, user } = useSelector((state) => ({ ...state.user }));
             const userId = user?._id;
             const yourId= user?._id
              const navigate= useNavigate()
        const dispatch = useDispatch();
        const {id}= useParams()
            const initialState= { answer:""}
    const[ formValues, setFormValues]=useState(initialState)
    const {answer}= formValues

        function likePost(postid) {


        dispatch(likePosts({ postid, userId }));
    }

    function handleChange(e){
      e.preventDefault()
        setFormValues({...formValues,[e.target.name]:e.target.value})
        }
        function handleSubmit(e){
          e.preventDefault()
          dispatch(updateAnswer({formValues,id,navigate,toast}))
        }

useEffect(()=>{

console.log(singlePost);

setFormValues({ ...singlePost });
},[singlePost])

    useEffect(()=>{
dispatch(getSinglePost(id))
    },[id])

    return !_.isEmpty(singlePost) ? (
        <div className="containersingle text-black drop-shadow-sm shadow-xl  rounded-b-3xl  ">
            <div className="">
                <h1 className="justify-center flex">Question</h1>

                <div className="flex fromanddonate justify-between">
                    <div className="from flex align-middle">
                        <img
                            className="img mr-5"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                            alt=""
                        />
                        <div className="nameandtime">
                            <h3>{singlePost.uploader.username}</h3>
                            <h3>{singlePost.createdAt.slice(0, 10)}</h3>
                        </div>
                    </div>
                    <div>
                        <h3>Pool: 300$</h3>
                        <button className=" mt-2 flex  justify-center rounded-md border border-transparent bg-[#1aba3d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#502989] focus:ring-indigo-500 focus:ring-offset-2  ">
                            Donate
                        </button>
                    </div>
                </div>

                <div className="downarrow">
                    <i class="fa-sharp fa-solid fa-arrow-down"></i>
                </div>

                <div className="flex fromanddonate justify-between">
                    <div className="from flex align-middle">
                        <img
                            className="img mr-5"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                            alt=""
                        />
                        <div className="nameandtime">
                            <h3>{singlePost.to.username}</h3>
                        </div>
                    </div>
                </div>

                <div className="titleanddesc">
                    <h3 className="font-semibold  mt-10 mb-6">
                        {singlePost.title}
                    </h3>
                    <h3>{singlePost.description}</h3>
                </div>
                <hr className="w-full mt-5 text-black bg-black border-1"></hr>
                <div className=" pt-3 ml-2 text-black likeicon">
              

                    {singlePost.likes.includes(userId) ? (
                            <i
                                class="fa-solid fa-handshake"
                                onClick={() => likePost(singlePost._id)}
                            ></i>
                        ) : (
                            <i
                                class="fa-regular fa-handshake"
                                onClick={() => likePost(singlePost._id)}
                            ></i>
                        )}
                        
                  {singlePost.likes.includes(userId) ? 
                  <h3>You and {singlePost.likes.length} others are curious</h3> :
                           <h3>{singlePost.likes.length} people are curious</h3>
                  }
                   
                </div>
                <hr className="w-full mt-5 text-black bg-black border-1"></hr>

                <div className="answersection ">
                    <h3 className="justify-center flex mt-5 mb-5">Answer</h3>
                    <div className=" fromanddonate mb-10 ">
                        <div className="froms mb-10 ">
                            <img
                                className="img mr-5"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
                                alt=""
                            />
                            <div className="nameandtime">
                                <h3 >{singlePost.to.username}</h3>
                                {/* <h3 className="">12pm</h3> */}
                            </div>
                        </div>
                        <div className="answer">

                     
  <textarea
 type="text"
   name="answer"
    placeholder={singlePost.answer} 
    className="p-5  answer w-full mb-10  " 
    value={answer}
   onChange={handleChange}>

   </textarea>
  <button type="submit" onClick={handleSubmit} className="px-10 answersubmit m-auto  flex  justify-center rounded-md border border-transparent ; py-3 text-sm font-medium text-white shadow-sm hover:bg-black focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}

export default SinglePost;
