//Handles script load error from screen to terminal..using try catch and async awaits
const loadScript = async (src) => {
    return new Promise((resolve, reject) => {

        let script = document.createElement("script");//script<></script>
        script.src = src;                             //<script src = "link_input">
        script.onload = () => {
            resolve(src + " is loaded");
        }
        document.body.append(script)  //head append<head> or <body>
    });
}
//Load directly without asyn
// Problem 1 
// let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js")
//   a.then((result) => {
//     console.log('Success:', result);
// })


//Problem 2
// const main2 = async() => {
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// main2()


//Problem 3 
//promise func ret
let p = () => {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Not acceptable"))
        }, 3000)
    })
}

let a = async () => {
    try {
        let c = await p()  //c used to store promise cheat..the promise token ..if no error this run
        console.log(c)
        console.log("No erro")
    } catch (error) {
        console.log("Error handled"+error)
    }
}

a()  //call

/*
create element creates a element TAG
like 
<script></script>

let li = documet.createElement("li")
<li></li>...then li.appendChild
*/
