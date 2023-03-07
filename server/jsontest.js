const obj = {
	name:"Vinayak",
	age:"28",
	address: "Gadag"
}

const jsondata = JSON.stringify(obj);
console.log(jsondata);
const objectdata = JSON.parse(jsondata);
console.log(objectdata);