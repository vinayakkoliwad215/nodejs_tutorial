const express = require("express");
const path = require("path");

const app= express();

app.set("view engine","ejs");
// const pathdir = path.join(__dirname,'public');
// app.use(express.static(pathdir))
//console.log(pathdir);
app.get("/",(req,res)=>{
	//res.sendFile(`${pathdir}/index.html`);
	res.render("index",{
		title:"index"
	});
})

app.get("/home",(req,res)=>{
	//res.sendFile(`${pathdir}/home.html`);
	res.render("home",{
		title:"home"
	});
})

app.get("/download",(req,res)=>{
	//res.download(`${pathdir}/index.html`);
})

app.get("/about",(req,res)=>{
	// res.send(`<h1>hi this is first about  express route</h1>

	// 	<input type="text" placeholder="name" value="vinayak"/>
	// 	`);
})

app.listen(3000,()=>{
	console.log("server estabilhed");
})