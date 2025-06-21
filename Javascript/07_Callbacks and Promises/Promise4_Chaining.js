const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p1 : I am chain1 p1 : 2nd sec")
        resolve("p1");
    }, 2000);
});


p1.then((result) => {
    //1. Mark solved 1
    console.log('Success1 :', result);

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am chain2 p2 : 4th sec")
            resolve("p2")
        }, 2000)
    });
    return p2;

}).then((res2) => {
    //2. Mark solved 2
    console.log("Success2 :", res2)

     p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am chain3 p3 : 6th sec")
            resolve("p3")

        }, 2000);
    });

    return p3;

}).then((res3) => {
    console.log('Success3:', res3);
    console.log("Successful..we are done")
})

/*
p1 (2 sec)    
 └── Success1: p1   //return p1
       └── > p2 (4 sec)
             └── Success2: p2   //return p3
                   └── >p3 (6 sec)
                         └── Success3: p3   //return p3
                               └──> Final Log: "Successful..we are done

        chain the promises and pass the results to next proms chains
 */

/*
p1 : I am chain1 p1 : 2nd sec
Success1 : p1
I am chain2 p2 : 4th sec
Success2 : p2
I am chain3 p3 : 6th sec
Success3: p3
Successful..we are done
*/

const loadScript = (src)  => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";  //acces object methods
        script.src = src;

        document.body.appendChild(script)
        script.onload = () => {
          resolve(1)
        }

        script.onerror = () => {
          reject(0)
        }

    });
  
}
//thus using chaining we can load 1+ scripts

let pr1 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/min.js/0.1.0/$.min.js")
pr1.then((result) => {
    console.log('Success:we Have successfully Loaded script', result);
})
pr1.catch((error) => {
    console.log('Erro came..we are sorry we could not load the script', error);
})
