<h1 align = "center"> Node JS </h1>

<br>

## Index

1. [Introduction to Node.js](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#1-introduction-to-nodejs)
2. [Node.js Fundamentals](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#2-nodejs-fundamentals)
3. [Node.js Modules](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#3-nodejs-modules)
4. [File System & Path](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#4-file-system--path)
5. [Events and Streams](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#5-events-and-streams)
6. [HTTP Module and Server Creation](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#6-http-module-and-server-creation)
7. [npm and Package Management](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#7-npm-and-package-management)
8. [Project Initialization](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#8-project-initialization)
9. [Express.js Framework](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#9-expressjs-framework)
10. [Templating Engines](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#10-templating-engines-in-expressjs)
11. [Environment Variables](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#11-environment-variables-in-nodejs)
12. [Working with REST APIs](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#12-working-with-rest-apis-in-express)
13. [CRUD with MongoDB & Mongoose](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#13-crud-with-mongodb--mongoose)
14. [Middleware, Logging, and Error Handling](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#14-middleware-logging-and-error-handling)
15. [Authentication with JWT](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#15-authentication-with-jwt-json-web-token)
16. [Uploading Files with Multer](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#16-uploading-files-with-multer)
17. [Deployment with Node.js](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#17-deployment-with-nodejs)
18. [CommonJS vs ECMAScript](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#18-commonjs-vs-ecmascript-modules)


<br>

### References
1. [Documentation](https://nodejs.org/docs/latest/api/synopsis.html)
2. [W#Schools](https://www.w3schools.com/nodejs/)

<br>

## 1. Introduction to Node.js

### 1.1 What is Node.js?

* Node.js is an open-source, cross-platform JavaScript runtime environment.
* It allows you to run JavaScript code outside of the browser (on the server).
* Built on Google Chrome's V8 JavaScript engine.
* Enables JavaScript to be used for backend development.

### 1.2 Key Features of Node.js

* **Asynchronous and Event-Driven**: Non-blocking I/O operations.
* **Single-Threaded**: Uses a single-threaded event loop model.
* **Fast Execution**: Powered by the V8 engine.
* **Scalable**: Suitable for building scalable network applications.
* **Cross-Platform**: Runs on Windows, macOS, and Linux.

### 1.3 Node.js Architecture

* **Event Loop**: Handles asynchronous operations.
* **Call Stack**: Executes functions one at a time.
* **Callback Queue**: Stores asynchronous callbacks.
* **Thread Pool (libuv)**: Handles expensive tasks like file system or network I/O.

### 1.4 Where Node.js is Used

* Real-time applications (e.g., chat apps, gaming servers)
* REST APIs and backend services
* Streaming services
* IoT solutions
* CLI tools (Command-line interfaces)

### 1.5 Node.js vs Traditional Backend Languages

| Feature         | Node.js              | Traditional Backends (e.g., PHP, Java) |
| --------------- | -------------------- | -------------------------------------- |
| Language        | JavaScript           | PHP, Java, Python                      |
| I/O Model       | Non-blocking (async) | Blocking (sync)                        |
| Execution Model | Single-threaded      | Multi-threaded                         |
| Speed           | High                 | Moderate to High                       |
| Learning Curve  | Easy (for JS devs)   | Varies                                 |

### 1.6 Installing Node.js and npm

1. Visit [https://nodejs.org](https://nodejs.org)
2. Download the LTS version for your OS.
3. Install by following the setup wizard.
4. Verify installation:

```bash
node -v   # prints Node.js version
npm -v    # prints npm version
```

### 1.7 Node.js REPL (Read-Eval-Print Loop)

* Interactive shell to test Node.js code.
* Launch it by typing `node` in your terminal.

```bash
$ node
> console.log("Hello World")
Hello World
```

* Commands:
  * `nodemon fileName.js` - Keeps an eye on the file and avoids manual starting server everytime
  * `.exit` – exit REPL
  * `.help` – show all commands
  * `npx install moduleName` - Installs the library for that period of time
  * `npm i express@4` - install specific module version
  * `nvm use version` - version specific
    

### 1.8 First Node.js Program

1. Create a file named `app.js`
2. Add the following code:

```js
console.log("Welcome to Node.js!");
```

3. Run the file:
- One Time manual
```bash
node app.js
```

- Auto
```bash
nodemon app.js
```

<br>

---

<br>

## 2. Node.js Fundamentals

### 2.1 Global Objects

Node.js provides several global objects that are accessible from anywhere:

* `__dirname`: Directory name of the current module
* `__filename`: File name of the current module
* `exports`: Shortcut to `module.exports`
* `module`: Represents the current module
* `require()`: Imports modules
* `process`: Provides information and control over the current Node.js process

```js
console.log(__dirname);   // prints the directory path
console.log(__filename);  // prints the file path
```

### 2.2 Modules in Node.js

Modules are building blocks of Node.js applications.

#### 2.2.1 CommonJS Modules

* Node.js uses CommonJS module system by default.
* Each file is treated as a separate module.

**Exporting:**

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

**Importing:**

```js
// app.js
const add = require('./math');
console.log(add(5, 3)); // 8
```

#### 2.2.2 ES Modules (ESM)

* Modern JavaScript module system.
* Use `.mjs` extension or set `"type": "module"` in `package.json`

```js
// math.mjs
export function add(a, b) {
  return a + b;
}
```

```js
// app.mjs
import { add } from './math.mjs';
console.log(add(2, 4));
```

### 2.3 Built-in vs Custom Modules

* **Built-in**: Provided by Node.js (e.g., `fs`, `http`, `path`)
* **Custom**: Your own modules (like `math.js`)

### 2.4 The `require()` Function

* Loads modules, JSON, or Node.js core libraries.
* Caches modules after first load.

```js
const fs = require('fs');
const data = require('./data.json');
```

### 2.5 `process` Object

* Provides runtime info and control.

```js
console.log(process.env);       // Environment variables
console.log(process.argv);      // Command line arguments
process.exit(0);                // Exit program
```

 [CommonJS vs ECMAScript](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/NodeJS/Notes/01_NodeJS.md#18-commonjs-vs-ecmascript-modules)

<br>

---

<br>


## 3. Core Modules in Node.js
Node.js comes with a set of built-in modules to perform essential functions without external packages.
[My Module Notes](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/tree/main/NodeJS/Notes/Modules)

<br>

### 3.1 File System Module (`fs`)

Used to interact with the file system.

#### Common Methods:

```js
const fs = require('fs');

// Read a file (async)
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write to a file (overwrites or creates file)
fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written successfully.');
});

// Append to a file
fs.appendFile('log.txt', 'New entry\n', (err) => {
  if (err) throw err;
});
```

<br>

### 3.2 Path Module (`path`)

Helps work with file and directory paths.

#### Common Methods:

```js
const path = require('path');

console.log(path.basename(__filename)); // app.js
console.log(path.dirname(__filename));  // /user/home
console.log(path.extname(__filename));  // .js
console.log(path.join(__dirname, 'folder', 'file.txt'));
```



<br>


### 3.3 Operating System Module (`os`)

Provides information about the operating system.

```js
const os = require('os');

console.log(os.platform());   // 'win32', 'linux', 'darwin'
console.log(os.cpus());       // CPU core info
console.log(os.totalmem());   // Total memory
console.log(os.freemem());    // Free memory
console.log(os.hostname());
```


<br>


### 3.4 Events Module (`events`)

Used to handle events in an event-driven manner.

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener
emitter.on('greet', () => {
  console.log('Hello from event!');
});

// Emit the event
emitter.emit('greet');
```


<br>



### 3.5 HTTP Module (`http`)

Enables building HTTP servers.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```


<br>



### 3.6 URL Module (`url`)

Used for URL resolution and parsing.

```js
const url = require('url');
const myUrl = new URL('https://example.com:8080/path?id=100');

console.log(myUrl.hostname); // example.com
console.log(myUrl.port);     // 8080
console.log(myUrl.pathname); // /path
console.log(myUrl.search);   // ?id=100
```


<br>

---

<br>


## 4. Asynchronous Programming in Node.js

[Javascript](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/tree/main/Javascript/06_Async%20and%20Await)

Node.js is designed around **asynchronous**, non-blocking I/O using an **event-driven** architecture.

---

### 4.1 Synchronous vs Asynchronous

**Synchronous (blocking):**

```js
const fs = require('fs');
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
console.log('Done');
```

**Asynchronous (non-blocking):**

```js
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Done');
```


<br>



### 4.2 Callbacks

Functions passed as arguments to be executed later.

```js
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

greet('Yash', () => {
  console.log('Callback called!');
});
```

**Problems with Callbacks:**

* Callback Hell (deep nesting)
* Hard to manage and debug


<br>



### 4.3 Promises

Object representing eventual completion/failure of async operation.

```js
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

<br>



### 4.4 Async/Await

Modern way to handle promises using `async` functions.

```js
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
```


<br>



### 4.5 Error Handling in Async Code

* Use try-catch with async/await.
* Use `.catch()` with promises.
* Always handle errors in callbacks.

```js
// Callback error handling
fs.readFile('nofile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});
```




<br>

---

<br>


## 5. Working with Files in Node.js

Node.js provides the `fs` (File System) module to work with the file system, allowing file read/write, directory operations, and more.


<br>



### 5.1 Reading Files

#### Asynchronous:

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### Synchronous:

```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

#### Promise-based:

```js
const fs = require('fs').promises;

async function readFile() {
  const data = await fs.readFile('example.txt', 'utf8');
  console.log(data);
}

readFile();
```


<br>



### 5.2 Writing Files

#### Asynchronous:

```js
fs.writeFile('output.txt', 'This is some text.', (err) => {
  if (err) throw err;
  console.log('File created or overwritten.');
});
```

#### Synchronous:

```js
fs.writeFileSync('output.txt', 'This is some text.');
```

---

### 5.3 Appending to Files

```js
fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) throw err;
  console.log('Data appended.');
});
```


<br>



### 5.4 Deleting Files

```js
fs.unlink('delete.txt', (err) => {
  if (err) throw err;
  console.log('File deleted.');
});
```


<br>



### 5.5 Working with Directories

#### Create Directory:

```js
fs.mkdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Folder created.');
});
```

#### Read Directory:

```js
fs.readdir('./', (err, files) => {
  if (err) throw err;
  console.log(files);
});
```

#### Delete Directory:

```js
fs.rmdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Folder removed.');
});
```


<br>



### 5.6 File Stats and Existence Check

```js
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats.isFile());
  console.log(stats.size);
});

// Check if file exists
fs.exists('example.txt', (exists) => {
  console.log(exists ? 'Exists' : 'Does not exist');
});
```

> Note: `fs.exists()` is deprecated. Use `fs.access()` in new code.

```js
fs.access('example.txt', fs.constants.F_OK, (err) => {
  console.log(err ? 'No access' : 'File exists');
});
```


<br>



### 5.7 Working with Streams

Use streams for efficient file handling with large data.

```js
const readStream = fs.createReadStream('largefile.txt', 'utf8');
readStream.on('data', (chunk) => {
  console.log('Chunk:', chunk);
});
```

```js
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Streaming some content\n');
writeStream.end();
```


<br>

---

<br>


## 6. Events and EventEmitter in Node.js

Node.js uses an **event-driven architecture**. The `events` module allows you to create and manage custom events using the `EventEmitter` class.


<br>



### 6.1 What is EventEmitter?

* A class in Node.js used to handle events.
* All objects that emit events are instances of `EventEmitter`.


<br>



### 6.2 Basic Usage of EventEmitter

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Registering an event
emitter.on('greet', () => {
  console.log('Hello! Event triggered.');
});

// Emitting the event
emitter.emit('greet');
```


<br>



### 6.3 Passing Arguments to Events

```js
emitter.on('message', (name, message) => {
  console.log(`${name}: ${message}`);
});

emitter.emit('message', 'Yash', 'Welcome to Node.js!');
```


<br>



### 6.4 Multiple Listeners for the Same Event

```js
emitter.on('multi', () => console.log('Listener 1 triggered'));
emitter.on('multi', () => console.log('Listener 2 triggered'));
emitter.emit('multi');
```


<br>



### 6.5 Removing Listeners

```js
function sayHi() {
  console.log('Hi!');
}

emitter.on('hello', sayHi);
emitter.removeListener('hello', sayHi);
```

<br>


### 6.6 Once vs on

* `on`: Registers the listener for **every time** the event is emitted.
* `once`: Registers a listener that runs **only once**.

```js
emitter.once('login', () => console.log('User logged in'));  
emitter.emit('login'); // Triggers
emitter.emit('login'); // Doesn't trigger
```


<br>



### 6.7 Practical Use Case

Simulating an event-based logger:

```js
const Logger = require('events');
class MyLogger extends Logger {
  log(msg) {
    this.emit('log', msg);
  }
}

const logger = new MyLogger();
logger.on('log', (msg) => console.log('Logged:', msg));
logger.log('This is a custom event');
```




<br>

---

<br>


## 7. HTTP Module & Web Server in Node.js

The `http` module in Node.js allows you to create a web server without any external packages. It enables communication between a client (browser/Postman) and a server.


<br>



### 7.1 Creating a Basic HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js server');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```


<br>



### 7.2 Handling Different Routes

```js
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Home Page');
  } else if (req.url === '/about') {
    res.write('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Page Not Found');
  }
  res.end();
});
```

 <br>

### 7.3 Serving HTML Content

```js
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<h1>Welcome</h1><p>This is an HTML page</p>');
res.end();
```

 <br>

### 7.4 Serving JSON Data

```js
res.writeHead(200, { 'Content-Type': 'application/json' });
const data = { name: 'Node', type: 'Backend' };
res.end(JSON.stringify(data));
```

 <br>

### 7.5 Sending Response Headers

```js
res.writeHead(200, {
  'Content-Type': 'text/plain',
  'X-Powered-By': 'Node.js'
});
res.write('Headers set');
res.end();
```

 <br>

### 7.6 Handling Query Parameters (Basic)

```js
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const name = parsedUrl.query.name;
  res.write(`Hello ${name || 'Guest'}`);
  res.end();
});
```

Visit: `http://localhost:3000/?name=Yash`

 <br>

### 7.7 Streaming Large Files with `fs.createReadStream`

```js
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('bigfile.txt');
  stream.pipe(res);
});
```




<br>

---

<br>

## 8. NPM (Node Package Manager)

NPM is the default package manager for Node.js. It helps manage project dependencies (packages/libraries).

 <br>

### 8.1 What is NPM?

* A tool that allows developers to install, share, and manage code packages.
* Comes bundled with Node.js.
* Access to thousands of libraries via [https://www.npmjs.com](https://www.npmjs.com)

 <br>

### 8.2 Checking NPM Version

```bash
npm -v
```

 <br>

### 8.3 Initializing a Node.js Project

Creates a `package.json` file.

```bash
npm init        # step-by-step
npm init -y     # auto generate with default values..skip manual customization
```

Example `package.json`:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {}
}
```

 <br>

### 8.4 Installing Packages

```bash
npm install <package-name>       # install and add to dependencies
npm i <package-name>             # shorthand
npm i <package> -D               # add to devDependencies
```

#### Example:

```bash
npm install express
```

 <br>

### 8.5 Using Installed Packages

```js
const express = require('express');
const app = express();
```

 <br>

### 8.6 package.json vs package-lock.json

* **package.json**: Lists all top-level dependencies.
* **package-lock.json**: Contains exact version tree of all installed packages (used for deterministic builds).

 <br>

### 8.7 Installing Global Packages

Global packages are installed system-wide.

```bash
npm install -g nodemon
nodemon app.js
```

 <br>

### 8.8 Updating and Removing Packages

```bash
npm update <package>
npm uninstall <package>
```

 <br>

### 8.9 Listing Installed Packages

```bash
npm list --depth=0
```

 <br>

### 8.10 Common Useful Packages

* `nodemon`: auto-restarts app on file changes
* `dotenv`: manage environment variables
* `express`: server framework
* `axios`: HTTP client
* `mongoose`: MongoDB ODM



<br>

---

<br>

## 9. Express.js Framework

### Course video 87+

Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications.

[Documentation](https://expressjs.com/)

<br>

### 9.1 Installing Express

```bash
npm install express
```

 <br>

### 9.2 Basic Express App

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

 <br>

### 9.3 Express Routing

```js
app.get('/', (req, res) => res.send('Home'));
app.post('/submit', (req, res) => res.send('Post received'));
app.put('/edit', (req, res) => res.send('Put request'));
app.delete('/delete', (req, res) => res.send('Deleted'));
```
---
> Use slugs `:slug`
---
```js
const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
//try make yash.txt in public and try  http://127.0.0.1:3000/yash.txt..

//app.get app.post app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Express')
})

app.get('/home', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})


app.get('/contact', (req, res) => {
    res.send('contact')
})

// app.get('/contact/pune', (req, res) => {
//     res.send('contact in pune')
// })

// app.get('/contact/mumbai', (req, res) => {
//     res.send('contact in pune')
// })

app.get('/contact/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug}`)
})

//:slug is just a keyword, sytax `:param`
app.get('/contact/:city1/:city2', (req, res) => {
    res.send(`Hello ${req.params.city1} and ${req.params.city2}`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

```

<br>


Route parameters:

```js
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

<br>

### 9.4 Serving Static Files
This allows you to users to access only use files placed in public folder, and not other files
```js
app.use(express.static('public'));
// public/index.html accessible at http://localhost:3000/index.html


//try make yash.txt in public and try  http://127.0.0.1:3000/yash.txt..

//try http://127.0.0.1:3000/package.json
//will not work because its not in public, you cant access it
```

 <br>

 till video 88

### Testing Requests and rendering HTML pages 
- Methods used GET POST PUT DELETE
- res.send
- res.sendFile
- path render `{root:__dirname}`

<br>

<div align = "center">
 <img src = "https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/065b2f3ff41b48a46c4e04194e4d0b0e91e9e36f/NodeJS/StoreRoom/Response%20Methods.png" width = 800>
</div>


<br>

project/main.js
```js
const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))


//test on http://localhost:3000/mypage.html
app.get('/', (req, res) => {
    console.log("Console GET")
    res.send('This Get request')
})

app.post('/', (req, res) => {
    console.log("Console POST")
    res.send('This is post request')
})

app.put('/', (req, res) => {
    console.log("Console PUT")
    res.send('This is Put request')
}).delete('/', (req, res) => {  //chaining of requests
    console.log("Console DELETE")
    res.send('This is Delete request')
})


// http://localhost:3000/index

//rendering an html page
// index or any name 
app.get('/index', (req, res) => {
    console.log("Console INDEX")
    // res.send('This is INDEX')
    res.sendFile('templates/index.html', {root:__dirname}) //specify root  or give abs path
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//res.send sends text and content inside
//to render actual page use res.sendFile (path)
```

#### Testing Manually {Just for Learn/ Industry uses POSTMAN}
project/public/mypage.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing Post Request</title>
</head>
<body>
    This is mytest
    <script>
        async function testPost(){
            // let a = await fetch("/", {method: "POST"})
            // let a = await fetch("/", {method: "PUT"})    
            let a = await fetch("/", {method: "DELETE"})
            let b = await a.text()
            console.log(b)
        }

        testPost()
    </script>
</body>
</html>

```

project/templates/index.html
```html
```

### 9.5 Express Router

Take template from here
[Doc](https://expressjs.com/en/guide/routing.html)

Organize routes into separate files.
eg project/routes/routeFileName1.js

<br>

### a. Make Organized routes seperately in `routes` or any custom directory

project/routes/routeBlogs.js
```js
const express = require('express')
const router = express.Router()


// define the home page route
router.get('/', (req, res) => {
    res.send('Yash Dada Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About Yash')
})

module.exports = router
```
project/routes/routeHome.js
```js
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send(' home page')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About Home another route')
})

module.exports = router

```


### b. Call in main
 project/main.js

```js
const express = require('express')

//1. Import Routes via path from routes folder
const routeBlogs = require('./routes/routeBlogs')  //links to routes
const routeHome = require('./routes/routeHome')

const app = express()
const port = 3000


//2 Call routes 
app.use('/routeBlogs', routeBlogs)
app.use('/routeHome', routeHome)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

```

### c. Check
```bash
http://localhost:3000/routeBlogs/
Yash Dada Blogs home page

http://localhost:3000/routeBlogs/about  
op: About Yash

http://localhost:3000/routeHome

```

 br>

 
### 9.6 Middleware in Express

Middleware functions are functions that have access to the request, response, and next function.

```js
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});
```

#### Built-in Middleware

* `express.json()` – Parses JSON body
* `express.urlencoded()` – Parses URL-encoded body

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

 <br>



### 9.7 Error Handling Middleware

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

 <br>



### 9.8 Common Express Packages

* `morgan`: HTTP request logger
* `cors`: Enable CORS
* `helmet`: Security headers
* `express-validator`: Validation

```bash
npm install morgan cors helmet express-validator
```



<br>

---

<br>

## 10. Templating Engines in Express.js

Templating engines allow dynamic rendering of HTML pages using variables and logic.

 <br>

### 10.1 What is a Templating Engine?

* It allows embedding data into HTML pages.
* Supports control structures like loops and conditionals.
* Used to render views (pages) dynamically in server-side web apps.

 <br>

### 10.2 Popular Templating Engines

| Engine     | Syntax Style | Notes                    |
| ---------- | ------------ | ------------------------ |
| EJS        | HTML + JS    | Most commonly used       |
| Pug        | Indentation  | Minimalist, no HTML tags |
| Handlebars | Mustache     | Logic-less templates     |

We'll use **EJS** for examples.

 <br>

### 10.3 Installing and Setting Up EJS

```bash
npm install ejs
```

```js
app.set('view engine', 'ejs');
app.set('views', './views');
```

Folder Structure:

```
project/
├── views/
│   └── index.ejs
├── app.js
```

 <br>

### 10.4 Creating a View (EJS File)

**views/index.ejs**

```html
<!DOCTYPE html>
<html>
<head><title><%= title %></title></head>
<body>
  <h1>Welcome, <%= name %>!</h1>
</body>
</html>
```

 <br>

### 10.5 Rendering the View in Express

```js
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', name: 'Yash' });
});
```

 <br>

### 10.6 EJS Syntax

* `<%= %>`: Output escaped HTML
* `<%- %>`: Output unescaped HTML
* `<% %>`: Run JS logic (if, for, etc.)

Example:

```html
<ul>
<% for(let i = 0; i < items.length; i++) { %>
  <li><%= items[i] %></li>
<% } %>
</ul>
```

 <br>

### 10.7 Layouts and Partials

Split your HTML into reusable components.

**views/partials/header.ejs**

```html
<header><h2>My Site</h2></header>
```

**views/index.ejs**

```html
<%- include('partials/header') %>
```

 <br>

### 10.8 When to Use a Templating Engine

* Rendering dynamic content in multi-page apps (MPAs)
* When SSR (server-side rendering) is needed
* Suitable for dashboard/admin panels



<br>

---

<br>


## 11. Environment Variables in Node.js

Environment variables allow you to store configuration data outside your source code.

 <br>

### 11.1 Why Use Environment Variables?

* Store sensitive information (e.g., API keys, DB URLs)
* Manage config per environment (dev, test, production)
* Avoid hardcoding credentials in source code

 <br>

### 11.2 Setting Environment Variables

#### Temporarily in terminal:

```bash
PORT=5000 node app.js   # Linux/macOS
set PORT=5000 && node app.js  # Windows
```

Access in code:

```js
console.log(process.env.PORT);
```

 <br>

### 11.3 Using `.env` File with dotenv Package

1. Install dotenv:

```bash
npm install dotenv
```

2. Create `.env` file in root directory:

```
PORT=3000
DB_URI=mongodb://localhost:27017/myapp
SECRET_KEY=mysecret
```

3. Load variables in your code:

```js
require('dotenv').config();

const port = process.env.PORT;
console.log('App running on port', port);
```

 <br>

### 11.4 Best Practices

* Never commit `.env` to version control
* Add `.env` to `.gitignore`:

```
.env
```

* Use environment-specific `.env` files (e.g., `.env.dev`, `.env.prod`)
* Validate required env variables during app start

 <br>

### 11.5 Example: Using `.env` with Express

```js
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```



<br>

---

<br>

## 12. Working with REST APIs in Express

REST (Representational State Transfer) is a popular architectural style for designing networked APIs.

 <br>

### 12.1 What is a REST API?

* API that follows REST principles using HTTP methods.
* Common HTTP methods:

  * `GET`: Retrieve data
  * `POST`: Create data
  * `PUT`: Update data
  * `DELETE`: Remove data

 <br>

### 12.2 Setting up Express for REST API

```js
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
```

 <br>

### 12.3 Define RESTful Routes

```js
// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// POST new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('User not found');
  const removed = users.splice(index, 1);
  res.json(removed[0]);
});
```

 <br>

### 12.4 Testing REST APIs

* Use **Postman**, **curl**, or **Thunder Client (VS Code)**

Example curl commands:

```bash
curl http://localhost:3000/users
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"Charlie\"}" http://localhost:3000/users
```

 <br>

### 12.5 REST API Best Practices

* Use plural nouns for endpoints (e.g., `/users`, `/products`)
* Use proper HTTP status codes (200, 201, 400, 404, 500)
* Validate incoming data
* Use middleware for logging, security, error handling



<br>

---

<br>


## 13. CRUD with MongoDB & Mongoose

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Mongoose is an ODM (Object Data Modeling) library that provides a schema-based solution to model application data.

 <br>

### 13.1 Setting Up MongoDB

#### Local MongoDB (Development)

* Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
* Run the server:

```bash
mongod
```

#### MongoDB Atlas (Cloud)

1. Create a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database
3. Whitelist your IP
4. Create a user and get the connection string:

```
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
```

 <br>

### 13.2 Installing & Connecting with Mongoose

```bash
npm install mongoose
```

#### Connect in Express App

```js
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));
```

 <br>

### 13.3 Define Schema and Model

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
```

 <br>

### 13.4 CRUD Operations (with async/await)

#### CREATE

```js
const user = new User({ name: 'Yash', email: 'yash@example.com', age: 21 });
await user.save();
```

#### READ

```js
await User.find();                        // all users
await User.findById(id);                  // by ID
await User.findOne({ email });            // by condition
await User.find().sort({ age: 1 });       // sorted
await User.find().limit(5);               // limited
```

#### UPDATE

```js
await User.findByIdAndUpdate(id, { name: 'New Name' }, { new: true });
```

#### DELETE

```js
await User.findByIdAndDelete(id);
```

 <br>

### 13.5 REST API Example with Express + Mongoose

```js
const express = require('express');
const router = express.Router();
const User = require('./models/User');

// CREATE
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// READ BY ID
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  res.json(result);
});

module.exports = router;
```

 <br>

### 13.6 Model Validation

Mongoose supports built-in validation:

```js
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  age: {
    type: Number,
    min: 18
  }
});
```

Use `try-catch` to capture validation errors.

 <br>

### 13.7 Query Helpers and Options

* `find()`, `findOne()`, `findById()`
* `select()`, `limit()`, `sort()`, `skip()`
* `lean()` for raw JSON result

```js
const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).lean();
```

 <br>

### 13.8 Project Folder Structure (Recommended)

```
project/
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env
├── server.js
```

 <br>

### 13.9 Best Practices

* Use `.env` for DB URI
* Separate logic into `models`, `routes`, and `controllers`
* Use middleware for errors and validation
* Always handle exceptions with `try-catch`
* Validate requests before saving
* Avoid exposing sensitive data (like password fields)



<br>

---

<br>


## 14. Middleware, Logging, and Error Handling

Middleware in Express are functions that execute during the request-response cycle. They're used for tasks like logging, authentication, parsing, validation, and error handling.

 <br>

### 14.1 What is Middleware?

* Middleware functions have access to `req`, `res`, and `next()`.
* Order matters: middleware runs in the order it's defined.

```js
app.use((req, res, next) => {
  console.log('Middleware triggered');
  next();
});
```

 <br>

### 14.2 Types of Middleware

* **Application-level**: `app.use()` or specific routes
* **Router-level**: `.use()` on Express routers
* **Built-in**: `express.json()`, `express.static()`
* **Third-party**: e.g. `morgan`, `helmet`, `cors`
* **Error-handling**: has 4 parameters `(err, req, res, next)`

 <br>

### 14.3 Built-in Middleware

```js
app.use(express.json());             // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public'));  // Serve static files
```

 <br>

### 14.4 Third-party Middleware

#### Logging with Morgan

```bash
npm install morgan
```

```js
const morgan = require('morgan');
app.use(morgan('dev'));             // logs requests to console
```

#### Enable CORS

```bash
npm install cors
```

```js
const cors = require('cors');
app.use(cors());
```

#### Security Headers with Helmet

```bash
npm install helmet
```

```js
const helmet = require('helmet');
app.use(helmet());
```

 <br>

### 14.5 Custom Middleware Example

```js
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
```

 <br>

### 14.6 Error Handling Middleware

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});
```

Use `next(error)` anywhere to trigger this middleware:

```js
app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong');
  error.status = 400;
  next(error);
});
```

 <br>

### 14.7 Best Practices

* Use separate files for custom middleware
* Always define error middleware at the end
* Use logging (like `morgan`) for debugging
* Validate inputs before reaching the route logic
* Catch all unhandled routes:

```js
app.use((req, res) => {
  res.status(404).send('Route Not Found');
});
```



<br>

---

<br>

## 15. Authentication with JWT (JSON Web Token)

JWT (JSON Web Token) is a secure way to transmit user identity between client and server. It’s commonly used for stateless authentication in web apps.

 <br>

### 15.1 What is JWT?

* Compact, URL-safe token format
* Contains encoded payload, header, and signature
* Used to verify identity and permissions

Structure:

```
HEADER.PAYLOAD.SIGNATURE
```

 <br>

### 15.2 Installing JWT Package

```bash
npm install jsonwebtoken
```

 <br>

### 15.3 Creating a JWT (on login or signup)

```js
const jwt = require('jsonwebtoken');
const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
```

### 15.4 Sending Token to Client

You can send token:

* In JSON response
* As a cookie (via `res.cookie()`)

```js
res.json({ token });
```

 <br>

### 15.5 Verifying JWT (on protected routes)

```js
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ error: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid Token' });
  }
}
```

Use it in routes:

```js
app.get('/dashboard', verifyToken, (req, res) => {
  res.send('Welcome, user');
});
```

 <br>

### 15.6 Example Login Flow with JWT

```js
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: 'Invalid email' });

  // Password check omitted for simplicity
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});
```

 <br>

### 15.7 Storing JWT on Client

* Local Storage (common in SPAs)
* HTTP-only Cookies (recommended for security)

 <br>

### 15.8 Best Practices

* Use `HTTP Only` and `Secure` flags with cookies
* Always keep `JWT_SECRET` in `.env`
* Use short expiration time (e.g., 1h)
* Revoke tokens using token blacklists or rotating tokens (advanced)



<br>

---

<br>

## 16. Uploading Files with Multer

Multer is a middleware for handling `multipart/form-data`, used for file uploads in Node.js/Express applications.

 <br>

### 16.1 Installing Multer

```bash
npm install multer
```

 <br>

### 16.2 Basic Setup

```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
```

This saves uploaded files to `uploads/` folder with a random filename.

 <br>

### 16.3 Handling Single File Upload

```js
app.post('/upload', upload.single('myFile'), (req, res) => {
  res.send(`File uploaded: ${req.file.originalname}`);
});
```

**HTML form to test:**

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="myFile">
  <button type="submit">Upload</button>
</form>
```

 <br>

### 16.4 Handling Multiple Files

```js
app.post('/uploads', upload.array('photos', 5), (req, res) => {
  res.send(`Uploaded ${req.files.length} files`);
});
```

 <br>

### 16.5 File Filtering

```js
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type'), false);
  }
};

const upload = multer({
  dest: 'uploads/',
  fileFilter
});
```

 <br>

### 16.6 Custom Storage Settings

Use `multer.diskStorage()` for advanced control:

```js
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });
```

 <br>

### 16.7 Error Handling for Multer

```js
app.post('/upload', (req, res, next) => {
  upload.single('myFile')(req, res, (err) => {
    if (err) return res.status(400).send(err.message);
    res.send('File uploaded');
  });
});
```

 <br>

### 16.8 Best Practices

* Set size limits with `limits: { fileSize: <bytes> }`
* Serve uploads securely (avoid direct public access if sensitive)
* Store paths in DB, not file content
* Use a CDN or cloud storage (e.g., AWS S3) for production



<br>

---

<br>



## 17. Deployment with Node.js

Deploying a Node.js app means making it accessible on the internet. This involves setting up hosting, environment variables, and process management.

 <br>

### 17.1 Prepare for Deployment

* Ensure `PORT` is set using `process.env.PORT`
* Use `.env` for sensitive configs
* Add a start script in `package.json`:

```json
"scripts": {
  "start": "node server.js"
}
```

 <br>

### 17.2 Common Hosting Platforms

| Platform                 | Type   | Notes                          |
| ------------------------ | ------ | ------------------------------ |
| Render                   | PaaS   | Simple, supports Node.js       |
| Railway                  | PaaS   | Auto-deploy from GitHub        |
| Vercel                   | Static | Good for frontend, not backend |
| Cyclic                   | PaaS   | Free tier for Node apps        |
| Heroku                   | PaaS   | Popular but with limitations   |
| VPS (e.g., DigitalOcean) | IaaS   | Full control via SSH           |

 <br>

### 17.3 Deployment to Render (Example)

1. Push code to GitHub
2. Go to [https://render.com](https://render.com)
3. Create a new Web Service
4. Connect GitHub and choose repo
5. Set environment variables
6. Render builds and deploys automatically

 <br>

### 17.4 Using Process Manager (for VPS)

Install [PM2](https://pm2.keymetrics.io/) to keep your app running:

```bash
npm install -g pm2
pm2 start server.js
pm2 restart server
pm2 logs
```

 <br>

### 17.5 Reverse Proxy with NGINX (Advanced)

On a VPS:

```nginx
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

 <br>

### 17.6 Best Practices

* Never expose `.env` file
* Use HTTPS for production
* Monitor uptime and logs
* Use services like Cloudflare for DNS & DDoS protection
* Deploy using CI/CD (e.g., GitHub Actions)



<br>

---

<br>

## 18. CommonJS vs ECMAScript Modules

Node.js supports two module systems: **CommonJS (CJS)** and **ECMAScript Modules (ESM)**.



### 18.1 CommonJS (CJS)

* Default module system in Node.js.
* Uses `require()` and `module.exports`.
* Synchronous loading.

#### `require()`
```js
const module = require(' module ')
```


```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// app.js
const math = require('./math');
console.log(math.add(2, 3));
```



### 18.2 ECMAScript Modules (ESM)

* Standardized JavaScript module format.
* Uses `import` and `export`.
* Asynchronous by design.

```js
// math.mjs
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
```

#### Using ESM in Node.js:

* Use `.mjs` file extension **OR**
* Add `"type": "module"` to `package.json`:

```json
{
  "type": "module"
}
```



### 18.3 Key Differences

| Feature         | CommonJS (CJS)                | ECMAScript Modules (ESM)            |
| --------------- | ----------------------------- | ----------------------------------- |
| Syntax          | `require()`, `module.exports` | `import`, `export`                  |
| File Extension  | `.js` (default)               | `.mjs` or `.js` with `type: module` |
| Loading Type    | Synchronous                   | Asynchronous                        |
| Browser Support |  Not native                  |  Native                            |
| Node.js Support |  Default                     |  With config                       |

---

### 18.4 Recommendation

* Use **CommonJS** for compatibility with existing Node.js ecosystem.
* Use **ESM** if you're writing modern JS, want consistency with frontend, or are using tools like TypeScript with `module: "esnext"`.




<br>

---

<br>


<br>

---

<br>
