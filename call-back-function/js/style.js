
//CALL BACKfunctions

function myName(firstName, lastName, callback){
	let result = firstName + "" + lastName;
	callback(result);
}

function showFullName(r){
	console.log("My Name Is "+r);
    document.write("My Name Is "+r);
}
myName("Muthu","raj",showFullName)

