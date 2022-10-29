let btn = document.getElementById("submit");

function openIt(){
    const url = "hpttp://issues.com"
    window.open(url);
}
btn.addEventListener("click", openIt)
