// //smaple of js condition
// let number  = parseInt(prompt("ENTER ANY NUMBER:"));
// if(number%2==0){
//     alert("Even Number")
// }
// else{
//     alert("Odd Number")
// }

// //Age priority
// let age = prompt("Enter Your Age");
// if(age>=60){
//     alert("First Priority")
// }
// else if(age>=40){
//     alert("Second Priority")
// }
// else{
//     alert("Third Priority")
// }

// //Indian Vote System
// let voteAge = prompt("Enter Your Age");
// if(voteAge>18){
//     alert("You'r Elisible to Vote")
// }
// else{
//     alert("You'r Not Elisible to Vote")
// }


// //Use Prompt to solve Arthemetic Operations
// let num1 = parseInt(prompt("Enter first Numbet"));
// let opr = prompt ("Enter Your Oprations");
// let num2 = parseInt(prompt("Enter Your Second Number"));
// if(opr == "+"){
// var result = num1 + num2;
// console.log("Result", result);
// alert("Result"+ result);

// }
// else if(opr == "-"){
//     let result = num1 - num2;
//     console.log("Result = "+result)
//     alert("Result = "+ result)
// }
// else if(opr == "*"){
//     let result = num1 * num2;
//     console.log("Result = "+result)
//     alert("Result = "+ result)
// }
// else if(opr == "/"){
//     let result = num1 / num2;
//     console.log("Result = ",result)
//     alert("Result = "+ result)
// }
// else{
//    alert("Please Give Your Arthemetic Operation")
// }

//roller coach

let age = parseInt(prompt("Please Enter Your Age"));
    if(age<=18){
        let parentPremission = prompt("yes", "No")
        if(parentPremission == "yes"){
            console.log("You're Allowed With You'r Parents Be Safe")
        }
        if(parentPremission == "No"){
            console.log("You're Child So You Not Allow The Ride")
        }
    }
    else if(age>=50){
        console.log("You're Not Allow The Ride Because You So Elder")
    }
    else{
        // let a = document.getElementById
        console.log("YOU ALLOW!!! Enjoy Your Ride!!!")
        // document.write("YOU ALLOW!!! Enjoy Your Ride!!!")
    }
    
   
    