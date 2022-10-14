
let btn = document.getElementById("btn")

function submit() {
    var x = document.getElementById("input").value;
    var array = [];
    document.getElementById("output").innerHTML += x;

  }btn.addEventListener("click", submit);