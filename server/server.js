import express from "express" ;
import mysql from "mysql2" ;
import cors from "cors";

// Create the Express app
const app = express();

app.use(cors());


// Create a MySQL connection 
const db= mysql.createPool({
    connectionLimit: 20,
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "test",
    
  })


// Get all books
app.get("/", (req, res) => {
    const sql = "SELECT * FROM posts";
    db.query(sql, (err, result) => {
      if (err) return res.json ({Message :"Error inside server"});
        return res.json(result);
      })
      
    })
  



//initializes an Express server to listen on port 8081
app.listen (8081,()=>{console.log("listening");
})
