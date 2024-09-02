import { z } from "zod";
const signupSchema = z.object({
  name: z
    .string({ required_error: "Please Enter Your Name" })
    .trim()
    .min(3, { msg: "Name Should be atleast 3 chars" })
    .max(255, { msg: "Name cannot be more than 255 chars" }),
  email: z
    .string({ required_error: "Please Enter Your Email" })
    .email({ msg: "Invalid Email" }),
  phone: z
    .string({ required_error: "Please Enter Your Phone Number" })
    .min(10, { msg: "Phone num must be 10 digits" }),
  password: z
    .string({ required_error: "Please Enter Your Password" })
    .min(8, { msg: "Password Should be atleast 8 chars" }),
 
});
export default signupSchema