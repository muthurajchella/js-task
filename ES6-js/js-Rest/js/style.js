
//Rest Operator arguments used to functions
    function sum(...ex){          
    return ex.reduce((a,b) => {
        return a+b;
    });
    }
    let result = sum(1,2,3,4,5);
    console.log("Total :" ,result);

    function sum(Decre, ...ex){
        let total = ex.reduce((a,b) => a+b);
        return total - Decre;
    }
    
    let result1 = sum(10,1,2,3,4,5); //rest ope is remine items
    console.log("total: ", result1);