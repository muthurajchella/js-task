let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

let row = 1;
function displayDetails(){
    let name = document.getElementById("name").value;
    let tm = parseInt(document.getElementById("tm").value);
    let eng = parseInt(document.getElementById("eng").value);
    let maths = parseInt(document.getElementById("maths").value);
    let sc = parseInt(document.getElementById("sc").value);
    let ss = parseInt(document.getElementById("ss").value);

    if(!name || !tm || !eng || !maths || !sc || !ss){
        alert("Please Check Your All Input Details ");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

     var cell0 = newRow.insertCell(0);
     var cell1 = newRow.insertCell(1);
     var cell2 = newRow.insertCell(2);
     var cell3 = newRow.insertCell(3);
     var cell4 = newRow.insertCell(4);
     var cell5 = newRow.insertCell(5);
     var cell6 = newRow.insertCell(6);
     var cell7 = newRow.insertCell(7);

     cell0.innerText = name;
     cell1.innerText = tm;
     cell2.innerText = eng; 
     cell3.innerText = maths;
     cell4.innerText = sc;
     cell5.innerText = ss;
     cell6.innerText = tm+eng+maths+sc+ss;
     cell7.innerText = (tm>=35  && eng>=35 && maths>=35 && sc>=35 && ss>=35 ? "PASS":"FAIL")
     


row++;

name.value = ""
console.log(cell6);
}

