## View Page
[LivePool Playground](https://liveweave.com/)

<br>

---

<br>

# Events

1. [Introduction to Events](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/edit/main/Javascript/04_DOM/02_Events/View.md#1-introduction-to-events)
2. [Event Handlers
3. [Event Object  
4. [Mouse Events  
5. [Keyboard Events  
6. [Form Events  
7. [Event Delegation  
8. [Event Bubbling and Capturing  
9. [One-time Events  
10. [Passive Events  
11. [Custom Events  

## 1. Introduction to Events

### 1.1 What are Events?

* Events are interactions or occurrences that happen in the browser and can be responded to using JavaScript.
* Examples: clicking a button, submitting a form, hovering over an element, pressing a key.

### 1.2 Common Event Types

* **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseenter`, `mouseleave`, `mousemove`
* **Keyboard Events**: `keydown`, `keypress`, `keyup`
* **Form Events**: `submit`, `input`, `change`, `focus`, `blur`
* **Window Events**: `load`, `resize`, `scroll`, `unload`

### 1.3 Why Use Events?

* Events make web pages interactive.
* They allow developers to respond to user actions and browser events, enhancing user experience.

### 1.4 Basic Example

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

* This uses an **inline event handler** that runs JavaScript when the button is clicked.

<br>

---

<br>

## 2. Event Handlers

### 2.1 Inline Event Handlers

* Written directly in HTML using the event attribute.

```html
<button onclick="myFunction()">Click</button>
```

### 2.2 DOM Event Handlers (Property-based)

* Assigned in JavaScript using an element's event property.

```javascript
const btn = document.getElementById("myBtn");
btn.onclick = function() {
  alert("Clicked!");
};
```

### 2.3 addEventListener Method (Recommended)

* Allows multiple event listeners on the same element.
* Syntax:

```javascript
element.addEventListener("event", functionName);
```

* Example:

```javascript
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function () {
  alert("Clicked using addEventListener!");
});
```

### 2.4 Removing Event Listeners

* You must use a named function to remove it.

```javascript
function greet() {
  alert("Hello");
}
btn.addEventListener("click", greet);
btn.removeEventListener("click", greet);
```



<br>

---

<br>

## 3. Event Object

### 3.1 What is the Event Object?

* When an event occurs, the browser creates an `Event` object and passes it to the event handler.
* This object contains details about the event and the element that triggered it.

### 3.2 Accessing the Event Object

* It is passed as a parameter to the event handler function.

```javascript
const btn = document.getElementById("myBtn");
btn.addEventListener("click", function(event) {
  console.log(event); // logs the entire event object
});
```

### 3.3 Common Properties and Methods

* `event.type` — Type of the event (e.g., "click")
* `event.target` — The actual element that triggered the event
* `event.currentTarget` — The element the event listener is attached to
* `event.preventDefault()` — Prevents default action (e.g., form submission)
* `event.stopPropagation()` — Stops the event from bubbling up the DOM

### 3.4 Example with preventDefault()

```html
<form id="myForm">
  <input type="text">
  <button type="submit">Submit</button>
</form>

<script>
const form = document.getElementById("myForm");
form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevents page reload
  alert("Form submission stopped!");
});
</script>
```




<br>

---

<br>

## 4. Mouse Events

### 4.1 Overview

* Mouse events are triggered by user interactions using a mouse or touchpad.

### 4.2 Common Mouse Events

* `click`: When the mouse button is clicked.
* `dblclick`: When the mouse button is double-clicked.
* `mousedown`: When the mouse button is pressed down.
* `mouseup`: When the mouse button is released.
* `mouseenter`: When the mouse pointer enters an element.
* `mouseleave`: When the mouse pointer leaves an element.
* `mousemove`: When the mouse pointer is moved within an element.

### 4.3 Example: Click and Double Click

```html
<button id="clickBtn">Click Me</button>
<button id="dblClickBtn">Double Click Me</button>

<script>
document.getElementById("clickBtn").addEventListener("click", function() {
  alert("Button clicked!");
});

document.getElementById("dblClickBtn").addEventListener("dblclick", function() {
  alert("Button double-clicked!");
});
</script>
```

### 4.4 Example: Mouse Enter and Leave

```html
<div id="hoverBox" style="width:100px;height:100px;background:red;"></div>

<script>
const box = document.getElementById("hoverBox");

box.addEventListener("mouseenter", function() {
  box.style.background = "green";
});

box.addEventListener("mouseleave", function() {
  box.style.background = "red";
});
</script>
```




<br>

---

<br>


## 5. Keyboard Events

### 5.1 Overview

* Keyboard events occur when the user interacts with the keyboard.

### 5.2 Types of Keyboard Events

* `keydown`: Fires when a key is pressed down.
* `keypress`: (deprecated) Fires when a key is pressed down and generates a character (use `keydown` instead).
* `keyup`: Fires when a key is released.

### 5.3 Properties of Keyboard Event

* `event.key`: Returns the value of the key pressed (e.g., "a", "Enter").
* `event.code`: Returns the physical key on the keyboard (e.g., "KeyA", "Enter").
* `event.altKey`, `event.ctrlKey`, `event.shiftKey`: Booleans for modifier keys.

### 5.4 Example: Detecting Key Presses

```html
<input type="text" id="inputBox" placeholder="Type something...">

<script>
document.getElementById("inputBox").addEventListener("keydown", function(e) {
  console.log("Key: " + e.key);
  console.log("Code: " + e.code);
});
</script>
```

### 5.5 Example: Enter Key Detection

```html
<input type="text" id="nameField" placeholder="Press Enter">

<script>
document.getElementById("nameField").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    alert("Enter key was pressed!");
  }
});
</script>
```





<br>

---

<br>

## 6. Form Events

### 6.1 Overview

* Form events are triggered by user interaction with form elements like inputs, checkboxes, selects, and the form itself.

### 6.2 Common Form Events

* `submit`: When a form is submitted.
* `change`: When the value of an input, select, or textarea changes (after focus is lost).
* `input`: Fires immediately when the value of an input element changes.
* `focus`: When an element gains focus.
* `blur`: When an element loses focus.

### 6.3 Example: Form Submit

```html
<form id="loginForm">
  <input type="text" name="username" required>
  <button type="submit">Login</button>
</form>

<script>
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form submitted!");
});
</script>
```

### 6.4 Example: Input and Change Events

```html
<input type="text" id="textInput">
<select id="selectBox">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>

<script>
const input = document.getElementById("textInput");
const select = document.getElementById("selectBox");

input.addEventListener("input", function() {
  console.log("Input: " + input.value);
});

select.addEventListener("change", function() {
  console.log("Selected: " + select.value);
});
</script>
```

### 6.5 Example: Focus and Blur

```html
<input type="text" id="focusInput" placeholder="Focus me">

<script>
const field = document.getElementById("focusInput");

field.addEventListener("focus", function() {
  console.log("Input focused");
});

field.addEventListener("blur", function() {
  console.log("Input blurred");
});
</script>
```

<br>

---

<br>

## 7. Event Delegation

### 7.1 What is Event Delegation?

* Event delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements.
* It works due to **event bubbling**, where events propagate from the target element up to its ancestors.

### 7.2 Why Use Event Delegation?

* Efficient: Fewer event listeners.
* Useful when elements are dynamically added.
* Cleaner code and better performance.

### 7.3 Example: Delegating Click Events

```html
<ul id="fruit-list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<script>
const list = document.getElementById("fruit-list");

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert("You clicked: " + e.target.textContent);
  }
});
</script>
```

* This works even if new `<li>` elements are added later.

### 7.4 Important Notes

* Always check `e.target` to ensure the event came from the intended child.
* You can use `e.stopPropagation()` to prevent further bubbling if needed.


<br>

---

<br>

## 8. Event Bubbling and Capturing

### 8.1 What is Event Bubbling?

* Event bubbling is the default behavior where events propagate from the **target element up** through its ancestors.

### 8.2 What is Event Capturing?

* Event capturing is the opposite phase where events propagate from the **root down** to the target.

### 8.3 Event Propagation Phases

1. **Capturing Phase**: Event travels from root to target.
2. **Target Phase**: Event reaches the target element.
3. **Bubbling Phase**: Event bubbles back up to root.

### 8.4 Using Capturing in addEventListener

* Pass `true` as the third argument to use the capturing phase.

```javascript
document.getElementById("parent").addEventListener("click", function () {
  alert("Parent clicked during capture");
}, true);
```

### 8.5 stopPropagation()

* Prevents the event from further bubbling or capturing.

```javascript
document.getElementById("child").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Child clicked, no bubble");
});
```

### 8.6 Example with Bubbling and Capturing

```html
<div id="outer">
  <div id="inner">Click Me</div>
