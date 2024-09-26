import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import passport from "passport";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.json()); // allows us to parse incoming requests: req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "servers are running" });
});

app.use("/api/auth", authRoute);

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running on http://localhost:${PORT}/`);
});
