import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import router from "./src/routes/authroutes.js";
import blogRouter from "./src/routes/blog-routes.js";
import contactRouter from "./src/routes/contact-route.js";
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT,PATCH, DELETE, HEAD",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", router);
app.use("/api/" , blogRouter)
app.use("/admin", contactRouter)

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
