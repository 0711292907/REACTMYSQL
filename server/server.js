import express from "express";
import mysql from "mysql2";
import cors from "cors";

// Create the Express app
const app = express();

app.use(cors());

//initializes an Express server to listen on port 8081
app.listen (8081,()=>{console.log("listening");
})



