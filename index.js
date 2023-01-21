import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./src/router/bookRouter.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(bookRouter);
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/book").then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("not connected");
});

app.listen(8909,()=>{
    console.log("port run");
})