
//================ Advanced JS ==========
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);

    });
}

//will now work without async func
// let a = await sleep()

//use async to make it work



//================================ IIFE =================================
/*
An IIFE (Immediately Invoked Function Expression) ()()
(function() {
    console.log("I am an IIFE and I run immediately!");
})();
*/



(
    async function main() {
        let b = await sleep();
        console.log(b)
    }
)()

// main()..without this above runs

//================================ Destructing ... =================================
let [x, y] = [10, 20, 30]
console.log(x, y) //no 30 print
//10 20

// let [a, b, rest] = [1, 5, 7, 8, 9, 10] without destructing
let [a, b, ...rest] = [1, 5, 7, 8, 9, 10]
console.log(a, b, rest)

let obj = {
    p: 1,
    q: 2,
    r: 3
}
let { p, q } = obj
console.log(p, q)

//used lots of time in real applications..react and all

//========================= Spread Syntax ========================================
// ... triple operator-> spread operators > opens arrays and objs
let numbers = [1, 2, 3];
let copyNumbers = [...numbers];

console.log(copyNumbers); // Output: [1, 2, 3]


function sum(a, b, c) {
    return a + b + c;
}
let arr = [1, 2, 3, 4]
let s1 = sum(arr[0], arr[1], arr[2]);
console.log("sum 1 : " + s1)

console.log("sum 2 : " + (sum(...arr)))
//use (sum) not direct sum


//=========================== Hoisting ========================================
/*
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their
 scope before execution. 
This means you can use functions and variables before declaring them in your code.
*/

function fn() {
    console.log("I was declared down " + down) //undefined op

    var down = 10;

    console.log(ho); // Output: undefined
    var ho = 10;
    console.log(ho); // Output: 10

    //only declaration moved up..not the value setting..undefined shows that its declared 
    //down not work with let and const


    console.log(ho2); // Output:  Cannot access 'ho2' before initialization
    let ho2 = 10;
    // const ho2 = 10;
    console.log(ho2); // Output: 10

}
fn()

