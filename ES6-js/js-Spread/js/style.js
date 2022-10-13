//Spread operator in js
    //combining Arrays
    const shop = ["mobile","watch","pen"];
    const add = ["note","lab"]
    // let last = shop.concat(add);
    //sread
    let last = [...shop,50,{shopName:"Thiru"}, ...add];
    console.log(last);