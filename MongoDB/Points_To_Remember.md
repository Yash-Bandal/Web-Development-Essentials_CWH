## Errors and Solutions
### 1. IP Configuration of Different Wifi / Network connections
1. Sometimes you may think , server/app was running perfect at home, but not working now
2. This is because, MongoAtlas online cloud uses IP address, which may change with change in network,
3. So, when you change network , also configure IP again by visiting atlas

### 2. If changes not visible
1. Sometimes you run code , ike the playground and dont see the output
2. Refresh the Database, by hovering to `localhost:27107` within the Leaf inside vscode
3. Check now

### 3. db.insertMany or similar like this - Is not a Function
1. you may have forgotton to use collection name
```js
db.courses.insertMany([{
 //data
}])
```
not 
```js
db.insertMany([{}])
```

```js
//and to print one doc
let a = db.courses.find({price:0})
console.log(a)

//to print and read many
let b = db.courses.find({course:1})
console.log(b.toArray())
```

### Problem while updating
#### a) Syntax 
1. You were observing that its a neat syntax
2. But check if you have written
   ```js
   db.collection.update()
   ```
3. `update()` is deprecate
4. You have to use
   ```js
   db.collection.updateOne()
   //or
   db.collection.updateMany()
   ```
#### b) Forgot atomic operator like `$set`
  ```js
  db.collection.updateOne({
    { OldIncome: "1,00,000" },
    { $set: { newIncome : "10,00,0000" } }
  })
  ```