</div>

<script>
document.getElementById("outer").addEventListener("click", function () {
  alert("Outer DIV (bubble)");
});

document.getElementById("inner").addEventListener("click", function () {
  alert("Inner DIV");
});
</script>
```

* Clicking `#inner` triggers both alerts due to bubbling.




<br>

---

<br>

## 9. One-time Events

### 9.1 What are One-time Events?

* One-time events are event listeners that run **only once** and then automatically remove themselves.

### 9.2 Why Use One-time Events?

* Useful when you want an action to occur only the **first time** an event is triggered.
* Avoids the need to manually remove event listeners.

### 9.3 Syntax Using `{ once: true }`

```javascript
const btn = document.getElementById("oneClickBtn");

btn.addEventListener("click", function () {
  alert("You can click me only once!");
}, { once: true });
```

* The listener runs only the first time the button is clicked.

### 9.4 Manual Alternative (Without once option)

```javascript
function handleClick() {
  alert("This will remove itself.");
  btn.removeEventListener("click", handleClick);
}

btn.addEventListener("click", handleClick);
```
<br>

---

<br>

## 10. Passive Events

### 10.1 What are Passive Events?

* Passive events are a type of event listener that **does not call** `preventDefault()`.
* They are used to improve **scrolling performance**, especially on touch and wheel events.

