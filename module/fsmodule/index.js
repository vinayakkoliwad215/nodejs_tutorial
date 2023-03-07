const fs = require("fs");
//non 
fs.writeFile("file.txt","data is added file",()=> {
	console.log("data is added");
})

const b = fs.writeFileSync("file2.txt","data entered");
console.log(b); 
console.log("simplyjs");

fs.readFile("file.txt","utf-8",(err,data) => {
	console.log(data); 
})

fs.appendFile("file.txt","data is not errrrrrhhhhjjjjjjlkdfjdkflkds",(err) =>{
	console.log(err);
})
fs.rename("file.txt","abc.txt",(err) => {
	console.log(err);
})

fs.unlinkSync("file2.txt");
