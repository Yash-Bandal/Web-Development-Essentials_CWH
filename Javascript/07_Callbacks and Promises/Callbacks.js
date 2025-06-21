Callback -Based style of asynchronous Progrmamming

//You might find some correlation of recursion and callback
/*
no..callbacks are different
- in recursion..function calls itself to perform a task       recfunction(args, ){   recfunction();}
- in callbak function is passed as an argument like           function(args,callback)

recursion invokes same function and breaks problem  in small instances of same problem
callback invokes other function when task is completed to handle  asynchronous tasks or deferred action


visulize it as function object and notification
domino effect- each domino(task) calls other 


//=================================================
Technical
A callback is simply a function passed as an argument to another function, which is then called (or "called back") after the task is completed.
Callbacks allow us to write asynchronous code, meaning the program doesn’t have to wait for one task to finish before starting another.




//==================================================
Why Are Callbacks Used?

Callbacks are essential in JavaScript because it’s a single-threaded language. 
This means JavaScript can do only one thing at a time (one line of code executes at a time)
. To handle tasks like waiting for a file to load, fetching data from a server, or responding
to user input without freezing the browser, we use callbacks.

Key Benefits:
Non-blocking code
Better user experience:



//====================================================
When Are Callbacks Used?

You need to perform a time-consuming operation without stopping the rest of the program.
You need to do something only after another task is finished.




//======================================================
Where Are Callbacks Used in Websites?

Common Real-Life Examples:
Loading Content from a Server (AJAX calls):
Example: Fetching a list of products for an online store.
Event Handling:
Example: Clicking a button, typing in a text box, or scrolling a page.
Animations:
Example: Running an animation after a previous one finishes.
Timers:



/====================================================
Example: Running a task after a specific delay.

*/

// Synchronous Code Without a Callback:
function greet(name) {
    console.log("Hello, " + name);
}

greet("Alice");
console.log("This happens after the greeting.");

//op
// Hello, Alice
// This happens after the greeting.


// Asynchronous Code with a Callback:
function prepareFood(callback) {
    console.log("Chef: Preparing food...");
    setTimeout(() => {
        console.log("Chef: Food is ready!");
        callback();
    }, 3000); // Simulates a 3-second delay
}

function serveFood() {
    console.log("Serving food to the guests.");
}
// op
// prepareFood(serveFood);
// Chef: Preparing food...
// (3-second delay)
// Chef: Food is ready!
// Serving food to the guests.

//real lide
Note : setTimeout is just shown here to display delay..a simulation..in real examples its not used here used only f or understanding

function fetchWeatherData(callback) {  
    fetch("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London")
        .then((response) => response.json())
        .then((data) => {
            console.log("Data fetched from the server");
            callback(data); // Pass the data to the callback function
        });
}

function displayWeather(data) {
    console.log(`The temperature in ${data.location.name} is ${data.current.temp_c}°C.`);
}

// Usage:
fetchWeatherData(displayWeather);

//callback at last simply denotes success of a function after work done.. 
