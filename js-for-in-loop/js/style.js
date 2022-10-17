let students = {
    name    : "Muthu",
    age     :  25,
    sex     : "male"
}

for (let key in students){
    console.log(key+ ":"+ students[key]);
}


let colors = ['red', 'bule', 'green']

for(let key in colors){
    console.log(colors[key]);
}

for(let color of colors){
    console.log(color);
}

