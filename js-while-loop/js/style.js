// var i = 1;
// var large = parseInt(prompt("Check Maximum Of Odd Number"));
// while(i <=large ){
//     if(i%2!==0){
//         console.log("Odd Numbers", i)
//     }

//     i++;
// }


// let i = 1;
// for(i=0; i<=100; i++){
//     if(i%7===0){
//         var a = i;
//         if(a%10!==1){
//             console.log(a)
//         }
//     }
   
// }


// let a = 124;
// let result = 0;
// while(a>0){
//     let rem = a%10;
//     a = (a-rem)/10;
//     result = (result*10)+rem;
// }
// console.log(result);


let num = 1978;
let result = 0;
while(num>0){
    let rem = num%10;
    num = (num-rem)/10;
    console.log(rem);
    console.log(num);
    result +=rem
    
}

console.log("result", result);