import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import cors from 'cors'

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/post.js";
import convRoutes from "./routes/conversation.js";
import messageRoutes from "./routes/message.js";
import errorHandler from "./middleware/errorHandler.js";
import { fileURLToPath } from "url";
import { dirname } from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 5000;
const app = express();
dotenv.config();
//MongoDB connect
//mongoose.connect('mongodb://localhost/instagram-clone-db').then(()=> console.log('DB Connected Successfuly'));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
    console.log("Conneting to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
connect();
//middleware
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded succesfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/conversations", convRoutes);
app.use("/message", messageRoutes);


app.use(errorHandler);
app.listen(PORT, () => {
  
  console.log(`Server wurder http://localhost:${PORT} ausgeführt`);
});
