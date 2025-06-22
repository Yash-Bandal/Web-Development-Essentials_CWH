# JavaScript DOM (Document Object Model) - Complete Notes

## 1. What is the DOM?

* **DOM** stands for **Document Object Model**.
* It is a programming interface provided by the browser to interact with HTML and XML documents.
* When a web page is loaded, the browser creates a **DOM** of the page.

The DOM represents the document as a **tree structure** where each node is an object representing a part of the page.

## 2. DOM Tree Structure

```
Document
│
├── html
│   ├── head
│   └── body
│       ├── h1
│       └── p
```

* Each element, attribute, and piece of text becomes a node.

## 3. Accessing the DOM

JavaScript can access and manipulate DOM using the `document` object.

### Common Selectors:

* `document.getElementById("id")`
* `document.getElementsByClassName("class")`
* `document.getElementsByTagName("tag")`
* `document.querySelector("selector")`
* `document.querySelectorAll("selector")`

## 4. Selecting Elements

### By ID

```js
document.getElementById("main-heading")
```

### By Class

```js
document.getElementsByClassName("highlight")
```

### By Tag Name

```js
document.getElementsByTagName("div")
```

### Using querySelector (returns first match)

```js
document.querySelector(".highlight")
```

### Using querySelectorAll (returns NodeList)

```js
document.querySelectorAll(".highlight")
```

## 5. DOM Manipulation

### Changing Content

```js
document.getElementById("title").textContent = "New Title";
document.getElementById("title").innerHTML = "<em>New Title</em>";
```

### Changing Attributes

```js
document.getElementById("image").src = "new-image.jpg";
```

### Changing Styles

```js
document.getElementById("box").style.backgroundColor = "blue";
```

### Adding Classes

```js
document.getElementById("box").classList.add("visible");
document.getElementById("box").classList.remove("hidden");
```

## 6. Creating and Removing Elements

### Create Element

```js
let newDiv = document.createElement("div");
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);
```

### Remove Element

```js
let element = document.getElementById("old");
element.remove();
```

### Insert Before

```js
let parent = document.getElementById("container");
let newNode = document.createElement("p");
newNode.textContent = "Inserted Paragraph";
parent.insertBefore(newNode, parent.firstChild);
```

### Commonly Used DOM Insertion Methods

| Method                    | Description                                              |
| ------------------------- | -------------------------------------------------------- |
| `appendChild(node)`       | Appends a node as the last child of a parent             |
| `insertBefore(node, ref)` | Inserts a node before the reference node                 |
| `append(node or text)`    | Appends multiple nodes or text (can mix strings + nodes) |
| `prepend(node or text)`   | Inserts node/text as the first child                     |
| `replaceChild(new, old)`  | Replaces a child node with another                       |
| `removeChild(child)`      | Removes a specified child node from the parent           |

### Example: `append`, `prepend`

```js
let ul = document.getElementById("list");
let li = document.createElement("li");
li.textContent = "Item";

ul.append(li);        // Add at end
ul.prepend(li);       // Add at start
```

### Example: `replaceChild`

```js
let newHeading = document.createElement("h2");
newHeading.textContent = "Updated Heading";

let oldHeading = document.getElementById("main-heading");
oldHeading.parentNode.replaceChild(newHeading, oldHeading);
```

### Example: `removeChild`

```js
let parent = document.getElementById("menu");
let item = document.getElementById("old-item");
parent.removeChild(item);
```

## 7. Event Handling

### Adding Event Listener

```js
document.getElementById("btn").addEventListener("click", function() {
  alert("Button Clicked");
});
```

### Event Types

* `click`
* `mouseover`, `mouseout`
* `keydown`, `keyup`
* `submit`
* `change`, `input`

### Removing Event Listener

```js
function handler() {
  alert("Hi");
}
let btn = document.getElementById("btn");
btn.addEventListener("click", handler);
btn.removeEventListener("click", handler);
```

## 8. Traversing the DOM

### Parent Node

```js
element.parentNode
```

### Child Nodes

```js
element.childNodes      // includes text nodes

// Better:
element.children         // element children only
```

### First and Last Child

```js
element.firstChild
element.lastChild
```

### Sibling Nodes

```js
element.nextSibling
element.previousSibling
```

## 9. DOM Properties

| Property      | Description                     |
| ------------- | ------------------------------- |
| `innerHTML`   | HTML content inside element     |
| `textContent` | Text content                    |
| `className`   | Class name(s) of the element    |
| `id`          | ID of the element               |
| `value`       | Value for input, textarea, etc. |
| `src`, `href` | Source or link of an element    |

## 10. DOM and Forms

Accessing form values:

```js
let username = document.forms["loginForm"]["username"].value;
```

Or using `getElementById`:

```js
let password = document.getElementById("password").value;
```


