const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json())

app.get("/",(re,res)=>{return res.json("Kaam karja bhai");})
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"remediapp"
}
)

app.post('/remediapp',(req,res)=>{
    const sql = "INSERT INTO login(`username`,`email`,`password`,`confirmpassword`) VALUES(?);";
    const values = [
        req.body.Username,
        req.body.email,
        req.body.password,
        req.body.confirmPassword,
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `email` = ? and `password` = ?;";
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json(err);
        }if(data.length>0){
            return res.json("Success");
        }else{
            return res.json("Fail");
        }
    })
})

app.post('/sell',(req,res)=>{
    const ID = req.body.ID;
    const Name = req.body.Name;
    const Price = req.body.Price;
    const Seller = req.body.Manufacturer_name;
    const Pack_size = req.body.Pack_size;
    const Short_composition1 = req.body.Short_composition1;
    const Email = req.body.Email;
    const Expiry_date = req.body.Expiry_date;

    db.query("INSERT INTO sell VALUES (?,?,?,?,?,?,?,?);",[ID,Name,Price,Seller,Pack_size,Short_composition1,Email,Expiry_date],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Submitted Successfully!");
        }
    })
})
app.post('/sell1',(req,res)=>{
    const ID = req.body.ID;
    const Name = req.body.Name;
    const Price = req.body.Price;
    const Seller = req.body.Manufacturer_name;
    const Pack_size = req.body.Pack_size;
    const Short_composition1 = req.body.Short_composition1;
    const Email = req.body.Email;
    const Expiry_date = req.body.Expiry_date;

    db.query("INSERT INTO sell1 VALUES (?,?,?,?,?,?,?,?);",[ID,Name,Price,Seller,Pack_size,Short_composition1,Email,Expiry_date],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Submitted Successfully!");
        }
    })
})

app.get("/sell", (req, res) => {
    db.query("SELECT * FROM sell", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/meds1", (req, res) => {
    db.query("SELECT * FROM meds1 WHERE DATEDIFF(Expiry_date, CURRENT_DATE) <= 50", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.get("/sell1", (req, res) => {
    db.query("SELECT * FROM sell1 WHERE DATEDIFF(Expiry_date, CURRENT_DATE) <= 0;", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.post('/meds',(req,res)=>{
    const ID = req.body.ID;
    const Name = req.body.Name;
    const Price = req.body.Price;
    const Manufacturer_name = req.body.Manufacturer_name;
    const Pack_size = req.body.Pack_size;
    const Short_composition1 = req.body.Short_composition1;
    const Email = req.body.Email;
    const Expiry_date = req.body.Expiry_date;

    db.query("INSERT INTO meds VALUES (?,?,?,?,?,?,?,?);",[ID,Name,Price,Manufacturer_name,Pack_size,Short_composition1,Email,Expiry_date],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Submitted Successfully!");
        }
    })
})
app.post('/meds1',(req,res)=>{
    const ID = req.body.ID;
    const Name = req.body.Name;
    const Price = req.body.Price;
    const Manufacturer_name = req.body.Manufacturer_name;
    const Pack_size = req.body.Pack_size;
    const Short_composition1 = req.body.Short_composition1;
    const Email = req.body.Email;
    const Expiry_date = req.body.Expiry_date;

    db.query("INSERT INTO meds1 VALUES (?,?,?,?,?,?,?,?);",[ID,Name,Price,Manufacturer_name,Pack_size,Short_composition1,Email,Expiry_date],(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send("Submitted Successfully!");
        }
    })
})
app.get("/meds", (req, res) => {
    db.query("SELECT * FROM meds", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(8081, ()=> {
    console.log("listening");
})
