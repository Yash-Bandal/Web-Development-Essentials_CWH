/*
In JavaScript, a callback is a function passed to another function to execute after an asynchronous operation completes.
Callback hell refers to the " problematic situation " where multiple nested callbacks create a “pyramid of doom,”
making the code difficult to read, debug, and maintain.

Callback Hell Example
Let’s say you’re building an app that:
*/
// Fetches user data.
// Fetches their posts based on user ID.
// Fetches comments for those posts.
// Here’s how it looks with plain callbacks:

getUserData(function (user) {
    getUserPosts(user.id, function (posts) {
        getPostComments(posts[0].id, function (comments) {
            console.log("Comments:", comments);
        });
    });
});
doTask1(function (result1) {
    doTask2(result1, function (result2) {
        doTask3(result2, function (result3) {
            doTask4(result3, function (result4) {
                doTask5(result4, function (result5) {
                    console.log("All tasks done!");
                });
            });
        });
    });
});
//promises is a solution to callback hell

// Promises are a cleaner way to handle asynchronous code. They flatten the pyramid by chaining .then() calls.
getUserData()
    .then((user) => getUserPosts(user.id))
    .then((posts) => getPostComments(posts[0].id))
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });



