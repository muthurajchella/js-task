
let btn = document.getElementById("submit");
let arry = {};
let count=1;
 let userData = function(){
	 let tbl = document.getElementById("table");
	 let tableRow = tbl.insertRow(tbl.length);
	 let cel1 = tableRow.insertCell(0);
	 let cel2 = tableRow.insertCell(1);
	 let cel3 = tableRow.insertCell(2);
	 let cel4 = tableRow.insertCell(3);
	 let name = document.getElementById("name");
	 let age = document.getElementById("age");
	 let qulify = document.getElementById("qulify");
	 let button = document.createElement("button");
	 button.innerText="Edit";
	 let button1 = document.createElement("button");
	 button1.innerText="Delete";
	 button.setAttribute("data-user", count);
	 cel1.innerText=name.value;
	 cel2.innerText=age.value;
	 cel3.innerText=qulify.value;
	 cel4.appendChild(button);
	 cel4.appendChild(button1);
	 arry[count]= {
		 name: name.value,
		 age: age.value,
		 qulify: qulify.value
	 }
	 count++
	 
	 name.value = "";
	 age.value = "";
	 qulify.value = "";
	 
	 button.addEventListener("click", function(event){
		 let user = event.target.getAttribute("data-user");
		 name.value = arry[user].name;
		 age.value = arry[user].age;
		 qulify.value = arry[user].qulify;
	 })
 }
	btn.addEventListener("click", function(){
		
		userData();
	});
	
	
		
	



//sales product, calculate amount
/*
function sales(){
	let marketPrices, buys, amount;
	let marketPrice = document.getElementById("product");
	let buy = document.getElementById("in1");
	let total=document.getElementById("total");
	marketPrices=marketPrice.innerText;
	buys=buy.value;
	amount=marketPrices*buys;
	total.innerHTML=amount;
	
}

	document.getElementById("btn").addEventListener("click", sales);
	
	*/