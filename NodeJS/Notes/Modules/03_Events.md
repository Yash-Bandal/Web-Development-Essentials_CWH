# `Events` Module

The `events` module allows you to create and handle custom events in Node.js, following the event-driven architecture.

### Importing

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
```

<br>


### 1. Registering a Listener

```js
emitter.on('greet', () => {
  console.log('Hello from event!');
});
```

<br>


### 2. Emitting an Event

```js
emitter.emit('greet'); // triggers the 'greet' listener
```

You can emit events with arguments too:

```js
emitter.on('welcome', name => {
  console.log(`Welcome, ${name}!`);
});

emitter.emit('welcome', 'Yash');
```

<br>


### 3. Once Listener

```js
emitter.once('hello', () => {
  console.log('Runs only once');
});

emitter.emit('hello');
emitter.emit('hello'); // won't trigger again
```

<br>


### 4. Removing Listeners

```js
function sayHi() {
  console.log('Hi!');
}
emitter.on('greet', sayHi);
emitter.removeListener('greet', sayHi);
```

Or use:

```js
emitter.off('greet', sayHi);
```

<br>


### 5. Listing Listeners

```js
console.log(emitter.listenerCount('greet'));
console.log(emitter.listeners('greet'));
```

<br>


### 6. Common Use Case: Extending EventEmitter

```js
class Logger extends EventEmitter {
  log(message) {
    this.emit('messageLogged', { message });
  }
}

const logger = new Logger();
logger.on('messageLogged', (data) => {
  console.log('Logged:', data.message);
});
logger.log('Something happened');
```

<br>


### Summary Table

| Method                      | Description                  |
| --------------------------- | ---------------------------- |
| `on(event, fn)`             | Add a listener               |
| `emit(event, [args])`       | Trigger an event             |
| `once(event, fn)`           | Listen once                  |
| `removeListener(event, fn)` | Remove specific listener     |
| `off(event, fn)`            | Alias for `removeListener()` |
| `listenerCount(event)`      | Count listeners              |
| `listeners(event)`          | Get array of listeners       |