### 10.2 Why Use Passive Events?

* Preventing `preventDefault()` allows the browser to optimize performance.
* Recommended for `touchstart`, `touchmove`, `wheel`, and `scroll` events.

### 10.3 Syntax

```javascript
window.addEventListener("scroll", function (e) {
  console.log("Scrolling...");
}, { passive: true });
```

### 10.4 Example: Using Passive vs Non-Passive

```javascript
// Non-passive (default)
window.addEventListener("touchmove", function (e) {
  e.preventDefault();
}, { passive: false });

// Passive
window.addEventListener("touchmove", function (e) {
  console.log("Touch move detected");
}, { passive: true });
```

### 10.5 Warning

* If you try to use `preventDefault()` inside a passive event listener, it will cause a warning in the console and won't work.



<br>

---

<br>


## 11. Custom Events

### 11.1 What are Custom Events?

* Custom events are user-defined events that can be created and dispatched using JavaScript.
* Useful for communication between components or when building complex interfaces.

### 11.2 Creating a Custom Event

```javascript
const myEvent = new CustomEvent("greet", {
  detail: {
    name: "Yash"
  }
});
```

* The `detail` property carries custom data with the event.

### 11.3 Dispatching a Custom Event

```javascript
const btn = document.getElementById("myBtn");
btn.dispatchEvent(myEvent);
```

### 11.4 Listening for a Custom Event

```javascript
btn.addEventListener("greet", function (e) {
  alert("Hello, " + e.detail.name);
});
```

### 11.5 Full Example

```html
<button id="myBtn">Greet</button>

<script>
const btn = document.getElementById("myBtn");

btn.addEventListener("greet", function (e) {
  alert("Hello, " + e.detail.name);
});

const myEvent = new CustomEvent("greet", {
  detail: {
    name: "Yash"
  }
});

btn.addEventListener("click", function () {
  btn.dispatchEvent(myEvent);
});
</script>
```




<br>

---

<br>
