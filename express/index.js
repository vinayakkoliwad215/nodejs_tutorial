const express = require("express");
const path = require("path");

const app= express();

//const router = express.Router();

const router = require('./router.js');

app.set("view engine","ejs");
// const pathdir = path.join(__dirname,'public');
// app.use(express.static(pathdir))
//console.log(pathdir);

app.use(router);




app.listen(3000,()=>{
	console.log("server estabilhed");
})