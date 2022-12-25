import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import Test from "./Test";
import { Menu, Transition } from "@headlessui/react";
import {
    CodeBracketIcon,
    EllipsisVerticalIcon,
    FlagIcon,
    StarIcon,
} from "@heroicons/react/20/solid";
import "./HomePosts.css";
import { Link } from "react-router-dom";
import { getPosts, getUserPost, likePosts } from "../redux/slice/postSlice";

import { FaLongArrowAltRight } from "react-icons/fa";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function HomePosts() {
    const { specificuser, user } = useSelector((state) => ({ ...state.user }));


    const { post, userpost } = useSelector((state) => ({ ...state.post }));
    const userId = user?._id;
    const dispatch = useDispatch();

    function likePost(postid) {


        dispatch(likePosts({ postid, userId }));
    }
    function getPost() {
        dispatch(getPosts());
    }

    useEffect(() => {
        getPost();
    }, []);
    return (
        <div>
            {post?.map((item) => (
                <div className=" mb-50  mt-5  container mx-auto my-10 drop-shadow-sm shadow-xl  rounded-b-3xl  ">
                    <div className=" profilePic flex mx-auto    text-black  justify-between   ">
                        <div className="flex p-5 flex-1  fromchris">
                            <Link
                                reloadDocument
                                to={`/profile/${item.uploader._id}`}
                            >
                                <img src={item.uploader.img} alt="" />
                            </Link>

                            <div className="flex flex-col ">
                                {" "}
                                <Link
                                    reloadDocument
                                    to={`/profile/${item.uploader._id}`}
                                >
                                    {" "}
                                    <h3 className="ml-4 hover:underline ease-in duration-1000">
                                        {item.uploader.username}
                                    </h3>
                                </Link>
                                <h3 className="ml-4">
                                    {item.createdAt.slice(0, 10)}
                                </h3>
                            </div>
                        </div>

                        {/* <h3 className='p-5 text-5xl '> <FaLongArrowAltRight/></h3> */}

                        <div className="flex p-5 flex-1 fromchris">
                            <Link reloadDocument to={`/profile/${item.to._id}`}>
                                <img src={item.to.img} alt="" />
                            </Link>

                            <div className="flex flex-col ">
                                {" "}
                                <Link
                                    reloadDocument
                                    to={`/profile/${item.to._id}`}
                                >
                                    {" "}
                                    <h3 className="ml-4 hover:underline ease-in duration-1000 mb-6">
                                        {item.to.username}
                                    </h3>
                                </Link>
                            </div>
                        </div>

                        <div className="flex p-5 flex-6">
                            <div className="flex flex-col  ">
                                {" "}
                                <h3 className="ml-4">$300</h3>
                                <button className=" mt-2 flex  justify-center donate border border-transparent bg-[#1aba3d] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:ring-indigo-500 focus:ring-offset-2   ">
                                    Donate
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" profilePic  mx-auto  lg:w-1/2  justify-between p-5 text-black container   ">
                        <h3 className="font-semibold mb-5 text-lg">
                            {item.title}
                        </h3>
                        <h3>
                            {item.description.substring(0, 100)}.......{" "}
                            <Link to={`/singlepost/${item._id}`}>
                                {" "}
                                <span className="decoration-1 font-semibold text-blue-500 seemore">
                                    See more
                                </span>{" "}
                            </Link>
                        </h3>
                    </div>
                    <div className=" p-5 text-black likeicon">
                        {item.likes.includes(userId) ? (
                            <i
                                class="fa-solid fa-handshake"
                                onClick={() => likePost(item._id)}
                            ></i>
                        ) : (
                            <i
                                class="fa-regular fa-handshake"
                                onClick={() => likePost(item._id)}
                            ></i>
                        )}
                        {item.likes.includes(userId) ? (
                            <h3 className="font-semibold">
                                You and {item.likes.length - 1} others are
                                curious{" "}
                            </h3>
                        ) : (
                            <h3 className="font-semibold">
                                {item.likes.length} people are curious
                            </h3>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomePosts;
