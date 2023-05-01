const express = require("express");

const router =express.Router();
const middleware  =require("./middleware")

router.use(middleware);
router.get("/",(req,res)=>{
	//res.sendFile(`${pathdir}/home.html`);
   
	res.render("index",{
		title:"index"
	});
})
router.get("/home",(req,res)=>{
	//res.sendFile(`${pathdir}/home.html`);
	res.render("home",{
		title:"home"
	});
})

router.get("/download",(req,res)=>{
	//res.download(`${pathdir}/index.html`);
})

router.get("/about",(req,res)=>{
	// res.send(`<h1>hi this is first about  express route</h1>

	// 	<input type="text" placeholder="name" value="vinayak"/>
	// 	`);
})


module.exports = router;