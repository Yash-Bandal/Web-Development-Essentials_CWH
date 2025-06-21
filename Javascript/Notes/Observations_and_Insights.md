
```js
//form array from 1 to n..vimp trick learn
let n = 10;
let arr = Array.from(Array(n+1).keys());
console.log(arr);  
```

## 1 Toggling between images
```js
    document.querySelector('.volume img').addEventListener('click', (e) => {
        console.log(e.target)
   
        //now directly access image
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg","mute.svg");
            currentSong.volume = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentSong.volume = 10/100;
        }
    });
```

//-------------------------------------   
# `target` vs. `currentTarget` in JavaScript Events

## **What is `target`?**
- Refers to the **actual element** that triggered the event.
- Can be **any child element** inside the parent that has the event listener.

## **What is `currentTarget`?**
- Refers to the **element where the event listener is attached**.
- Useful in event delegation to prevent unintended interactions.

---

## **Example: `target` vs. `currentTarget`**
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```
```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    console.log("event.target:", event.target); // The actual clicked element
    console.log("event.currentTarget:", event.currentTarget); // The element that has the event listener
});
```
### **Scenario 1: Clicking the button (`#child`)**
- `event.target` → `<button id="child">Click Me</button>`  
- `event.currentTarget` → `<div id="parent">...</div>`  

### **Scenario 2: Clicking the parent (`#parent`)**
- `event.target` → `<div id="parent">...</div>`  
- `event.currentTarget` → `<div id="parent">...</div>`  

---

## **Common Mistakes / Points to Remember**
###  **1. Using `target` incorrectly inside event delegation**
```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    if (event.target.id === "parent") {
        console.log("Clicked on parent");
    }
});
```
 **Fix**: Use `currentTarget` to ensure the event always refers to the parent element.
```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    if (event.currentTarget.id === "parent") {
        console.log("Clicked on parent");
    }
});
```

<br>

###  **2. Forgetting that `target` can be a deeply nested element**
```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    console.log(event.target.id); // Could be a child inside the parent
});
```
 **Fix**: Use `.closest()` to ensure you're selecting the correct element.
```javascript
document.getElementById("parent").addEventListener("click", (event) => {
    let button = event.target.closest("button");
    if (button) {
        console.log("Button clicked:", button.id);
    }
});
```

<br>

## **When to Use `target` vs. `currentTarget`?**
| Use Case | `target` | `currentTarget` |
|----------|---------|---------------|
| Event delegation (child elements) |  Yes |  No |
| Ensuring the event listener is on the right element |  No |  Yes |
| Checking if a specific element was clicked |  Yes |  No |

---
