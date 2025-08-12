# Files : `fs` and `path`

Node.js provides built-in modules to work with files and directories. The most important ones are:

* `fs` (File System): to read/write files, create/delete directories and manage file operations.
* `path`: to handle and transform file and directory paths in a cross-platform way.

<br>

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

<br>
<br>


## Example - Clear the clutter - video 91 cwh

<pre>
PS : You have to write a Node.js program to clear clutter inside of a directory and organize 
     the contents of that directory into different folders

for example, these files become:

1. name.jpg
2. name.png
3. this.pdf 
4. Yash.zip
5. Rohan.zip
6. cat.jpg 
7. Yash.pdf


to this
    
```
target /
    jpg /
    name.jpg
    cat.jpg
png /
    name.png
pdf /
    this.pdf
    Yash.pdf
zip /
    Yash.zip
Rohan.zip
```
</pre>

<br>


```js
const fs = require('fs');
const path = require('path');

console.log(__dirname)
//e:\CWH\Sigma-Web-Dev-Course\Video 91

// Set the target folder path
//e:\CWH\Sigma-Web-Dev-Course\Video 91 + /Unorganized

const targetFolder = path.join(__dirname, 'Unorganized');

//e:\CWH\Sigma-Web-Dev-Course\Video 91\Unorganized

// Read all items in the target folder above
fs.readdir(targetFolder, (err, files) => {
    if (err) return console.error('Error reading folder:', err);

    //iterate through files
    files.forEach((file) => {
        const filePath = path.join(targetFolder, file);
        //eg - e:\CWH\Sigma-Web-Dev-Course\Video 91\Unorganized\ZIP1.zip
        //eg - e:\CWH\Sigma-Web-Dev-Course\Video 91\Unorganized\JPG1.jpg
        //eg - e:\CWH\Sigma-Web-Dev-Course\Video 91\Unorganized\PDF1.pdf


        // Check if it's a file (not a directory)
        fs.stat(filePath, (err, stats) => {
            if (err) return console.error('Error checking file:', err);
            if (!stats.isFile()) return;

            const ext = path.extname(file).slice(1); // Get extension without '.'
            //zip pdf png jpg

            // Make folder if not exists
            const folderPath = path.join(targetFolder, ext);
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            // Move file to new folder
            const destPath = path.join(folderPath, file);

            //renames the created file with ext type eg folder name = js / PNG..
            fs.rename(filePath, destPath, (err) => {  
                if (err) return console.error('Error moving file:', err);
                console.log(`Moved ${file} → ${ext}/`);
            });
        });
    });
});

/*
Moved Name.PNG → PNG/
Moved One.jpg → jpg/
Moved PDF1.pdf → pdf/
Moved Parrot.PNG → PNG/
Moved Two.jpg → jpg/
Moved ZIP1.zip → zip/
Moved ZIP2.zip → zip/
*/

```



```js
const basepath = "e:\\CWH\\Sigma-Web-Dev-Course\\Video 93\\Unorganized"

let files = await fs.readdir(basepath)
console.log(files)
/*
[
  'Name.PNG',
  'One.jpg',
  'Parrot.PNG',
  'PDF1.pdf',
  'Two.jpg',
  'ZIP1.zip',
  'ZIP2.zip'
]
*/

for (const file of files) {
    let ext = file.split(".")[file.split(".").length - 1]
    console.log(ext)
}
/*
PNG
jpg
PNG
pdf
jpg
zip
zip
*/

```


These two modules — `fs` and `path` — are foundational when handling file operations and paths in Node.js. They're synchronous and asynchronous capable and widely used in CLI tools, web servers, and backend file processing scripts.

Would you like to move on to `os`, `events`, or another built-in module?
