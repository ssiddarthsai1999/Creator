import mongoose from "mongoose";
import express from "express";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} from "./verifyToken.js";
import { userModel,postModel } from "../models/postModel.js";

const router = express.Router();

//UPDATE
router.put("/update/:id", async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});
//getuser
router.get("/find/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE
router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL USER
router.get("/find", async (req, res) => {
    try {
        const users = await userModel.find().populate("questions", "_id");
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//search
router.get("/search", async (req, res) => {
    const keyword = req.query.search
        ? {
              $or: [
                  { username: { $regex: req.query.search, $options: "i" } },
                  { email: { $regex: req.query.search, $options: "i" } },
              ],
          }
        : {};

    const users = await userModel.find(keyword);
    res.send(users);
});
//ADDTOCART
router.put("/cartadd", async (req, res) => {
    const { email, data } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (user.email !== email) {
            res.status(500).json("User email is not registered");
        }
        const { gamesincart } = user;
        const itemsincart = await gamesincart.find(({ id }) => id === data.id);
        if (itemsincart) {
            await userModel.findByIdAndUpdate(
                user._id,
                { gamesincart: [...user.gamesincart, data] },
                { new: true }
            );
            res.status(200).json({ itemsincart: [...user.gamesincart, data] });
        } else {
            res.status(500).json("Movie already in list");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
//---------------------------------------------------------------------------
// FollowUser;
//  router.put("/follow/:id", async (req, res) => {
//     const { id } = req.params;
//     const { yourId } = req.body;
//     try {

//    if (!mongoose.Types.ObjectId.isValid(yourId)) {
//        return res.status(404).json(`No user exist with id: ${yourId}`);
//    }

//         const user = await userModel.findById(yourId);

//         const index = user.following.findIndex((item) => item === String(id));

//         if (index === -1) {
//             user.following.push(id);
//         } else {
//             user.following = user.following.filter(
//                 (item) => item !== String(id)
//             );
//         }
//         const updateduser = await userModel.findByIdAndUpdate(
//             yourId,
//             user,

//             {
//                 new: true,
//             }
//         );

//         res.status(200).json(updateduser );
//     } catch (error) {
//         res.status(404).json(error);
//     }
// });

// ---------------------------------------------------------------------------

router.put("/follow/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { yourId } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json(`No user exist with id: ${id}`);
        }

        const otheruser = await userModel.findById(id);

        const index1 = otheruser.followers.findIndex(
            (id) => id === String(yourId)
        );

        if (index1 === -1) {
            otheruser.followers.push(yourId);
        } else {
            otheruser.followers = otheruser.followers.filter(
                (id) => id !== String(yourId)
            );
        }

        const user = await userModel.findById(yourId);

        const index2 = user.following.findIndex((id) => id === String(id));

        if (index2 === -1) {
            user.following.push(id);
        } else {
            user.following = user.following.filter(
                (item) => item !== String(id)
            );
        }
        const updateduser = await userModel.findByIdAndUpdate(
            yourId,
            user,

            {
                new: true,
            }
        );

        const updateduser2 = await userModel.findByIdAndUpdate(
            id,
            otheruser,

            {
                new: true,
            }
        );
       const obj = { users: [updateduser, updateduser2] };
       console.log(obj)
        res.status(200).json(obj);
    } catch (error) {
        res.status(404).json(error);
    }
});
//---------------------------------------------------------------------
//addtoquestionsandanswers
router.put("/addto/:id",async(req,res)=>{
const {id}=req.params
    const { postId, yourId } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(yourId)) {
            return res.status(404).json(`No user exist with id: ${yourId}`);
        }
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json(`No user exist with id: ${id}`);
            }
       if (!mongoose.Types.ObjectId.isValid(postId)) {
           return res.status(404).json(`No post exist with id: ${postId}`);
       }
const user = await userModel.findById(yourId);
const otherUser = await userModel.findById(id);
user.questions.push(postId)
otherUser.answered.push(postId)
        const updated1 = await userModel.findByIdAndUpdate(yourId, user, {
            new: true,
        });
          const updated2 = await userModel.findByIdAndUpdate(id, otherUser, {
              new: true,
          });
        
        res.status(200).json({ user: [updated1, updated2] });
    } catch (error) {
                res.status(404).json(error);
    }


})

export default router;

//searchuser
