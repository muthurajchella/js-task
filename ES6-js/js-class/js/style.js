class car{                                       //class is templete in js obj
          name;
          model; 
          color;                    
    constructor(name, model, color){            //Constructor is a key word is use to put propertice and value in class
            this.name = name;
            this.model = model;
            this.color = color;
    }
    display(){
        return  `Name = ${this.name} year = ${this.model}`
    }
    currentModel(){
        let date = new Date();
        return date.getFullYear()- this.model;
    }
}
const obj1 = new car("Jaguar", 2020, "black");
console.log(`${obj1.display()} currentModel = ${obj1.currentModel()}`;)