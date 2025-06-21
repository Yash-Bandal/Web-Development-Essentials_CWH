# Notes :


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

## Part 2

1. For neatness create a  folder `components` and include all files in initial capital letter, eg `Navbar.js`
2. Module files are `.mjs`
