import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import HomePosts from "../components/HomePosts";
import ProfilePosts from "../components/ProfilePosts";
import _ from "lodash";
function Home() {
    const { specificuser, user } = useSelector((state) => ({
        ...state.user,
    }));
    const [isPostOpen, setisPostOpen] = useState(false);
    function toggleOpenPost() {
        setisPostOpen(!isPostOpen);
    }
    return (
        <div>
            <HomePosts />
        </div>
    );
}

export default Home;
