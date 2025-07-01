# Notes :
<br>


[Componants](https://mui.com/material-ui/getting-started/)

<br>

## Part 1

1. There aee some folders inside the created react app, you will make changes to package.json when add package , and add componants inside `src` folder
2. We mostly dont change the index.html , inside the `public` folder, only make changes when adding bootstrap or such things, we make changes in src for componants
3. The `<div id="root"></div>` inside index.html is populated using `js` 
4. You cant return more than one main JSX, only one </APP>
```js
function App() {
  return (

    //JSX
    <div className="App">
      <h1>Hello World</h1>
    </div>

   );
 }

```
5. To use / return 1+ componants use `<></>`
  ```js
  function App() {
  return (
     <>
        divs and all
    </>
  );
 }
  ```
6. When using void tags like `<img>, <hr>, <br>` complete the tags as  `<img/>, <hr/>, <br/>` 
7. You may think , the file is `.js` and you are using `html` in it, Actually we are using `JSx` which is 95% HTML with embedded JS CSS, its compiled using **`Babel`**
    - We write HTML JSX
    ```jsx
    const elementJSX = (
      <h1 className="greeting">
        Hello, world!
      </h1>
    );
    ```

    - It is read as React.createElement syntax
    ```jsx
    const elementCreateElement = React.createElement(
      'h1',
      { className: 'greeting' },
      'Hello, world!'
    );
    ```

8. You cant use external html , like `let name = <h1>Yash</h1>` its read as plain text
9. While sharing project, we dont give `node_modules` folder, its removed and can be reinstalled using `npm install`
10. Replace all `#` with `/`, and `class` (div class = "") with camelcase `className`

<br>

## Part 2

1. For neatness create a  folder `components` and include all files in initial capital letter, eg `Navbar.js`
2. Module files are `.mjs`
3. We communicate from embeded parent to child created componant using props,
   - Use case :
   - You can just copy entire componant and make small changes to reuse that componant
4. You cant update vars directly in React, like `text = "abcd"`, you have to use updation functions, (usestates)
5. When you use `onClick` you have to use `onChange`, and vice versa
6. Whenever you call / listen to an event, any event, you get a event object, [recall JS](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/Javascript/04_DOM/02_Events/Notes.md#3-event-object)
7. Use syntax: { condition && <Component /> } when you pass `props` as objects which are not visible on page
   ```jsx
       props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
   ```

## Pat 3
1. **StritMode**
/src/main.jsx
```jsx
  <StrictMode>
    <App />
  </StrictMode>,
```
You may observe sometimes useEffect ,alerts run twice when you reload page, this happends because in **development** mode , strctmode runs the development 2 times, not in **production**
  - once to check
  - second time run actually
To stop this, comment it out..not recommended
```jsx
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
```

2. You may set the value of the var/elem you want inside the componant using useState..but you cant modify prop
