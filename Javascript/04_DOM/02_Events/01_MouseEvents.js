// HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Events Example</title>
    <style>
        button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        #output {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
        }
        #dabba {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin-top: 20px;
      border: 2px solid #333;
    }
    </style>
</head>

<body>
    <!-- <div class="container">
    <div class="box">Hey I am a box</div>
</div> -->
    <button id="btn">BuTton</button>

    <h1>Mouse Events Example</h1>

    <button id="clickButton">Click</button>
    <button id="dblclickButton">Double Click</button>
    <button id="mousedownButton">Mouse Down</button>
    <button id="mouseupButton">Mouse Up</button>
    <button id="mouseenterButton">Mouse Enter</button>
    <button id="mouseleaveButton">Mouse Leave</button>
    <button id="mousemoveButton">Mouse Move</button>
    <button id="contextmenuButton">Right Click | contextmenu</button>

    <p id="output">Interact with the buttons to see the events in action.</p>

    <h1>Remove Event Listener Example</h1>
    <button id="addEvent">Add Mouseover Event</button>
    <button id="removeEvent">Remove Mouseover Event</button>
    <div id="dabba"></div>
  

    <!-- <script src="script.js"></script> -->
    <script src="MouseEvent.js"></script>
</body>

</html>

//========================================================================================

// yash.js
// let btn =document.getElementById('btn')

//Click Event Listner
// btn.addEventListener("click",()=>{
//     alert("I was Clicked ..Yayyyy!!!");
// })

//Changing Inner Content
// btn.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b>Yay..You clicked me..Enjoy clicking</b>";

// })
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


// syntax:
// elementRetrieved.addEventListener("event_Name","function"()=>{
//     //operation;
// })
//============================================================

const output = document.getElementById("output");

// Event: click
// Triggered when the "Click" button is clicked.
// Output: "You clicked the button!"
document.getElementById("clickButton").addEventListener("click", () => {
  output.textContent = "You clicked the button!";
});

// Event: dblclick
// Triggered when the "Double Click" button is double-clicked.
// Output: "You double-clicked the button!"
document.getElementById("dblclickButton").addEventListener("dblclick", () => {
  output.textContent = "You double-clicked the button!";
});

// Event: mousedown
// Triggered when the mouse button is pressed down on the "Mouse Down" button.
// Output: "Mouse button pressed down on the button!"
document.getElementById("mousedownButton").addEventListener("mousedown", () => {
  output.textContent = "Mouse button pressed down on the button!";
});

// Event: mouseup
// Triggered when the mouse button is released after pressing it on the "Mouse Up" button.
// Output: "Mouse button released on the button!"
document.getElementById("mouseupButton").addEventListener("mouseup", () => {
  output.textContent = "Mouse button released on the button!";
});

// Event: mouseenter
// Triggered when the mouse pointer enters the "Mouse Enter" button area. like on hover
// Output: "Mouse entered the button area!"
document.getElementById("mouseenterButton").addEventListener("mouseenter", () => {
  output.textContent = "Mouse entered the button area!";
});

// Event: mouseleave
// Triggered when the mouse pointer leaves the "Mouse Leave" button area.
// Output: "Mouse left the button area!"
document.getElementById("mouseleaveButton").addEventListener("mouseleave", () => {
  output.textContent = "Mouse left the button area!";
});

// Event: mousemove
// Triggered when the mouse pointer moves over the "Mouse Move" button.
// Output: "Mouse is moving over the button!"
document.getElementById("mousemoveButton").addEventListener("mousemove", () => {
  output.textContent = "Mouse is moving over the button!";
});

// Event: contextmenu
// Triggered when the right mouse button is clicked (context menu) on the "Right Click" button.
// The default context menu is prevented.
// Output: "You right-clicked on the button!"
document.getElementById("contextmenuButton").addEventListener("contextmenu", (event) => {  //'inner "event" ' is the event object that is fired after given event takes place..like right click here
  event.preventDefault(); // Prevents the default context menu from showing                  //you can perfrom operations on the even specifically
  output.textContent = "You right-clicked on the button!";
});

//======================================used many times ======================================
//Any Keyboard Key
// for button 
button.addEventListener("keydown", (e)=>{
  console.log(e, e.key, e.keyCode)
})

//for entire doc/page...if you press M..it records M
document.addEventListener("keydown", (e)=>{
  console.log(e, e.key, e.keyCode)
})
/*
op: 
 'Shift' 16
MouseEvent.js:88 KeyboardEvent {isTrusted: true, key: 'M', code: 'KeyM', location: 0, ctrlKey: false, …} 'M' 77
Like while making games.Mario..Arrowkey up pressed...Jump event
 */


const box = document.getElementById("dabba");
const addEventButton = document.getElementById("addEvent");
const removeEventButton = document.getElementById("removeEvent");

// Function to handle the mouseover event
function handleMouseOver() {
  box.style.backgroundColor = "yellow";
  box.textContent = "Mouse is over the box!";
}


// Adding the event listener to the box when "Add Event" button is clicked
addEventButton.addEventListener("click", () => {
  box.addEventListener("mouseover", handleMouseOver);
  alert("Mouseover event added!");
});

// Removing the event listener from the box when "Remove Event" button is clicked
removeEventButton.addEventListener("click", () => {
  box.removeEventListener("mouseover", handleMouseOver);
  alert("Mouseover event removed!");
});

