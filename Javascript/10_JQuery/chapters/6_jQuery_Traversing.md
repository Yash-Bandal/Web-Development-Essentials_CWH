# 🎭 Lesson 6: jQuery Traversing

## 📌 Introduction
Traversing in jQuery means navigating through the DOM elements to find, filter, or modify elements.
jQuery traversing, which means "move through", are used to "find" (or select) HTML elements based on their relation to other elements.

 ![image]( https://www.w3schools.com/jquery/img_travtree.png)

 Three useful jQuery methods for traversing up the DOM tree are:

  - parent()
  - parents()
  - parentsUntil()

---

## 🔍 Finding Elements
 ## 1. Traversing - Ancestors
 ### A `.parent()`
- Finds the immediate parent of an element.
- This method only traverse a single level up the DOM tree.
```javascript
$(".child").parent().css("border", "2px solid red");
```
see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parent

### B  `.parents()`
- Finds all ancestors (parents, grandparents, etc.).
  
```javascript
$(".child").parents().css("background", "lightgray");
```
see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parents

### C `.parentsUntil()`
- The parentsUntil() method returns all ancestor elements between two given arguments.
  
```javascript
  $("span").parentsUntil("div").css({"color": "red", "border": "2px solid red"});
```
see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_parentsuntil


### 2. Traversing - Descendants

### A `.children()`
- Finds all direct children of an element.
```javascript
$(".parent").children().css("color", "blue");

 $("div").children("p.first");

```
see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_children


### B `.find()`
- The find() method returns descendant elements of the selected element, all the way down to the last descendant.
```javascript
//return all span

$(document).ready(function(){
  $("div").find("span");
});


//find all descendents
$(document).ready(function(){
  $("div").find("*");
});

```
see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_find

### Traversing Sideways 
### A `.siblings()`
- Finds all siblings of an element.
```javascript
$(".selected").siblings().css("opacity", "0.5");
```
see https://www.w3schools.com/jquery/jquery_traversing_siblings.asp

### B `.closest()`
- Finds the nearest ancestor that matches a selector.
```javascript
$(".child").closest(".container").css("border", "3px dashed green");
```

---

## 🎯 Filtering Elements
The first(), last(), eq(), filter() and not() Methods
The most basic filtering methods are first(), last() and eq(), which allow you to select a specific element based on its position in a group of elements.

### 6️⃣ `.first()`
- Selects the first element in a set.
```javascript
$("li").first().css("font-weight", "bold");
```

### 7️⃣ `.last()`
- Selects the last element in a set.
```javascript
$("li").last().css("font-style", "italic");
```

### 8️⃣ `.eq(index)`
- Selects an element at a specified index.
```javascript
$("li").eq(2).css("background", "yellow");
```
see https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eq

### 9️⃣ `.filter(selector)`
- Filters elements based on a selector.
```javascript
$("p").filter(".highlight").css("color", "red");
```

### 🔟 `.not(selector)`  like except
- Selects elements that **do not** match the selector.
```javascript
$("div").not(".exclude").css("border", "1px solid black");
```

---

## 🌟 Real-World Applications
✅ Selecting specific sections in dynamic websites.
✅ Highlighting table rows, menus, and forms dynamically.
✅ Filtering search results using custom criteria.
✅ Modifying UI components efficiently with traversing methods.

---

📌 **Next Lesson:** [Lesson 7 - jQuery AJAX](./7_jQuery_AJAX.md)

