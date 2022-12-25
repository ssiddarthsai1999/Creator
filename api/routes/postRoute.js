import { postModel, userModel } from "../models/postModel.js";
import mongoose from "mongoose";
import express from "express";
const router = express.Router();

//createPost
router.post("/create", async (req, res) => {
    const newpost = new postModel(req.body);

    try {
        const savedpost = await newpost.save();
        res.status(200).json(savedpost);
    } catch (err) {
        res.status(500).json(err);
    }
});
//---------------------------------------------------------------------------
//getPosts
router.get("/view", async (req, res) => {
    try {
        const posts = await postModel
            .find()
            .populate("to", "username img _id")
            .populate("uploader", "username img _id");

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});
//---------------------------------------------------------------------------
//getSinglePost
router.get("/view/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const posts = await postModel
            .findById(id)
            .populate("to", "username img _id")
            .populate("uploader", "username img _id");

        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});
//---------------------------------------------------------------------------
//getUserPost
router.get("/userpost/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json("User doesn't exist");
    }
    const userPosts = await postModel.find({ uploader: id });
    res.status(200).json(userPosts);
});
//---------------------------------------------------------------------------
//likePost
router.put("/like/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { userId } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json(`No post exist with id: ${id}`);
        }

        const post = await postModel.findById(id);

        const index = post.likes.findIndex((id) => id === String(userId));

        if (index === -1) {
            post.likes.push(userId);
        } else {
            post.likes = post.likes.filter((id) => id !== String(userId));
        }

        const updatedPost = await postModel.findByIdAndUpdate(id, post, {
            new: true,
        });

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(404).json(error);
    }
});

//---------------------------------------------------------------------------
//updateAnswer
router.put("/view/:id", async (req, res) => {
    const { answer } = req.body;
    try {
        const post = await postModel.findByIdAndUpdate(
            req.params.id,
            { answer: answer },
            { new: true }
        );

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error);
    }
});

//---------------------------------------------------------------------------


export default router;
