## The Story of the Promise
Imagine you are ordering a custom cake from a bakery.

### Promise Creation:
Promise Creation: You tell the baker (who is really busy) to make you a cake and you promise that you will pay him when the cake is ready. You don't know exactly when it will be ready, but you trust the baker to complete it on time.

1. Pending State: Right after you place your order, the cake is in the pending state. It is neither completed nor rejected. You’re just waiting for the result.<br>
2. Fulfilled State: After some time, the baker finishes the cake and calls you to let you know it's ready. The cake is fulfilled, and you go and pick it up. You can now enjoy the cake.<br>
3. Rejected State: Imagine the baker faces some issues, like running out of ingredients, and can’t make the cake. In this case, the promise is rejected, and the baker tells you that he can’t fulfill your order. You are then disappointed.


## APIS
Promise APIs are methods that allow you to handle asynchronous operations in a structured and cleaner way. These APIs help in **managing**  the completion or failure of asynchronous tasks, allowing you to chain operations and handle errors effectively.

###  Chaining Tasks with .then():
Once the cake is baked, the baker moves on to the next task—decorating the cake. We can use .then() to chain this next task.

```javascript
let bakeCake = new Promise((resolve, reject) => {
    console.log("Baking the cake...");
    let isBaked = true; // Assume it’s successfully baked
    if (isBaked) {
        resolve("Cake baked successfully!");
    } else {
        reject("Cake failed to bake.");
    }
});
bakeCake
    .then(result => {
        console.log(result); // "Cake baked successfully!"
        console.log("Decorating the cake...");
        return new Promise((resolve) => {
            resolve("Cake decorated beautifully!");
        });
    })
```

### Handling Errors with .catch():
But imagine, while decorating, the baker accidentally drops some frosting! What happens then? The decorator process could fail, and we need to handle that error with .catch().
```javascript
    .then(decorating => {
        console.log(decorating); // "Cake decorated beautifully!"
        throw new Error("Frosting dropped!");  // Simulate error
    })
    .catch(error => {
        console.log("Error: " + error.message); // Catches the frosting error
        console.log("Reworking the decoration...");
        return new Promise((resolve) => {
            resolve("Cake re-decorated successfully!");
        });
    });

```
### Promise.all()
What if you need to wait for multiple asynchronous tasks to complete? For example, you might be ordering a cake and asking the baker to prepare a drink at the same time. **`Promise.all()`** allows you to wait for multiple promises to complete before proceeding.

```javascript
let cakeOrder = new Promise((resolve, reject) => {
    resolve("Cake is ready!");
});

let drinkOrder = new Promise((resolve, reject) => {
    resolve("Drink is ready!");
});

Promise.all([cakeOrder, drinkOrder])
    .then(results => {
        console.log(results); // ["Cake is ready!", "Drink is ready!"]
    })
    .catch(error => {
        console.log(error);
    });
```

### Promise.race()
If you’re more interested in the first task to finish (like being impatient and wanting your cake or drink as soon as possible), use Promise.race(). It resolves as soon as the first promise resolves (or rejects).

```javascript
let cakeOrder = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Cake is ready!"), 5000);
});

let drinkOrder = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Drink is ready!"), 2000);
});

Promise.race([cakeOrder, drinkOrder])
    .then(result => {
        console.log(result); // Logs "Drink is ready!" because it's faster
    })
    .catch(error => {
        console.log(error);
    });

```
### .finlally..cleaning mostly
Sometimes, you may want to perform a cleanup task..like here cleaning the kitchen, like logging that your cake is ready or handling something after all promises, regardless of success or failure.
```javascript
cakeOrder
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Cleanup: Done with cake order.");
    });

```
### Waiting for All Tasks to Settle with Promise.allSettled():
Now, suppose after all this work, the baker wants to know if the cake, box, and packing are done, regardless of whether any of the tasks failed. This is where Promise.allSettled() is useful. It waits for all promises to either fulfill or reject and reports their status.

let boxPreparation = new Promise((resolve) => setTimeout(() => resolve("Box prepared!"), 1000));
let cakeQualityCheck = new Promise((resolve, reject) => setTimeout(() => reject("Cake failed the quality check!"), 500));
let decorationReview = new Promise((resolve) => setTimeout(() => resolve("Cake decoration approved!"), 2000));

```javascript
Promise.allSettled([boxPreparation, cakeQualityCheck, decorationReview])
    .then(results => {
        console.log(results);
        // Output: 
        // [
        //   { status: "fulfilled", value: "Box prepared!" },
        //   { status: "rejected", reason: "Cake failed the quality check!" },
        //   { status: "fulfilled", value: "Cake decoration approved!" }
        // ]
    });
```


###  Promise.any()
Promise.any() resolves as soon as one promise in the array fulfills (i.e., resolves). If all promises reject, it will reject with an AggregateError.

Behavior: It only cares about the first successful promise. If all promises fail (reject), it will throw an error.
When it's useful: When you only care about the first successful promise, but if all tasks fail, you want to handle that case.
```javascript
let task1 = new Promise((resolve) => setTimeout(() => reject("Task 1 failed!"), 1000));
let task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 completed!"), 2000));

Promise.any([task1, task2])
    .then(result => console.log(result)) // "Task 2 completed!" (first to resolve)
    .catch(error => console.log(error));  // If all tasks fail, "AggregateError"

```

.race : When you care about the first promise to settle, no matter if it's fulfilled or rejected. <br>
.any  : When you care only about the first successful (fulfilled) promise
