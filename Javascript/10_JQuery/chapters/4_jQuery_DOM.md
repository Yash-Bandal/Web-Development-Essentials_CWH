# 📌 Chapter 4: Manipulating the DOM with jQuery

## 🚀 Introduction
jQuery makes it easy to manipulate the **Document Object Model (DOM)** by allowing us to modify elements, attributes, and CSS styles dynamically. This chapter covers different ways to update content, add or remove elements, and manipulate attributes efficiently.

---


### 🔹 1. Changing Content / Get Content - text(), html(), and val()
jQuery provides methods to update text, HTML, and form values dynamically.

- **Example:**
  ```javascript
  $("#text").text("Updated Text");
  $("#content").html("<b>Bold HTML Content</b>");
  $("#inputField").val("New Value");
  ```
  **Methods:**
  - `text()` – Change text content (ignores HTML) / Sets or returns the text content of selected elements
  - `html()` – Change inner HTML (renders HTML tags) /  Sets or returns the content of selected elements (including HTML markup)
  - `val()` – Change input values / Sets or returns the value of form fields

---
 
## JavaScript Alternatives for jQuery DOM Manipulation
vanilla js -  plain or basic JavaScript code, written without the use of any external libraries or frameworks like jQuery, React, or Angular

In **vanilla JavaScript**, you can achieve the same functionality as jQuery's `.text()`, `.html()`, and `.val()` using built-in properties.  

---

### 1️⃣ `.text()` Alternative to element.textContent 
**Usage:** Sets or returns the text content of selected elements (ignores HTML).  

#### jQuery:
```javascript
console.log($('#myElement').text()); // Get text content
$('#myElement').text('New Text'); // Set text content
```

#### Vanilla JavaScript:
```javascript
console.log(document.getElementById('myElement').textContent); // Get text content
document.getElementById('myElement').textContent = 'New Text'; // Set text content
```

🔹 **`textContent`** is the recommended alternative as it **preserves only the text, without HTML formatting**.  

---

### 2️⃣ `.html()` Alternative to element.innerHTML
**Usage:** Sets or returns the content of selected elements (including HTML markup).  

#### jQuery:
```javascript
console.log($('#myElement').html()); // Get inner HTML
$('#myElement').html('<b>Bold Text</b>'); // Set inner HTML
```

#### Vanilla JavaScript:
```javascript
console.log(document.getElementById('myElement').innerHTML); // Get inner HTML
document.getElementById('myElement').innerHTML = '<b>Bold Text</b>'; // Set inner HTML
```

🔹 **`innerHTML`** allows **both getting and setting content, including HTML tags**.  

---

### 3️⃣ `.val()` Alternative to element.value 
**Usage:** Sets or returns the value of form fields (`<input>`, `<textarea>`, `<select>`).  

#### jQuery:
```javascript
console.log($('#myInput').val()); // Get input value
$('#myInput').val('New Value'); // Set input value
```

#### Vanilla JavaScript:
```javascript
console.log(document.getElementById('myInput').value); // Get input value
document.getElementById('myInput').value = 'New Value'; // Set input value
```

🔹 **`value`** is used for form elements like **inputs, textareas, and dropdowns**.

---

##  Key Differences  

| Function | jQuery | JavaScript Equivalent |
|----------|--------|-----------------------|
| `.text()` | `$('selector').text()` | `element.textContent` |
| `.html()` | `$('selector').html()` | `element.innerHTML` |
| `.val()` | `$('selector').val()` | `element.value` |


### Get Attributes - attr()
The jQuery attr() method is used to get attribute values.

```js
  $("button").click(function(){
    alert($("#w3s").attr("href"));
  });
```
---

### 🔹 2. Modifying Attributes
We can use `attr()` and `prop()` to modify element attributes dynamically.
- **Example:**
  ```javascript
  $("#link").attr("href", "https://example.com");
  $("#checkbox").prop("checked", true);
  ```
  **Methods:**
  - `attr()` – Get or set attributes (e.g., `href`, `src`, `alt`)
  - `prop()` – Modify boolean properties (e.g., `checked`, `disabled`)

