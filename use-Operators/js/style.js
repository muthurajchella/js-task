//Assignment Operators
    var a = 10; 
    let b = 20;
    console.log(b +=20)// Addition assignment

//Exponentiation assignment (**=)
    let c = 3;
    console.log(c **= 2);

//Comparison Operator
    //Equal (==)
    let d = 10;
    console.log(d==10)
    //Not Equal (!=)
    console.log(d!=5)
    //Strict equality (===)
    console.log(d===10)
    //Strict inequality (!==)
    console.log("d"!==10)
    //Greater than (>)
    console.log(d>10)
    //Greater than or equal (>=)
    console.log(d>=10)
    //Less than (<)
    console.log(d<15)
    //Less than or equal (<=)
    console.log(d<=15)

//Arithmetic operators
    //addition (+)
    let e1 = 5;
    let e2 = 6;
    let e = e1 + e2;
    console.log(e) 
    // subtraction (-) 
    // let e1 = 5;
    // let e2 = 6;
    // let e = e1 - e2;
    // console.log(e) 
    //multiplication (*)
    // let e1 = 5;
    // let e2 = 6;
    // let e = e1 * e2;
    // console.log(e) 
    //division (/)
    // let e1 = 5;
    // let e2 = 6;
    // let e = e1 / e2;
    // console.log(e) 
    //Remainder (%)
    let f = 50;
    console.log(f%4)
    //Increment (++)
        //prefix
        console.log(f++)
        //postfix
        console.log(++f)
    //Decrement (--)
        //prefix
        console.log(f--)
        //postfix
        console.log(--f)
    //Exponentiation (**)
        console.log(f**2)

//Bitwise operators
let g = 6;
let h = 4;
    //bitwise &
    console.log(g & h)
    //Bitwise OR (|)
    console.log(g | h)
    //Bitwise XOR (^)
    console.log(g ^ h)
    //Bitwise NOT (~)
    console.log(~g)
    console.log(~h)
    //Left shift (<<)
    //Right shift (>>)
    //Unsigned right shift (>>>)

//Logical operators
    let i = 10;
    //Logical AND (&&)
    console.log(i > 0 && i >= 10)
    //Logical OR (||)
    console.log(i > 0 || i > 10)
    //Logical NOT (!)
    console.log(!(a>0))
//BigInt operators

//String operators
let j = "Ajith";
console.log(j + "Kumar")

//Conditional (ternary) operator
let age = 19;
console.log(age > 18 ? "You Eligible To Vote": "You Are Not Eligible")

//Comma operator
// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const z = [x, x, x, x, x];

//Unary operators
let myDetails = {
    name: "Muthuraj",
    age : 25 +"Years old",
    qulification: "B.E Mechanical"
}
 console.log(myDetails);
 delete myDetails.age;
 console.log(myDetails);
//typeOf
//void

//Relational operators