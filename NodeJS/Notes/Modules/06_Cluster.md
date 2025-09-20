# 1. Cluster Module 

## 1.1 Purpose

This  is a structured guide covering the **Cluster module** in Node.js. Cluster allows you to take advantage of **multi-core systems** by creating worker processes to handle concurrent connections efficiently.

<br>

## 2. Overview

* Node.js runs on a **single-threaded event loop**, which can become a bottleneck on multi-core CPUs.
* The **Cluster module** allows you to **spawn multiple worker processes**, each running a separate instance of your Node.js server.
* Workers share the **same server port**.
* Each worker runs in its own **memory space**, so Node.js processes are isolated.

<br>

## 3. Core Concepts

### 3.1 Master and Worker
* **Master Process**
  * Manages and controls worker processes.
  * Distributes incoming connections to workers.
  * Handles events like worker exit and forks new workers if needed.
* **Worker Process**
  * Handles actual application logic and requests.
  * Runs a separate instance of your server.

<br>

### 3.2 Forking Workers

* Use `cluster.fork()` to create worker processes.
* Typical pattern:

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork(); // optional: replace dead worker
    });
} else {
    // Workers share the TCP connection
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Hello from worker ${process.pid}
`);
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
```

<br>

### 3.3 Key Properties & Methods

* `cluster.isMaster` → true if current process is master.
* `cluster.isWorker` → true if current process is worker.
* `cluster.fork([env])` → spawn a new worker, optional environment variables.
* `cluster.setupMaster([settings])` → configure how workers are forked.
* `cluster.workers` → object of all current workers keyed by id.
* `cluster.disconnect()` → gracefully disconnect all workers.

<br>

### 3.4 Events

| Event        | Description                                   |
| ------------ | --------------------------------------------- |
| `online`     | Worker is forked and running                  |
| `listening`  | Worker is listening on a server port          |
| `exit`       | Worker has died, receives code and signal     |
| `disconnect` | Worker has disconnected                       |
| `message`    | Communication from worker via `worker.send()` |

<br>

### 3.5 Worker Communication

* Workers and master can communicate using **message passing**.
* Example:

```javascript
if (cluster.isMaster) {
    const worker = cluster.fork();
    worker.on('message', msg => {
        console.log('Master received:', msg);
    });
    worker.send({ hello: 'world' });
} else {
    process.on('message', msg => {
        console.log('Worker received:', msg);
    });
    process.send({ foo: 'bar' });
}
```

<br>

### 3.6 Load Balancing

* Master distributes incoming requests **round-robin** by default (on Node >= 0.12).
* For Linux/Unix systems, **shared port** is handled by the OS.
* On Windows, master does **in-process load balancing**.

<br>

### 3.7 Graceful Restart

* Steps:
  1. Disconnect old worker: `worker.disconnect()`
  2. Wait for ongoing requests to finish
  3. Fork a new worker to replace it
* Avoids downtime during server updates.

<br>

### 3.8 Best Practices

1. Always fork workers equal to `os.cpus().length` for optimal CPU usage.
2. Handle `exit` event to automatically replace dead workers.
3. Avoid sharing state between workers; use external stores like Redis if needed.
4. Monitor worker health using events and logging.
5. Use **PM2** or other process managers in production for cluster management.

<br>

### 3.9 Common Use Cases

* High-load web servers.
* CPU-intensive tasks in separate processes.
* Microservices requiring horizontal scaling on a single machine.

<br>

### 3.10 Limitations

* Workers don’t share memory; in-process caching is not shared.
* Debugging multiple processes is harder.
* IPC overhead if workers communicate extensively.

<br>

### 3.11 Tools / Modules to Combine

* `os` → to detect CPU cores (`os.cpus().length`)
* `PM2` → advanced cluster manager with monitoring, zero-downtime reloads
* `Redis` or `Memcached` → shared cache across workers
* `nginx` → external load balancer if running across multiple servers

<br>

### 3.12 Mini Checklist

* [ ] Identify number of CPUs
* [ ] Fork a worker for each CPU
* [ ] Handle `exit` to respawn workers
* [ ] Use `worker.send()` / `process.on('message')` for IPC
* [ ] Test server under load to verify cluster handling

<br>

# [Nginx](https://github.com/Yash-Bandal/Nginx-Essentials/tree/main)
