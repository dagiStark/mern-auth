import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { json } from "express";
import { connectToDb } from "./config/db.js";
import { signup, login, logout } from "./controllers/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("MERN Auth");
});

app.post("/signup", signup);
app.post("/login", login);
app.post("/logout", logout);

connectToDb();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
