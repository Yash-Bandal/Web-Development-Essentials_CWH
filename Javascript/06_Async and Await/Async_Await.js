// an async function always returns a promise ..
// other values are wrapped inside promise itself

//try removing async word..then run..youll se .then error..as it only takes in promises
//this emsures when async used ..it returns promises
/*
async function Yash() {
    return "I am promise..if async declares me";
}
Yash().then((result) => {
    console.log('Bamli Bumli Bam', result);
})
*/

//=============================
//async keyword forces a function to convert its dharm into asynchronous
//use async to control the flow..1 2 3........
async function weather() {

    let puneWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree")
        }, 2000);
    });

    let MumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("22 degree")
        }, 5000);
    });

    // puneWeather.then(alert)
    // MumbaiWeather.then(alert)

    //await stops the function almost and commands it to wait until promise fullfills
    //we know async is enuring function returns promise

    console.log("\nFetching Pune weather ..please wait")
    let puneWeath = await puneWeather;
    console.log("Pune weather fetched " + puneWeath)

    console.log("\nFetching Mumbai weather ..please wait")
    let MumbWeath = await MumbaiWeather;
    console.log("Mumbai weather fetched " + MumbWeath)

    return [puneWeath, MumbWeath];

}
console.log("Welcome to weather Room")


const checkAsync1 = async () => {
    console.log("\nI am async 1..runnning in parallel")
}

const checkAsync2 = async () => {
    console.log("\nI am async 2..runnning after weather")
}

const main1 = async () => {
    let z = checkAsync1() //has no awaait ..thus run in background
    let a = await weather();
    let b = await checkAsync2();  //has await..thus waits for a to execute
}

main1()
//dont forget to call functions..silly mistake

/*
Welcome to weather Room

I am async 1..runnning in parallel 

Fetching Pune weather ..please wait
Pune weather fetched 27 degree

Fetching Mumbai weather ..please wait
Mumbai weather fetched 22 degree

I am async 2..runnning after weather
*/




// let a = weather()
// let b = checkAsync()

// // simple
// a.then((result) => {
//     console.log('Success:', result);
// })

//or this
// weather().then((result) => {
//     console.log('weather :', result);
// })

// puneWeather.then((result) => {
//     console.log('Success:', result);
// })


//conclusion...async is used to achive and control asynchronous nature of js,...and allow promises
//thus we can run multiple functions in parallel without waiting for ones execution to complete and start next
//whenever time required to execute ..at that time in background other is running
