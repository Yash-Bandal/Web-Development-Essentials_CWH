// The try..catch construct may have 1 / 1+ clause finally 
//This finally block executes always... if it exists it will compulsary run in all cases


console.log("This is a finally Block Test")
function testReturn() {
    try {
        console.log("Inside try");
        return "";  // This return does not skip the finally block
    } catch (error) {
        console.log("Inside catch");
        return "From catch";
    } finally {
        console.log("Inside finally");
    }
}

console.log(testReturn());  // Outputs: "Inside try" -> "Inside finally" -> "From try"


/*
as it runs compulsary...it is mostly used to clean up purpose
- close file
- exit loop 
- write to the log
*/
