import express from "express"
import ContactController from "../controllers/contactController.js"
const contactRouter = express.Router()

contactRouter.route("/contact").post(ContactController)

export default contactRouter