# `http` Module

The `http` module in Node.js allows you to create web servers and handle HTTP requests and responses.

### Importing

```js
const http = require('http');
```

<br>

### 1. Creating a Basic HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

<br>


### 2. Handling Routes

```js
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Home Page');
  } else if (req.url === '/about') {
    res.write('About Page');
  } else {
    res.write('404 Not Found');
  }
  res.end();
});
```

<br>


### 3. Handling HTTP Methods

```js
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.write('GET request received');
  } else if (req.method === 'POST') {
    res.write('POST request received');
  }
  res.end();
});
```

<br>


### 4. Sending JSON Response

```js
const server = http.createServer((req, res) => {
  const data = { message: 'Hello JSON' };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});
```

<br>


### 5. Working with Request Body (POST Data)

```js
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      console.log('Body:', body);
      res.end('Data received');
    });
  }
});
```

<br>


### Conclusion

| Feature         | Method/Pattern                    | Description              |
| --------------- | --------------------------------- | ------------------------ |
| Create Server   | `http.createServer()`             | Create HTTP server       |
| Start Listening | `server.listen(port, cb)`         | Start server             |
| HTTP Method     | `req.method`                      | Get method like GET/POST |
| URL             | `req.url`                         | Requested path           |
| Read Body       | `req.on('data')`, `req.on('end')` | Handle POST data         |
| Write Headers   | `res.writeHead(status, headers)`  | Set status and headers   |
| End Response    | `res.end()`                       | Send response            |


