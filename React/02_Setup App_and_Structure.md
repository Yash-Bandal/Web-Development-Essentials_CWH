
# Lesson 2: Setting Up a React Project

There are **2 popular ways** to set up a new React project:

<br>

###  Method 1: Using Vite (Recommended - Fast & Modern)

####  Step-by-Step:
1. **Install Node.js** from [https://nodejs.org/](https://nodejs.org/) (LTS version is best)
2. Open terminal and run:

    ```bash
    npm create vite@latest
    ```
3. Give your project a name (e.g., `my-react-app`)
4. Or simply
    ```bash
    npm create vite@latest my-app  -- --template react
    ```
5. Select **React** and then **JavaScript** (or TypeScript if you're using TS)
6. Go into your project folder:
    ```bash
    cd my-react-app
    ```
7. Install dependencies:
    ```bash
    npm install
    ```
8. Run the development server:
    ```bash
    npm run dev
    ```
9. Open browser and go to `http://localhost:5173`

> You now have a working React project using Vite!

<br>

---

<br>

###  Method 2: Using Create React App (CRA - Older, but still used)

```bash
npx create-react-app my-app
cd my-app
npm start
```

---
> CRA is a bit slower and heavier than Vite, but still fine for learning.
---


[Reference](https://www.codewithharry.com/tutorial/react-home) <br>
[Documentation](https://react.dev/learn)





<br>

---

<br>

# React App Folder Structure and Entry Flow

## 1. Folder Overview

```
my-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...other components and files
├── package.json
└── ...other config files
```

## 2. `public/index.html`
- This is the **single HTML file** used by the entire React app.
- React will render content **inside the `div` with id="root"**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

## 3. `src/index.js`
- This is the **entry point** of the React app.
- It renders the `<App />` component into the DOM.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## 4. `src/App.js`
- This is the **main component** of the app.
- All other components are usually rendered inside `<App />`.

```js
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
```

## 5. Key Notes
- React apps **render only one HTML file and one App** (`index.html`) from the `public` folder.
- All UI is built using components inside the `src` folder.
- `index.js` is the glue that binds React (`App`) to the HTML (`#root`).

