# 📌 Chapter 3: jQuery Events

## 🚀 Introduction
Events in jQuery allow us to execute code in response to user interactions such as clicking, hovering, or typing.
jQuery simplifies event handling, making it easy to add interactivity to web applications.
The term "fires/fired" is often used with events. Example: "The keypress event is fired, the moment you press a key".

---

## 📖 Topics Covered

### 🔹 1. Handling Events in jQuery
jQuery provides event methods to respond to user interactions.
- **Common event methods:**
  - `click()` – When an element is clicked
  - `dblclick()` – When an element is double-clicked
  - `mouseenter()` / `mouseleave()` – Mouse hover events
  - `keydown()` / `keyup()` – Keyboard events
  - `focus()` / `blur()` – Form input focus events
  
 **Example:**
  ### 1. click()
  ```javascript
  $("#btn").click(function() {
      alert("Button Clicked!");
  });
  ```

 ### 2. dblclick()
The dblclick() method attaches an event handler function to an HTML element.

The function is executed when the user double-clicks on the HTML element:
```javascript
$("p").dblclick(function(){
  $(this).hide();
});
```

 ### 3.mouseenter()
The mouseenter() method attaches an event handler function to an HTML element.

The function is executed when the mouse pointer enters the HTML element:
```javascript
$("#p1").mouseenter(function(){
  alert("You entered p1!");
});
```
 ### 4.mouseleave()
The mouseleave() method attaches an event handler function to an HTML element.

The function is executed when the mouse pointer leaves the HTML element:
```javascript
$("#p1").mouseleave(function(){
  alert("Bye! You now leave p1!");
});
```

 ### 5.mousedown() /mouseup()
The mousedown() method attaches an event handler function to an HTML element.
The function is executed, when the left, middle or right mouse button is pressed down, while the mouse is over the HTML element:

The mouseup() method attaches an event handler function to an HTML element.
The function is executed, when the left, middle or right mouse button is released, while the mouse is over the HTML element:

```javascript
$("#p1").mousedown(function(){
  alert("Mouse down over p1!");
});

$("#p1").mouseup(function(){
  alert("Mouse up over p1!");
});
```

 ### 6.hover()
The `hover()` method takes two functions and is a combination of the `mouseenter()` and `mouseleave()` methods.

The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML element:
```javascript
$("#p1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});
```

 ### 7.focus()
The focus() method attaches an event handler function to an HTML form field.

The function is executed when the form field gets focus:
```javascript
$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});
```

 ### 8.blur()
The blur() method attaches an event handler function to an HTML form field.

The function is executed when the form field loses focus:
```javascript
$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});
```



revise : The `$(document).ready()` method allows us to execute a function when the document is fully loaded.

### 🔹 2. Event Binding & Delegation
### The on Method
The `on()` method attaches one or more event handlers for the selected elements.
Attach a click event to a <p> element:
```javascript
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
```
Binding events dynamically using `on()` improves performance and allows handling future elements.
- **Example:**
  ```javascript
  $("#parent").on("click", ".child", function() {
      alert("Child Clicked!");
  });
  ```

### 🔹 3. Preventing Default Behavior
Use `preventDefault()` to stop default browser actions.
- **Example:**
  ```javascript
  $("a").click(function(event) {
      event.preventDefault();
      alert("Link Click Disabled!");
  });
  ```

---

## 🎯 Real-World Applications
- **Form Validations:** Prevent form submission on invalid input.
- **Dynamic Content:** Handle events for dynamically added elements.
- **Interactive UI:** Add animations and effects on user interaction.

---

📌 **Next Chapter:** [Manipulating the DOM →](./4_jQuery_DOM.md)

