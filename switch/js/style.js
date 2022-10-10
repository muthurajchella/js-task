let num1 = parseInt(prompt("Enter Your First Number :"));
let operator = prompt("Enter Your Arithemetic Operations :");
let num2 = parseInt(prompt("Enter Your Second Number :"));

switch(operator){
    case ("+"): 
        alert("Result = "+parseInt(num1+num2));
        break;
    case ("-"):
        alert("Result = "+parseInt(num1-num2));
        break;
    case ("*"):
        alert("Result = "+parseInt(num1*num2));
         break;
    case ("/"):
        alert("Result = "+parseInt(num1/num2));
        break;
    default:
        alert("Please Check Your Operations");

}