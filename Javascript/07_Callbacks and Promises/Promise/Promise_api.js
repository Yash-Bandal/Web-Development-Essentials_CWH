let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 1");
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            // resolve("Value 2");
            reject(new Error("Error"));  //trial for rejection
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Value 3");
    }, 3000);
});

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

//===========================================
//try all by uncommenting commenting one by one


let promise_all = Promise.all([p1, p2, p3]) 
//  op : [ 'Value 1', 'Value 2', 'Value 3' ]


let promise_all = Promise.race([p1, p2, p3])
//Value 2


//.any handles somewhat error..when .race  aims only to run the first completed..indeed succesful or failed (rejected)
//.any only gives first  sucesful
let promise_all = Promise.any([p1, p2, p3])
//Value 3

let promise_all = Promise.resolve(6)
//6

let promise_all = Promise.reject(new Error("Hey"))
// error hey

let promise_all = Promise.allSettled([p1, p2, p3])
// op :
//   [
//     { status: 'fulfilled', value: 'Value 1' },
//     { status: 'fulfilled', value: 'Value 2' },
//     { status: 'fulfilled', value: 'Value 3' }
//   ]


promise_all.then((value) => {
    console.log(value)
})

// promise_all.catch(() => {
//     console.log("theres error")
// })
