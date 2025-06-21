// let options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'Yash Bandal',
//         body: '2025',
//         userId: 100,
//     }),
// }


// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));


//==================================== in snippet type fetchpost
//With await async
const createTodo = async (todo) => {

    let options = {
        method: "POST", // Specifies the HTTP method as POST
        headers: {
            "Content-type": "application/json", // Informs the server that we're sending JSON
        },
        body: JSON.stringify(todo), // Converts the `todo` object into a JSON string
    };
    
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    let response = await p.json();  
    return response
}


//get todo ..another
const getTodo = async(id)=>{
    let p2 = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)  //send id
    let response = await p2.json();   
    return response 
}

//the ine main()
const mainFunct =async () => {
    //Define custom todo
    let todo = {
        title: 'Yash Bandal 2',
        body: '2025',
        userId: 100,
    }
    //call function
    let todor = await createTodo(todo);
    console.log(todor)
    console.log(await getTodo(5))

}

//call main func
mainFunct()



