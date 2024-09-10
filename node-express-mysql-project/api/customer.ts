import express from "express";
import { conn } from "../dbconnect";
import mysql from "mysql";
import multer from "multer";
import path from "path";


//create router of this API
export const router = express.Router();

router.get("/allmember", async (req, res) => {
  const sql = "select * from 	Customers";
  conn.query(sql, (err, result) => {
    res.status(200);
    res.json(result);
    console.log(JSON.stringify(result));
  });
  // res.send("Method GET in index.ts");
});

router.post("/register", async (req, res) => {
  const sql = "INSERT INTO customer (username, password, amount) VALUES (?, ?, ?)";
  conn.query(sql, (err, result) => {
    res.status(200);
    res.json(result);
    console.log(JSON.stringify(result));
  });
  // res.send("Method GET in index.ts");
});