//demo
// function wish(name){
//     console.log("Hello! "+name+" All The Best")
//     alert("Hello! "+name+" All The Best")
// }
// let name = prompt("Tell Me Your Name");
// wish(name);

//Calculate Exam mark

function calculate(T,E,M,SC,SS){
    var totalMark = T+E+M+SC+SS;
    var yourPercentage = totalMark/5;
    // alert("Your Mark is = "+totalMark+ "  Your Percentage is = "+yourPresentage+"%"+)
    if(yourPercentage>=95){
        alert("Congrats Grade Is S")
    }else if(yourPercentage>=85){
        alert("Congrats Grade Is B")
    }else if(yourPercentage>=75){
        alert("Congrats Grade Is D")
    }else if(yourPercentage>=65){
        alert("Pass Grade Is D")
    }else if(yourPercentage>=35){
        alert("Pass Grade Is B")
    }else{
        alert("You Fail")
    }
}



let tamil = parseInt(prompt("Enter Tamil Mark"));
let english = parseInt(prompt("Enter English Mark"));
let maths = parseInt(prompt("Enter Maths Mark"));
let scienc = parseInt(prompt("Enter scienc Mark"));
let socialScienc = parseInt(prompt("Enter SocialScienc Mark"));

  calculate(tamil,english,maths,scienc,socialScienc);