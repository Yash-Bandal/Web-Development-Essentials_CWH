//this is promise syntax
const p  = new Promise((resolve, reject) => {

});


//this syntax says...whatever is inside promise ..will be executing and background
//once it will be executed ..you will be notified by then catch and all  


//Resolve
const promise1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise1 and I am Fullfilled")
        resolve(true)
    }, 3000);

});

console.log(promise1)


//op
/*
Promise is pending
Promise {<pending>}

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: true   //resolve true  after 3 secs

//after 3 secs
 I am a promise1 and I am Fullfilled
*/


//Reject
const promise2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise2 and I am Rejected")
        // resolve(true)
        reject(new Error("I am error"))
    }, 3000);

});

console.log(promise2)

//op
/*
Promise is pending
Promise {<pending>}

[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: Error I am rejected  //reject throws error after 3 secs

//after 3 secs
 I am a promise2 and I am rejected

 Uncaught error
*/


//Now both are  executing in parrallel..both take 5 seconds..no seperately

//when p1 is done
//then usedd manyyyy times..to display values
//fetching data and all 
promise1.then((value) => {
    console.log(value)
})

promise2.catch((error) => {
    console.log("Some error occured in promise 2") 
})


//op
/*
Promise is pending
Promise { <pending> }
Promise is pending
Promise { <pending> }


I am a promise1 and I am Fullfilled
true
I am a promise2 and I am Rejected
Some error occured in promise 2   //instead of showing log error
*/


//here values of promise1 and promise2 are the states
//snippet thencatch


//==========================
//other single syntax thencatch  ..trycatch thencatch dont confuz

  p1.then((result) => {
    console.log('Success:', result);
  },(error) => {
    console.error('Error:', error);
  })
 
