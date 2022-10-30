var num = parseInt(prompt("Enter Numbers"));
var sum = 0;
while(num>0){
    var rem = num%10;
    if(rem == 1){
        console.log("ONE");
    }
    else if(rem == 2){
        console.log("TWO");
    }
    else if(rem == 3){
        console.log("THREE");
    }
    else if(rem == 4){
        console.log("FOUR");
    }
    else if(rem == 5){
        console.log("FIVE");
    }
    else if(rem == 6){
        console.log("SIX");
    }
    else if(rem == 7){
        console.log("SEVEN");
    }
    else if(rem == 8){
        console.log("EIGHT");
    }
    else if(rem == 9){
        console.log("NINE");
    }
    else{
        console.log("ZERO")
    }
    num = (num-rem)/10;
    console.log()
}

