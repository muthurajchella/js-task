var startElem = document.getElementById('btn1');

var stage1Operation = function(){
    var operationElem = document.getElementById('operation');
    var rangeElem = document.getElementById('range');
    operation = operationElem.value;
    range = rangeElem.value;
    console.log(operation, range);
}

startElem.addEventListener('click', stage1Operation);
