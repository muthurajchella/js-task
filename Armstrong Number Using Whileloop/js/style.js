var num = parseInt(prompt("Enter number"));
var sum = 0;
var temp = num;
// while(num>0){
//     var rem = num%10;
//     sum =  sum + (rem*rem*rem);
//     num = (num - rem)/10;
// }

while(num>0){
    var rem = num%10;
    sum =  sum + (rem*rem*rem*rem*rem);
    num = (num - rem)/10;
}
console.log(temp)
    if(sum == temp){
        console.log("Given Number is an armstrong");
    }
    else{
        console.log("Given Number Is Not an Amstrong");
    }

