
//input.value displaybelow

let input = document.getElementById("some");
let btn = document.getElementById("click");
let info = document.getElementById("info");
let data= function(){
	if(input.value!==""){
		let h1 = document.createElement("p");
		h1.innerText=input.value;
		info.appendChild(h1);
	
	}
	
};
     
		btn.addEventListener("click", function(){
			data();
	})





/*let a = parseInt(prompt("give a number"));
if(0<a){
	console.log("This number is positive");
}
	else{
		console.log("This number is negative");
	}
	
let b = parseInt(prompt("give anumber"));
if(b % 2==1){
	console.log("Add Numbers");
}




var age = 21;
var gpa = 7.5;
console.log(age);
console.log(gpa);

var octNum = 0255;
var hexNum = 0xff;
console.log(octNum);
console.log(hexNum);

var amount = 1.1e6;
console.log(amount);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

var name = "MUTHURAJ.C";
var profession = "Software Devloper";
var qulifi = "B.E Mechanical";

console.log(name);
console.log(profession);
console.log(qulifi);

var a ;
a = 10;
console.log(a);
console.log(typeof a);
console.log(typeof qulifi);
console.log(typeof amount);

var b;
console.log(typeof b);

var c = [];
console.log(typeof c);
*/

