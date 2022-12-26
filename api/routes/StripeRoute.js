import express from "express";
import Stripe from "stripe";
import  stripe from "stripe";
const router = express.Router();

// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = stripe(process.env.SECRET_KEY);


router.post("/payment", async(req,res)=>{
    let status,error
    const {token,amount}=req.body
try {
    await Stripe.ChargesResource.create({
        source: token.id,
        amount,
        currency:"usd"
    })
    status="success"
} catch (error) {
    console.log(error)
    status="Failure"
}
})

export default router;
