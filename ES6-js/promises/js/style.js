let a = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Done")
    }, 2000);
})

let b = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Fails")
    }, 2000);
})

let c = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Done")
    }, 2000);
})

a.then(console.log).catch(console.log)
b.then(console.log).catch(console.log)
c.then(console.log).catch(console.log)
