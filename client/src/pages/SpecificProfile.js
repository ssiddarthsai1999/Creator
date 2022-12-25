import React, { useEffect, useState } from "react";
import "./Profile.css";
import Post from "../components/Post";
import { getSingleUser, followUsers } from "../redux/slice/userSlice";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import {
    MdModeEditOutline,
    FiEdit2,
    FaBeer,
    CiEdit,
    FaEdit,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import HomePosts from "../components/HomePosts";
import ProfilePosts from "../components/ProfilePosts";
function SpecificProfile() {
    const { specificuser, user } = useSelector((state) => ({ ...state.user }));
    const dispatch = useDispatch();
    const { id } = useParams();
    const yourId = user?._id;

    const otheruserid = specificuser?._id;
    const { post, userpost } = useSelector((state) => ({ ...state.post }));
    const questionsLength = userpost.title;
    const [isPostOpen, setisPostOpen] = useState(false);
    const questionslength = post.filter(
        (item) => item.uploader._id === specificuser._id
    );
    const answerslength = post.filter(
        (item) => item.to._id === specificuser._id
    );

    function toggleOpenPost() {
        setisPostOpen(!isPostOpen);
    }

    function handleFollow() {
        console.log("otheruserid : " + otheruserid + "yourId : " + yourId);
        dispatch(followUsers({ otheruserid, yourId }));
        window.location.reload();
    }

    function findlength() {
        const abc = post.filter(
            (item) => item.uploader._id === specificuser._id
        );
        console.log(abc.length);
    }

    useEffect(() => {
        dispatch(getSingleUser(id));
    }, []);

    return !_.isEmpty(specificuser) ? (
        <div className="text-black">
            <div className=" mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 flex shadow-lg relative profilebox ">
                <div className="leftbar p-5 h-fit">
                    <h1 className="pb-4 font-bold">User Details</h1>
                    <h3 className="pb-2 font-bold">
                        Username:{" "}
                        <span className="font-light">
                            {specificuser.username}
                        </span>
                    </h3>
                    <h3 className="pb-2 font-bold">
                        Role:{" "}
                        <span className="font-light">{specificuser.role}</span>
                    </h3>
                    <h3 className="pb-2 font-bold">
                        City:{" "}
                        <span className="font-light">{specificuser.city}</span>
                    </h3>
                    <h3 className="pb-2 font-bold">
                        Country:{" "}
                        <span className="font-light">
                            {specificuser.country}
                        </span>
                    </h3>
                    <h3 className="pb-2 font-bold">
                        Gender:{" "}
                        <span onClick={findlength} className="font-light">
                            {specificuser.gender}
                        </span>
                    </h3>
                    <h3 className="pb-2 font-bold">
                        DOB:{" "}
                        <span className="font-light">{specificuser.dob}</span>
                    </h3>
                    <h3 className="pb-11 font-bold">
                        Age: <span className="font-light">23</span>
                    </h3>
                </div>
                <div className="rightbar">
                    <div className="topdetails flex justify-evenly">
                        <h3 className="p-5 ">
                            Followers <br></br>
                            {specificuser.followers.length}
                        </h3>
                        <h3 className="p-5">
                            Following <br></br>
                            {specificuser.following.length}
                        </h3>
                        <div className="profileimg ">
                            <img
                                className=" lg:w-52 sm:w-52 pt-4 md:w-52 mb-3 "
                                src={specificuser.img}
                                alt=""
                            />
                            <h4 className="justify-center flex">
                                {specificuser.username}
                            </h4>
                        </div>
                        <h3 className="p-5">
                            Questions <br></br>
                            {questionslength.length}
                        </h3>

                        <h3 className="p-5">
                            Answered <br></br> {answerslength.length}
                        </h3>
                        {/* {user?._id===id && (<Link to={`/profile/edit/${user._id}`}><h3 className='mt-6 text-2xl cursor-pointer'><FaEdit /></h3></Link>)} */}
                        <Link to={`/edit/${specificuser._id}`}>
                            <h3 className="mt-6 text-2xl cursor-pointer">
                                <FaEdit />
                            </h3>
                        </Link>
                    </div>
                    <div>
                        <h3 className="flex  justify-center pt-4 pb-5 mr-20">
                            {specificuser.description}{" "}
                        </h3>
                    </div>
                    <div>
                        {specificuser.followers.includes(yourId) ? (
                            <button
                                onClick={handleFollow}
                                className="follow pl-9 pr-9 pt-2 pb-2 "
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                onClick={handleFollow}
                                className="follow pl-9 pr-9 pt-2 pb-2  "
                            >
                                Follow
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {!isPostOpen ? (
                <div className="flex justify-center mx-auto">
                    <button
                        className='  className="flex   justify-center ask border border-transparent  py-2 px-4 text-sm font-medium text-white shadow-sm  focus:ring-indigo-500 focus:ring-offset-2  p-5 m-5 "'
                        onClick={toggleOpenPost}
                    >
                        Ask Anything
                    </button>
                </div>
            ) : (
                <Post setisPostOpen={setisPostOpen} isPostOpen={isPostOpen} />
            )}
            <ProfilePosts />
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

export default SpecificProfile;
