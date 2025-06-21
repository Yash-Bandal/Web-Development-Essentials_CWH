# jQuery Notes

## Introduction

### What is jQuery?
jQuery is a **fast, lightweight JavaScript library** that simplifies HTML document manipulation, event handling, animation, and AJAX interactions. It makes JavaScript code **shorter, easier, and more efficient**.

---

### Why Use jQuery?
- ✔ **Less Code, More Work** – Simplifies JavaScript operations.
- ✔ **Cross-Browser Compatibility** – Works on all major browsers.
- ✔ **Easy to Use** – Simple syntax for selecting and modifying elements.
- ✔ **Built-in Animations** – Provides smooth visual effects.
- ✔ **AJAX Support** – Handles server requests without page reloads.
- ✔ **Extensive Plugins** – Many ready-to-use plugins like sliders and modals.

---

### How to Include jQuery?
#### 1. Using a CDN (Recommended)
Include the following **CDN link** in your HTML file before `</body>`:
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
```
#### 2. Downloading and Using Locally
1. Download jQuery from [jQuery’s official website](https://jquery.com/download/).
2. Save the file (e.g., `jquery.min.js`) in your project folder.
3. Include it in your HTML:
   ```html
   <script src="jquery.min.js"></script>
   ```

### How to Check if jQuery is Loaded?
Add this script inside your HTML file:
```html
<script>
    $(document).ready(function() {
        alert("jQuery is working!");
    });
</script>
```
If you see an **alert box**, jQuery is successfully loaded!

---

## Index

### 🔹 1. Introduction to jQuery
- [What is jQuery?](./chapters/1_Introduction_to_jQuery.md)
- [Why use jQuery?](./chapters/1_Introduction_to_jQuery.md)
- [How to include jQuery (CDN vs. Local File)](./chapters/1_Introduction_to_jQuery.md)

### 🔹 2. jQuery Basics
- [Syntax and Selecting Elements ($() function)](./chapters/2_jQuery_Basics.md)
- [The document.ready() Function](./chapters/2_jQuery_Basics.md)
- [Basic Selectors (id, class, element, attribute)](./chapters/2_jQuery_Basics.md)
- [Chaining Methods](./chapters/2_jQuery_Basics.md)

### 🔹 3. jQuery Events
- [Handling Events (click, dblclick, hover, keydown, keyup)](./chapters/3_jQuery_Events.md)
- [Event Binding and Delegation (on(), off())](./chapters/3_jQuery_Events.md)
- [Preventing Default Behavior (preventDefault())](./chapters/3_jQuery_Events.md)

### 🔹 4. Manipulating the DOM
- [Changing Content (text(), html(), val())](./chapters/4_jQuery_DOM.md)
- [Modifying Attributes (attr(), prop())](./chapters/4_jQuery_DOM.md)
- [Adding and Removing Elements (append(), prepend(), remove())](./chapters/4_jQuery_DOM.md)
- [Modifying CSS (css(), addClass(), removeClass(), toggleClass())](./chapters/4_jQuery_DOM.md)

### 🔹 5. Effects and Animations
- [Hiding and Showing Elements (hide(), show(), toggle())](./chapters/5_jQuery_Effects.md)
- [Fading Effects (fadeIn(), fadeOut(), fadeToggle())](./chapters/5_jQuery_Effects.md)
- [Sliding Effects (slideUp(), slideDown(), slideToggle())](./chapters/5_jQuery_Effects.md)
- [Custom Animations (animate())](./chapters/5_jQuery_Effects.md)

### 🔹 6. jQuery Traversing
- [Finding Elements (parent(), children(), siblings(), closest())](./chapters/6_jQuery_Traversing.md)
- [Filtering Elements (first(), last(), eq(), filter(), not())](./chapters/6_jQuery_Traversing.md)

### 🔹 7. jQuery AJAX
- [What is AJAX?](./chapters/7_jQuery_AJAX.md)
- [$.ajax() Method](./chapters/7_jQuery_AJAX.md)
- [Using $.get(), $.post() for API Calls](./chapters/7_jQuery_AJAX.md)
- [Handling Responses (success, error)](./chapters/7_jQuery_AJAX.md)

### 🔹 8. jQuery Forms Handling
- [Getting Form Values (val(), serialize())](./chapters/8_jQuery_Forms.md)
- [Handling Form Submission (submit())](./chapters/8_jQuery_Forms.md)
- [Validating Forms (keyup(), blur())](./chapters/8_jQuery_Forms.md)

### 🔹 9. jQuery Plugins
- [What are jQuery Plugins?](./chapters/9_jQuery_Plugins.md)
- [How to Use a jQuery Plugin](./chapters/9_jQuery_Plugins.md)
- [Popular jQuery Plugins (Sliders, Modals, DatePickers)](./chapters/9_jQuery_Plugins.md)

### 🔹 10. jQuery Best Practices & Performance Optimization
- [Using on() for Event Delegation](./chapters/10_jQuery_Best_Practices.md)
- [Minimizing DOM Manipulation](./chapters/10_jQuery_Best_Practices.md)
- [Using Caching for Better Performance](./chapters/10_jQuery_Best_Practices.md)
- [When to Use Vanilla JavaScript vs. jQuery](./chapters/10_jQuery_Best_Practices.md)

---

This **structured roadmap** will help you learn jQuery step by step. Click on the links above to navigate to each topic. 🚀
