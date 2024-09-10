import express from "express";

import { router as customer } from "./api/customer";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

// Object app => webApi
export const app = express();

//req = request
//res = response
// app.use("/", (req, res)=>{     //locailhost 3000
//     res.send("Hello World!!!!");
// }); 

app.use(
    cors({
      origin: "*",
    })
  );
app.use(bodyParser.text()); 
app.use(bodyParser.json()); 


// app.use("/uploads", express.static("uploads"));

// app.use('/upload', express.static(path.join(__dirname, 'uploads')));

app.use("/get", customer);
