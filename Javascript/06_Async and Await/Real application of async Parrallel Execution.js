


let p1 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(10)
            }, 2000)
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(20)
            }, 1000)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve(30)
            }, 3000)
    })
}
//all exec result after 3 seconds only
const run = async () => {
    console.time("run")

    //First try with this without parallet ..await
    //Imagine 3 checfs work one after other..after one finish next come
    let a1 = await p1() // Fetch first 10 products from the database
    let a2 = await p2() // Fetch another 10 products from the database
    let a3 = await p3() // Fetch yet another 10 products from the database
    console.log(a1, a2, a3)
    //takes 6 seconds in total 1+2 +3

  //Aedond..run all in parallel..
  //imagnine 3 chefs running.[uncomment and see]

    let a1 = p1() // Fetch first 10 products from the database
    let a2 = p2() // Fetch another 10 products from the database
    let a3 = p3() // Fetch yet another 10 products from the database all simultaneously with async
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    
    //take total 3 seconds for all ..fast



    console.timeEnd("run")
}

run()

