import mysql from "mysql"

export const database = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: boipelomot11,
  database:"blog"
})