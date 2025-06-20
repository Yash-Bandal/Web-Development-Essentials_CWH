
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
4. Select **React** and then **JavaScript** (or TypeScript if you're using TS)
5. Go into your project folder:
    ```bash
    cd my-react-app
    ```
6. Install dependencies:
    ```bash
    npm install
    ```
7. Run the development server:
    ```bash
    npm run dev
    ```
8. Open browser and go to `http://localhost:5173`

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

---
> Note:
---
1. There aee some folders inside the created react app, you will make changes to package.json when add package , and add componants inside `src` folder
2. We mostly dont change the index.html , inside the `public` folder, only make changes when adding bootstrap or such things, we make changes in src for componants
3. The `<div id="root"></div>` inside index.html is populated using `js` 
  

