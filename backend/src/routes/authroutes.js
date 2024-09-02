import express from 'express'

import {registerUser, loginUser} from "../controllers/authController.js"
const router = express.Router();
import validate from '../middlewares/authMiddle.js';
import signupSchema from '../validator/auth-validator.js';
router.route("/register").post( validate(signupSchema), registerUser)

router.route("/login").post( loginUser);
router.route("/").get((req, res)=>{
    res.send("hey sam")
})

export default router
