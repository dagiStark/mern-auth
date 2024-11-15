import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { json } from "express";
import { connectDB } from "./db/connectDB.js";
// import { signup, login, logout } from "./controllers/auth.js";


import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("MERN Auth");
});

// app.post("/signup", signup);
// app.post("/login", login);
// app.post("/logout", logout);
app.use("/api/auth", authRoute);

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
