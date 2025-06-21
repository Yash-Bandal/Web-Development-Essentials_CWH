
//comment one bu one
//See types of error in Lesson1.md

try {
    YashAnna;
} catch (error) {
    console.log(error);  //default .stack

    console.log("Type of error is : " + error.name);
    console.log("This is error Message :" + error.message);
    console.log("Combined Stack :" + error.stack);
}

/*
Type of error is : ReferenceError
EH2.js:7 This is error Message :YashAnna is not defined
EH2.js:8 Combined Stack :ReferenceError: YashAnna is not defined
*/
//================================  Custom ERROR =================================

console.log("\n")


try {
    throw new TypeError("YA not defined")
} catch (error) {
    console.log(error);  //default .stack

    console.log("Type of error is : " + error.name);
    console.log("This is error Message :" + error.message);
    console.log("Combined Stack :" + error.stack);
}

//TypeError: YA not defined
// Type of error is : TypeError
// This is error Message :YA not defined

try {
    console.log(YashBhai)  //priority
    throw new TypeError("YA not defined")
} catch (error) {
    console.log(error);  //default .stack

    console.log("Type of error is : " + error.name);
    console.log("This is error Message :" + error.message);
    console.log("Combined Stack :" + error.stack);
}



// Type of error is : ReferenceError
// This is error Message :YashBhai is not defined
//  Combined Stack :ReferenceError: YashBhai is not defined


try {
    let age = prompt("Enter Your Age");
    age = Number.parseInt(age)

    if (age < 18 && age < 150) {
        throw new ReferenceError("You Drive cycle..Okhe")
    } else if (age > 150) {
        console.log("You are God with age..FULL RESPECT " + age)
    }
    else {
        console.log("Um Hm..you are big boy..take the Keys")
    }
} catch (error) {
    console.log("Type of error is : " + error.name);
    console.log("This is error Message :" + error.message);
    console.log("Combined Stack :" + error.stack);
}