### 🔹 3. Adding and Removing Elements
We can insert or delete elements dynamically using jQuery.
- **Example:**
  ```javascript
  $("#list").append("<li>New Item</li>");
  $("#list").prepend("<li>First Item</li>");
  $("#element").remove();
  ```
  **Methods:**
  - `append()` – Adds content at the end of an element
  - `prepend()` – Adds content at the beginning
  - `after()` - Inserts content after the selected elements
  - `before()` - Inserts content before the selected element
  - `remove()` – Removes an element completely
 
  #### Append() :
  see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append

  #### prepend()  :
  see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_prepend

  Add Several New Elements With append() and prepend()
  usecase:
  ```js
  function appendText() {
  var txt1 = "<p>Text.</p>";        // Create text with HTML
  var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  var txt3 = document.createElement("p");
  txt3.innerHTML = "Text.";         // Create text with DOM
  $("body").append(txt1, txt2, txt3);   // Append new elements
  }

  <button onclick="appendText()">Append text</button>

  ```
  see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append2
  

  #### after() :
   
  #### before() :
  ```js
  function afterText() {
  var txt1 = "<b> I </b>";           // Create element with HTML
  var txt2 = $("<i></i>").text("love ");  // Create with jQuery
  var txt3 = document.createElement("b");   // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);    // Insert new elements after img
  }
  <button onclick="afterText()">Insert after</button>
  ```
  see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_after2


  #### remove() and empty()
  - remove() - Removes the selected element (and its child elements)
  - ```js
    $("#div1").remove();
    $("p").remove(".class1, .class2")  //filter
    ```
    see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_remove
  - empty() - Removes only the child elements from the selected element
  - ```js
    $("#div1").empty();
    ```
    
  - see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_empty
   

### 🔹 4. Modifying CSS and Classes on some action [vimp]
We can dynamically modify styles and classes using jQuery.
- **Example:**
  ```javascript
  $("#box").css("background-color", "blue");
  $("#text").addClass("highlight");
  $("#text").removeClass("highlight");
  $("#button").toggleClass("active");
  ```
  **Methods:**
  - `css()` – Modify inline styles
  - `addClass()` – Add a CSS class
  - `removeClass()` – Remove a CSS class
  - `toggleClass()` – Toggle a class on/off
 
    #### 1. addClass()
    ```js
     $("button").click(function(){
    $("h1, h2, p").addClass("blue");
    $("div").addClass("important");
    ```
    see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_addclass
    

    #### 2. removeClass()
    Keep some classes handy defined..that are not used ..then add when you want after an action
    ```js
    $("button").click(function(){
    $("h1, h2, p").removeClass("blue");
    });
    ```
    see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_removeclass

    #### 3. toggleClass() 
    Keep some classes handy defined..that are not used ..then add when you want after an action
    ```js
     $("button").click(function(){
     $("h1, h2, p").toggleClass("blue");
     });
    ```
    see    https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_dom_toggleclass


    ### 4. css()
    1. Single
    ```
    css("propertyname","value");
    ```
    ```js
    $("p").css("background-color", "yellow");
    ```
    see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_setcolor

    2. Multiple
    ```
    css({"propertyname":"value","propertyname":"value",...});
    ```
    ```js
     $("p").css({
     "background-color": "yellow",
     "font-size": "200%"
    });
    ```
    see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_set_multiple


    ### 🔹 5. jQuery Dimensions
     - width()
     - height()
     - innerWidth()
     - innerHeight()
     - outerWidth()
     - outerHeight()
    
       (![image](https://www.w3schools.com/jquery/img_jquerydim.gif)

     

    

---

## 🎯 Real-World Applications
- **Dynamic content loading:** Change website text without refreshing the page.
- **Interactive forms:** Update form fields dynamically based on user input.
- **Theming and UI changes:** Apply dark/light mode using class toggles.

---

📌 **Next Chapter:** [Effects and Animations →](./5_jQuery_Effects.md)

