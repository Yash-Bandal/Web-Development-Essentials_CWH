# Files : `fs` and `path`

Node.js provides built-in modules to work with files and directories. The most important ones are:

* `fs` (File System): to read/write files, create/delete directories and manage file operations.
* `path`: to handle and transform file and directory paths in a cross-platform way.

---

### 1. fs Module (File System)

#### Importing fs

```js
const fs = require('fs');
```

#### 1.1 Reading Files

* **Synchronously:**: loading and running in sequence
    - readFileSync is synchronous
```js
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

* **Asynchronously:**: Running the one who executes first
    - readFile is asynchronous
```js
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

<br>

#### 1.2 Writing Files

* **Synchronously:**

```js
fs.writeFileSync('output.txt', 'Hello, world!');
```

* **Asynchronously:**

```js
fs.writeFile('output.txt', 'Hello async!', err => {
  if (err) throw err;
  console.log('File written successfully');
});
```

<br>

#### 1.3 Appending Data to Files

* **Synchronously:**

```js
fs.appendFileSync('log.txt', 'New log entry\n');
```

* **Asynchronously:**

```js
fs.appendFile('log.txt', 'Async log entry\n', err => {
  if (err) throw err;
});
```

<br>

#### 1.4 Deleting Files

```js
fs.unlinkSync('output.txt');
```

```js
fs.unlink('output.txt', err => {
  if (err) throw err;
});
```

<br>

#### 1.5 Creating Directories

```js
fs.mkdirSync('newfolder');
```

```js
fs.mkdir('newfolder', err => {
  if (err) throw err;
});
```

<br>

#### 1.6 Removing Directories

```js
fs.rmdirSync('newfolder');
```

```js
fs.rmdir('newfolder', err => {
  if (err) throw err;
});
```

<br>

#### 1.7 Reading Directory Contents

```js
const files = fs.readdirSync('.');
console.log(files);
```

```js
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files);
});
```

<br>

#### 1.8 File Stats

```js
const stats = fs.statSync('example.txt');
console.log(stats.isFile());  // true
console.log(stats.size);      // file size in bytes
```

Eg:
```js
// const data = new Uint8Array(Buffer.from('Hello Node.js')); 
const data = "Yash dada" //useto_string() to read

fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    fs.readFile('message.txt', (err, data) => {
        if (err) throw err;
        console.log(data); //buffer         //< Buffer 59 61 73 68 20 64 61 64 61 >
        console.log("Buffer " + data);      //Buffer Yash dada
        console.log(data.toString());       //Yash dada

      });
})


//Problem - callback helll..so use promises
```
```js
import fs from "fs/promises"

let a = await fs.readFile("message.txt")

let b = await fs.appendFile("message.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)
```

<br>

### Using fs/promises (Async/Await)

**Reading a File:**

```js
async function readFile() {
  try {
    const data = await fsp.readFile('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();
```

**Writing a File:**

```js
async function writeFile() {
  try {
    await fsp.writeFile('newfile.txt', 'Promise-based write');
    console.log('File written');
  } catch (err) {
    console.error(err);
  }
}
writeFile();
```

**Checking File/Directory Stats:**

```js
async function checkStats() {
  const stats = await fsp.stat('example.txt');
  console.log(stats.isFile(), stats.size);
}
checkStats();
```





<br>

---

<br>

### 2. path Module

#### Importing path

```js
const path = require('path');
```

#### 2.1 Useful Methods

| Method                  | Description                            |
| ----------------------- | -------------------------------------- |
| `path.basename(p)`      | Returns the last portion (filename)    |
| `path.dirname(p)`       | Returns the directory part of the path |
| `path.extname(p)`       | Returns the extension of the file      |
| `path.join(...args)`    | Joins path segments safely             |
| `path.resolve(...args)` | Returns absolute path                  |
| `path.isAbsolute(p)`    | Checks if path is absolute             |

<br>


#### 2.2 Examples

```js
const filePath = '/home/user/docs/file.txt';

console.log(path.basename(filePath));  // file.txt
console.log(path.dirname(filePath));   // /home/user/docs
console.log(path.extname(filePath));   // .txt

console.log(path.join('folder', 'file.txt'));     // folder/file.txt
console.log(path.resolve('folder', 'file.txt'));  // Absolute path
console.log(path.isAbsolute('/home'));            // true
```
<br>

#### 2.3 path.sep and path.delimiter

* `path.sep` → platform-specific separator (`/` or `\\`)
* `path.delimiter` → environment delimiter (`:` or `;`)

```js
console.log(path.sep);       // '/' (POSIX), '\' (Windows)
console.log(path.delimiter); // ':' (POSIX), ';' (Windows)
```



These two modules — `fs` and `path` — are foundational when handling file operations and paths in Node.js. They're synchronous and asynchronous capable and widely used in CLI tools, web servers, and backend file processing scripts.

Would you like to move on to `os`, `events`, or another built-in module?
