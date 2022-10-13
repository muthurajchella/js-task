// Function Default Parameters
function calculateTax(cost, tax = 18){
    taxAmount = cost * (tax / 100);

    console.log(`Total Cost is:₹${cost}
Tax Amount(${tax}%):₹${taxAmount} 
TOtal Amount is:₹${cost+taxAmount}`);

}

calculateTax(2000, 25) 