## Generics
- Analogy : Think as labelled box 
. any means: (Will give Runtime error for wrong manipulation of a certain datatype-  eg here modifying number)
    - “I give up, I don’t know the type.”
 
- Generics say: (Will give Runtime error on vscode itself while coding)
    - “I don’t know the type now, but when you CALL the function, you must tell me the type, and I will REMEMBER it.”

```ts
//With Generics
function identity<T> (value:T){
    // return typeof(value);
   return value;
}

console.log(identity(10));
console.log(identity("Yash"));

//Runtime error, while writing code
let a = identity(10);
a.toUpperCase(); 
console.log(a)

//======================================


console.log("-=-=-=-=-=-=-=-=-=-===-=-==-=-=-=-=-=-");

//Without Generics
function identityAny(value: any) {
    return value;
}

console.log(identityAny(10));
console.log(identityAny("Yash"));


//Commpile time error, after running see in console
let a1 = identityAny(10);
a1.toUpperCase();
console.log(a1)

//======================================
```
