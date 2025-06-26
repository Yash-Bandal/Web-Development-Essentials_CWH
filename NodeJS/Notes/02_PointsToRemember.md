## NodeJS

1. npm init creates `package-json` which allows you to install packages when required, names and version saved in `dependencies{}` inside package.json
2. npm -i installs required packages which can be seen in dependencies
3. `res.setHeader('Content-Type', 'text/html');` ..here content type determines output of page, default is `text/plain` change it to `text/html` or whatever requrired
4.   You may have latest or old version of nodejs, to use specific, use **Node version manager**
   ```js
    nvm use <version>
   ```
5. filname, dirname , require are all wrapped up in a function, from where they are used /called
6. If you dont remeber syntax, just write the module / required element name and hover over the suggestion by`vscode` and copy syntax
7. Install specific version `npm i express@4`
8. No one remembers complete code, with practise you get there, its imp to know concepts, where to apply what code , use `documentations`
9. Get request has a limit of 2048 characters, so you cant send large data on server, just query and requests, we use post to send data
10. Dont confuse, **Server in Node.js = Software Process / program that processes requests and operstions (not physical)** 
    - It starts a program that listens on a port (like 3000, 8000, etc.)
    - That program runs inside Node.js on your machine (localhost), or on a cloud/deployed machine
    - It Processes them (routes, logic, data)
    - Sends responses back to the client
      ```js
      // Node http server
      const http = require('http');
      const server = http.createServer((req, res) => {
        res.end('Hello from Node!');
      });
      server.listen(3000);
      ```
      ```js
      // Express server
      const express = require('express');
      const app = express();
      app.get('/', (req, res) => res.send('Hello from Express!'));
      app.listen(3000);
      ```

<br>

### Steps to check POST request using express
1. First use the template with "Hello world" in main.js 
2. Run the main.js or any js file on server using nodemon main.js
3. Inside the main.js use
```js
app.use(express.static('public')) // dont forget to use this to make publicaly available

app.get('/', (req, res) => {
   console.log("This is get")
   res.send('Get request')
})
   
app.post('/', (req, res) => {
   console.log("This is post")
   res.send('This is post')
})
```
   
4. create a html page inside public folder
5. Test in it

```js
<script>
   async function testPost(){
   let a = await fetch("/", {method: "POST"})
   let b = await a.text()
   console.log(b)
   }

   testPost()
</script>
```

6. Now check on
```
http://localhost:3000/
- GET REQUEST

http://localhost:3000/mypage.html
see console, if you see  - This is post, POST is active
```


<br>

### Error Handling
1. TypeError: path must be absolute or specify root to res.sendFile
- checl if
  ```js
  res.sendFile('templates/index.html')
  ```

  replace with
  ```js
   res.sendFile('templates/index.html', {root:__dirname})
  ```
2. localhost:3000 or other is already running a different file
   - This happends because there may be another directorys file thats running, this is because you dont have expreess in that folder you are working now, and Node is using previos folders node_module
   - One project - > one express
