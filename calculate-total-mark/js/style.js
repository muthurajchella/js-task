let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

let row = 1;
function displayDetails(){
    let name = document.getElementById("name").value;
    let tm = document.getElementById("tm").value;
    let eng = document.getElementById("eng").value;
    let maths = document.getElementById("maths").value;
    let sc = document.getElementById("sc").value;
    let ss = document.getElementById("ss").value;
console.log(name,tm,eng,maths,sc,ss);

    if(!name || !tm || !eng || !maths || !sc || !ss){
        alert("Please Check Your All Input Details ");
        return;
    }
}