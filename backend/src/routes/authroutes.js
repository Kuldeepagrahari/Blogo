import express from 'express'
// import jwtVerification from '../middlewares/authMiddle.js';
import {registerUser, loginUser} from "../controllers/authController.js"
const router = express.Router();


router.route("/register").post(  registerUser)
router.route("/login").post( loginUser);
router.route("/").get((req, res)=>{
    res.send("hey sam")
})

export default router
