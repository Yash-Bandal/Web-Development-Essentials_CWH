setTimeout(() => {
    console.log("Hacking WIFI Port:0.192.8 [.net]")
}, 1000);


// console.log(Some_Error);  //terminates code and program halts..down program not proceed..thus use try catch


//instead of giving program error..give me error in console
try {
    //1. asynchronous not handled (schedule in x time  )
    //     setTimeout(() => {
    //         console.log(BoomBamerror)
    //     }, 100);


    //1.1 Handling asyn seperately
    setTimeout(() => {
        try {
            console.log(BoomBamerror)
        } catch (error) {
            console.log(error)
        }
    }, 100);


    //2. synchronous handled
    console.log(Some_Error)
} catch (error) {
    // console.log(error)
    console.log("Error occured...Move ahead Dont stop...BoomBaam")
}

setTimeout(() => {
    console.log("Succesfull Penetration into server")
}, 4000);

setTimeout(() => {
    console.log("Fetching Your Username and password [+91 934278234]")
}, 6000);

setTimeout(() => {
    console.log("Username and Password Fetched..Procedeeing Next....")
}, 8000);

/*
Error occured...Move ahead Dont stop...BoomBaam
EH1.js:2 Hacking WIFI Port:0.192.8 [.net]
EH1.js:18 Succesfull Penetration into server
EH1.js:22 Fetching Your Username and password [+91 934278234]
EH1.js:26 Username and Password Fetched..Procedeeing Next....
*/


//note;: if exception occurs in schedule..trycatch cant handle it
/*
Means : 1. There must be only synchromous code inside try catch block
        2. If asynchronous occur.it cant handle it
        bcoz the funnction will ecevute later in x time..and the engine has already compiled and left behind the try 
        catch construct
        //imagine train arrived at 5pm you reached at 5 30 ..train left

to Handle asynchrous schedule..use try catch inside asynchronous seperately

*/
