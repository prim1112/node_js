import mysql from "mysql";
import util from "util";

export const conn = mysql.createPool(
    {
        connectionLimit: 10,
        host: "sql110.infinityfree.com",
        user: "if0_37067498",
        password: "powerluckylotto",
        database: "if0_37067498_lottolucky"
    }
);

//get original data first 
export const queryAsync = util.promisify(conn.query).bind(conn);