import express, { response } from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";


// configure or read env variables
const app = express();
dotenv.config();


mongoose.connect(process.env.MONGO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((response) => {
        console.log("connetced to mnogodDB!")
    })
    .catch((err) => {
        if (err) throw err;
        console.error("Error..! Something is wrong.")
    })

  app.listen(8800, () => {
;
    console.log("Connected to backend.");
  });