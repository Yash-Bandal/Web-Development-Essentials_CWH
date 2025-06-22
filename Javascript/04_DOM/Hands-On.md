## HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      .completed {
        color: #888;
        text-decoration: line-through;
      }
      .todo {
        background: lightcyan;
      }
      .tasks {
        background-color: lightyellow;
      }

      .weatherApp {
        background: lightskyblue;
      }
      #result {
        margin-top: 15px;
        font-size: 18px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1>JS Learn</h1>
    <div id="demo"></div>

    <!-- todo list  -->
    <div class="todo">
      <div class="getTask">
        <h3>Enter Task:</h3>
        <input type="text" name="getter" id="ip" placeholder="Enter task" />
        <input type="button" value="Add" onclick="addTask()" />
      </div>

      <div class="display">
        <ul id="display">
          <!-- <li>abcd</li> -->
        </ul>
      </div>
    </div>

    <div class="tasks">
      <!-- tasks  -->

      <!-- task1 -->

      <div class="practise">
        <h1 id="main-title">Welcome!</h1>
        <ul class="list">
          <li class="item">One</li>
          <li class="item">Two</li>
        </ul>

        <!-- task 2 -->
        <h2 id="greeting">Hello</h2>
        <button id="changeBtn">Change Greeting</button>
      </div>

      <!-- task 3  -->
      <ul id="task-list">
        <li>Learn HTML</li>
        <li>Learn CSS</li>
      </ul>
      <button id="addJS">Add JavaScript Task</button>

      <!-- task44 -->
      <button id="remBtn">Remove Last Task</button>

      <!-- task5 -->
      <div class="container">
        <p class="message">Click me!</p>
      </div>

      <!-- task6 -->
      <ul id="fruit-list">
        <li>Apple</li>
        <li>Banana</li>
        <li>Mango</li>
      </ul>

      <!-- task7 -->
      <ul>
        <li class="color-item">Red</li>
        <li class="color-item">Green</li>
        <li class="color-item">Blue</li>
      </ul>

      <!-- task8 -->
      <h2 id="count">0</h2>
      <button id="inc">Increment</button>
      <button id="dec">Decrement</button>
    </div>

    <div class="weatherApp">
      <h2>Weather App</h2>
      <input type="text" id="cityInput" placeholder="Enter city" />
      <button id="getWeather">Get Weather</button>
      <div id="result"></div>
    </div>

    
    <!-- <script src="Level1.js"></script> -->
    <script src="script.js"></script>
  </body>
</html>

```

<br>


## JavaScript
```js
// Task List todo

function addTask() {
  let input = document.getElementById("ip");
  taskText = input.value.trim();
  // console.log(task.value)

  //Getting text
  let li = document.createElement("li");
  li.innerText = taskText;

  //delete
  let delBtn = document.createElement("button");
  delBtn.innerText = "x";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);

  //strikethhrough on complete
  li.onclick = () =>{
    //manipulating class and style
    li.classList.toggle('completed')

    //in code one place..less recommended
    // if(li.style.textDecoration === 'line-through'){
    //     li.style.textDecoration = 'None';
    // }else{
    //     li.style.textDecoration = "line-through";
    // }
  }

  //add to display
  const ui = document.getElementById("display");
  ui.appendChild(li);
  input.value = "";
}

// tasks

// task1
const h1 = document.getElementById("main-title");
console.log(h1);

let classEle = document.getElementsByClassName("item");

// task2
let head = document.getElementById("greeting");
let btn = document.getElementById("changeBtn");

const changeStyle = () => {
  head.style.fontSize = "30px";
  head.style.color = "blue";
  head.innerText = "Welcome Back";
};

btn.addEventListener("click", () => {
  changeStyle();
});

// task 3

let ul = document.getElementById("task-list");

let str = "Learn Javascript";

let addBtn = document.getElementById("addJS");

addBtn.addEventListener("click", () => {
  li = document.createElement("li");
  li.innerText = str;
  ul.appendChild(li);
});

//task 4
let remBtn = document.getElementById("remBtn");

remBtn.addEventListener("click", () => {
  const lastEle = ul.lastElementChild;
  if (lastEle) {
    lastEle.remove();
  }
});

// task5
// let cont = document.getElementsByClassName("container");
let msg = document.querySelector(".message");

msg.addEventListener("click", () => {
  let parDiv = msg.parentElement;
  parDiv.style.backgroundColor = "lightyellow";
});

// task6
// let fruitList = document.querySelectorAll('.fruit-list')
const list = document.getElementById("fruit-list");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(e.target.innerText);
  }
});

//task7
let colorList = document.querySelectorAll(".color-item");
// console.log(colorList) its a list not individual ele

//use forEach

colorList.forEach((color) => {
  color.style.fontWeight = "bold";
});

//task8
counter = document.getElementById("count");

inc = document.getElementById("inc");
dec = document.getElementById("dec");

inc.onclick = () => {
  // console.log(counter)
  counter.innerText = Number(counter.innerText) + 1;
};

dec.onclick = () => {
    let numStr = counter.innerText;
    let num = Number(numStr);
    num = num - 1;
    //dont forget to update also
    if(num === -1){
        return;
    }
    counter.innerText = num;



//   counter.innerText = Number(counter.innerText) - 1;
};



//weather
const input = document.getElementById("cityInput");
const button = document.getElementById("getWeather");
const result = document.getElementById("result");

const apiKey = "8737ef13161112ab8f3d8b877b7a26e8"; 

// check by pasting this in chrome tab , if no JSON seen, wrong APIkey
//api.openweathermap.org/data/2.5/weather?q=delhi&appid=8737ef13161112ab8f3d8b877b7a26e8&units=metric

https: button.addEventListener("click", () => {
  const city = input.value.trim();

  if (city === "") {
    result.textContent = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const name = data.name;

      result.textContent = `Weather in ${name}: ${temp}°C, ${condition}`;
    })
    .catch((error) => {
      result.textContent = error.message;
    });
});

```


<br>

### Try :
[Playground](https://liveweave.com/)
