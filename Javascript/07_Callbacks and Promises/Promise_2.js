// Creating a Promise that simulates a task (like fetching data)
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to `false` to simulate rejection

    // Simulate task completion
    setTimeout(() => {
        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Task failed!");
        }
    }, 2000); // Simulating delay of 2 seconds
});

// Handling the Promise result
myPromise
    .then(result => {
        console.log("Fulfilled: " + result); // If Promise is resolved
    })
    .catch(error => {
        console.log("Rejected: " + error);  // If Promise is rejected
    });

//==============================================================================================

                     Promise (Pending)
                           |
          +----------------------------+
          |                            |
    Task executes                Task fails (error)
          |                            |
   Promise resolves            Promise rejects
          |                            |
   Fulfilled (resolved)          Rejected (error)
          |                            |
    .then() function           .catch() function
