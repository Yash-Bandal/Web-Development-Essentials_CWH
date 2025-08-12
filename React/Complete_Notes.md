<h1 align="center"> React </h1>

<br>

## References 

1. [Documentation](https://react.dev/learn)
2. [W3_Schools](https://www.w3schools.com/REACT/DEFAULT.ASP)

<br>

## Tools
1. [Framer motion](https://motion.dev/)
   - Like this navbar [Hamburger-close](https://examples.motion.dev/react/variants)
   - Split text [Link](https://examples.motion.dev/react/split-text)
2. [daisyUI](https://daisyui.com/components)
   - Like the darkmode [switch](https://daisyui.com/components/theme-controller/)
3. [Rechars](https://recharts.org/en-US)
4. [lucide-UI-ICONS](https://lucide.dev/)
5. [Clerk - Authentication and Authorizatoin](https://clerk.com/docs/quickstarts/react)



<br>

### Index

1. [Part 1: Introduction to React](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-1-introduction-to-react)
2. [Part 2: Setting Up React Environment](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-2-setting-up-react-environment)
3. [Part 3: JSX (JavaScript XML)](http://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-3-jsx-javascript-xml)
4. [Part 4: Components (Functional & Class)](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-4-components-functional--class)
5. [Part 5: Props & PropTypes](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-5-props--proptypes)
6. [Part 6: State & useState Hook](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-6-state--usestate-hook)
7. [Part 7: Event Handling](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-7-event-handling)
8. [Part 8: Conditional Rendering](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-8-conditional-rendering)
9. [Part 9: Lists and Keys](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-9-lists-and-keys)
10. [Part 10: Forms Handling](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-10-forms-handling)
11. [Part 11: useEffect & useState Hooks](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-11-useeffect--usestate-hooks---)
12. [Part 12: Component Lifecycle (Class-Based)](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-12-component-lifecycle-class-based)
13. [Part 13: Routing with React Router](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-13-routing-with-react-router)
14. [Part 14: Context API](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-14-context-api)
15. [Part 15: Refs and DOM Manipulation - useRef](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-15-refs-and-dom-manipulation)
16. [Part 16: useReducer & useMemo Hooks](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-16-usereducer--usememo-hooks)
17. [Part 17: Custom Hooks](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-17-custom-hooks)
18. [Part 18: Lifting State Up](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-18-lifting-state-up)
19. [Part 19: React Fragments & Portals](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-19-react-fragments--portals)
20. [Part 20: Performance Optimization](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-20-performance-optimization)
21. [Part 21: React with External Tools](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/React/Complete_Notes.md#part-21-react-with-external-tools)


<br>


---

## Part 1: Introduction to React

---

### 1.1 What is React?

- React is an open-source JavaScript library used for building user interfaces (UIs), especially for single-page applications.
- Developed by Facebook in 2013.
- It allows developers to create large web applications that can update and render efficiently in response to data changes.

### 1.2 Why React?

- **Component-Based Architecture**: Build encapsulated components that manage their own state.
- **Declarative Syntax**: Describe UI with readable code.
- **Reusable Components**: Write once, reuse anywhere.
- **Virtual DOM**: Efficient rendering using diff algorithms.
- **Strong Ecosystem**: Supported by tools like Redux, React Router, Next.js.

### 1.3 React vs Other Frameworks

| Feature        | React            | Angular    | Vue              |
| -------------- | ---------------- | ---------- | ---------------- |
| Type           | Library          | Framework  | Framework        |
| Language       | JavaScript (JSX) | TypeScript | JavaScript       |
| Learning Curve | Moderate         | Steep      | Easy to Moderate |
| Data Binding   | One-way          | Two-way    | Two-way          |
| DOM            | Virtual DOM      | Real DOM   | Virtual DOM      |

### 1.4 Key Concepts

- **JSX**: JavaScript XML, a syntax extension to JavaScript.
- **Components**: Independent, reusable pieces of UI.
- **Props**: Short for properties; data passed from parent to child.
- **State**: Internal data maintained by a component.
- **Hooks**: Functions that let you use state and other features in functional components.

### 1.5 React Application Structure

Typical `create-react-app` project folder:

```
my-app/
├── public/
├── src/
│   ├── App.js
│   ├── index.js
│   └── components/
├── package.json
└── README.md
```

### 1.6 React Popular Use-Cases

- Dashboards and Admin Panels
- E-commerce Frontends
- Social Media Feeds
- Real-time Chat Applications
- Interactive Forms


<br>
<br>


---

## Part 2: Setting Up React Environment

---

### 2.1 Prerequisites

- **Basic knowledge of JavaScript and HTML/CSS**
- **Node.js and npm installed**
  - Check with: `node -v` and `npm -v`
  - Download from [https://nodejs.org](https://nodejs.org)

<br>

### 2.2 Installing React (Using create-react-app)

#### 2.2.1 Step 1: Create a New React App

```bash
npx create-react-app my-app
```

- This sets up everything (Webpack, Babel, ESLint) automatically.

#### 2.2.2 Step 2: Navigate and Start the Server

```bash
cd my-app
npm start
```

- Opens the app in your browser at `http://localhost:3000`

<br>

### 2.3 Folder Structure (Default)

```
my-app/
├── node_modules/        # Installed dependencies
├── public/              # Static files (index.html)
├── src/                 # Main application code
│   ├── App.js           # Root component
│   ├── index.js         # App entry point
│   └── ...
├── package.json         # Project config
└── README.md
```

<br>

### 2.4 Important Files

- **index.js**: Entry point that renders the App component into DOM
- **App.js**: Root component containing UI
- **package.json**: Lists dependencies, scripts, project metadata

<br>

### 2.5 Useful Scripts

| Script          | Purpose                        |
| --------------- | ------------------------------ |
| `npm start`     | Runs dev server                |
| `npm run build` | Creates production build       |
| `npm test`      | Runs test suite                |
| `npm run eject` | Exposes full config (rare use) |

<br>

### 2.6 Alternative Tool: Vite (Faster Build Tool)

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

- Much faster startup and hot reload


<br>
<br>


---

## Part 3: JSX (JavaScript XML)

---

### 3.1 What is JSX?

- JSX stands for **JavaScript XML**.
- It allows writing HTML-like syntax in JavaScript.
- JSX is transformed into `React.createElement()` calls by Babel.

<br>

### 3.2 Why Use JSX?

- Makes code **more readable and expressive**.
- Allows mixing of **HTML structure** and **JavaScript logic**.
- Enables full power of JavaScript inside the UI code.

<br>

### 3.3 Basic JSX Syntax

```jsx
const element = <h1>Hello, React!</h1>;
```

- JSX expressions must have **one parent element**.
- Can use fragments (`<>...</>`) if you don't want a wrapper.

<br>

### 3.4 Embedding JavaScript in JSX

```jsx
const name = 'Shiva';
const element = <h1>Hello, {name}!</h1>;
```

- You can embed any JS expression inside `{}`.
- Can use functions, conditionals, expressions.

<br>

### 3.5 JSX Rules

- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- All tags must be closed: `<img />`, `<input />`

<br>

### 3.6 Using JavaScript Logic

```jsx
const isLoggedIn = true;
const message = <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in'}</h1>;
```

- Conditional rendering with ternary, `&&`, or separate functions.

<br>

### 3.7 JSX Is Not a String

- JSX is not HTML or string — it's syntactic sugar for:

```jsx
const element = React.createElement('h1', null, 'Hello');
```

<br>

### 3.8 Nesting Elements

```jsx
const element = (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);
```

- You can group multiple tags inside a single parent or fragment.

<br>

### 3.9 Expressions vs Statements

- JSX allows **expressions** only (e.g. `{1 + 2}`), not statements (like `if`, `for`).

<br>

### 3.10 Summary Table

| Concept       | JSX Equivalent                            |
| ------------- | ----------------------------------------- |
| HTML class    | `className`                               |
| HTML for      | `htmlFor`                                 |
| Attributes    | `camelCase` (e.g., `onClick`, `tabIndex`) |
| JS inside JSX | `{...}`                                   |
| Close tags    | Always required                           |


<br>
<br>

---

## Part 4: Components (Functional & Class)

---

### 4.1 What is a Component?

- A **Component** is an independent, reusable piece of UI in a React application.
- Each component returns JSX which is rendered to the DOM.

<br>

### 4.2 Types of Components

1. **Functional Components** (Modern, preferred)
2. **Class Components** (Older, still used in legacy code)

<br>

### 4.3 Functional Component (Using ES6 Functions)

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- Simple JavaScript function
- Takes `props` as argument
- Returns JSX

Using Arrow Function:

```jsx
const Welcome = (props) => <h1>Hello, {props.name}!</h1>;
```

<br>

### 4.4 Class Component

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

- Must extend `React.Component`
- Uses `render()` method to return JSX
- Access props using `this.props`

<br>

### 4.5 Rendering a Component

```jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Shiva" />
    </div>
  );
}
```

<br>

### 4.6 Component Naming Rules

- Component names must start with **a capital letter**.
- File name should ideally match component name.
- Export components to reuse:

```jsx
export default Welcome;
```

<br>

### 4.7 Composing Components

- Components can contain other components:

```jsx
function App() {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}
```

<br>

### 4.8 Summary Table

| Feature      | Functional Component      | Class Component             |
| ------------ | ------------------------- | --------------------------- |
| Syntax       | Function / Arrow Function | ES6 Class                   |
| Access Props | `props`                   | `this.props`                |
| Use of Hooks | Yes                       | No (uses lifecycle methods) |
| Boilerplate  | Minimal                   | More code                   |

<br>
<br>


---

## Part 5: Props & PropTypes

---

### 5.1 What are Props?

- **Props** (short for "properties") are used to pass data from parent to child components.
- Props are **read-only**.
- Think of them as **function parameters** for components.

<br>

### 5.2 Using Props in Functional Components

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Greeting name="Shiva" />
```

- `props.name` will output "Shiva"

<br>

### 5.3 Destructuring Props

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

- Cleaner syntax using object destructuring

<br>

### 5.4 Using Props in Class Components

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

<br>

### 5.5 Default Props

- Used to define default values for props if not provided

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

Button.defaultProps = {
  label: 'Click Me'
};
```

<br>

### 5.6 children Prop

- Special prop used to pass nested elements/components

```jsx
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

<Wrapper>
  <p>This is inside the wrapper</p>
</Wrapper>
```

<br>

### 5.7 PropTypes for Type Checking

- Helps catch bugs by validating the props type

```bash
npm install prop-types
```

```jsx
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};
```

- Common types: `string`, `number`, `bool`, `array`, `object`, `func`, `node`, `element`

<br>

### 5.8 Summary Table

| Feature       | Description                                |
| ------------- | ------------------------------------------ |
| Props         | Data passed to components                  |
| Read-Only     | Cannot be modified by child                |
| Default Props | Fallback values if props are missing       |
| children Prop | Allows nesting content inside components   |
| PropTypes     | Runtime type-checking for props (optional) |

<br>
<br>


---

## Part 6: State & useState Hook

---

### 6.1 What is State?

- State is a built-in object used to **store data** that changes over time.
- When state changes, React **re-renders** the component.
- Unlike props, **state is mutable** and local to the component.

<br>

### 6.2 Using `useState` in Functional Components

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

- `useState(0)` initializes state with 0
- `setCount()` updates state and triggers re-render

<br>

### 6.3 State Structure

- Can be of any type: number, string, array, object

```jsx
const [user, setUser] = useState({ name: '', age: 0 });
```

<br>

### 6.4 Updating State

- Always use the **state updater function** (e.g., `setCount`)
- Do **not** mutate state directly

```jsx
// Correct
setUser({ ...user, name: 'Shiva' });

// Wrong
user.name = 'Shiva'; // no re-render
```

<br>

### 6.5 Multiple State Variables

```jsx
const [name, setName] = useState('');
const [age, setAge] = useState(0);
```

- You can declare multiple states in the same component

<br>

### 6.6 State in Class Components

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

<br>

### 6.7 Difference: Props vs State

| Feature    | Props            | State                  |
| ---------- | ---------------- | ---------------------- |
| Mutability | Read-only        | Mutable (via setState) |
| Scope      | Passed by parent | Local to component     |
| Purpose    | Configuration    | Dynamic data           |

<br>

### 6.8 Summary

- State holds dynamic data
- `useState` is used in functional components
- Changing state updates the UI
- Always use updater function

<br>
<br>


---

## Part 7: Event Handling

---

### 7.1 What is Event Handling in React?

- Just like in HTML/JavaScript, React allows handling user events such as clicks, typing, form submissions, etc.
- React events are **synthetic events**, which wrap native events for cross-browser compatibility.

<br>

### 7.2 Handling Events in Functional Components

```jsx
function ClickButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

- Event names use **camelCase**: `onClick`, `onChange`, `onSubmit`
- Event handlers are passed as **functions** (not strings like in HTML)

<br>

### 7.3 Passing Arguments to Event Handlers

```jsx
<button onClick={() => handleClick('Shiva')}>Greet</button>

function handleClick(name) {
  alert(`Hello, ${name}`);
}
```

- Wrap the call in an arrow function to pass parameters

<br>

### 7.4 Handling Input Events

```jsx
function InputBox() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
```

- Use `event.target.value` to access input field value
- Make the input a **controlled component** using `value` prop

<br>

### 7.5 Handling Form Submission

```jsx
function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

- Use `event.preventDefault()` to stop default form submission

<br>

### 7.6 Event Handling in Class Components

```jsx
class ClickButton extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

- Use class methods with `this.`
- Arrow functions help preserve `this` context

<br>

### 7.7 Common React Events

| Event        | Description             |
| ------------ | ----------------------- |
| onClick      | Mouse click             |
| onChange     | Input value change      |
| onSubmit     | Form submission         |
| onMouseEnter | Mouse enters an element |
| onKeyDown    | Keyboard key pressed    |

<br>

### 7.8 Summary

- Use camelCase for event names
- Use functions (not strings) as handlers
- Handle forms and inputs with `event` objects
- Prefer arrow functions to avoid `this` binding issues

<br>
<br>


---

## Part 8: Conditional Rendering

---

### 8.1 What is Conditional Rendering?

- Conditional rendering in React allows components to render different outputs based on certain conditions (just like `if` statements in JavaScript).
- Main two widely used are `**Ternary Operator**` and `**&&**`

```jsx
{showBtn ? <button className='bg-yellow-300' >I will be visible if True</button>: "I was here"}

{showBtn && <button className='bg-yellow-300'>I will be visible if true</button>}

<button className='btn bg-purple-600' onClick={() =>  setshowBtn(!showBtn)}>Toggle</button>
```

<br>

### 8.2 Using `if` Statements (outside JSX)

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign in.</h1>;
}
```

- Use normal `if/else` outside the `return` statement.

<br>

### 8.3 Using Ternary Operator (inline)

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>
  );
}
```

- Commonly used for short conditional rendering inside JSX

<br>

### 8.4 Using Logical `&&` Operator

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}
```

- If the condition is `true`, JSX after `&&` is rendered

<br>

### 8.5 Conditional Rendering with Functions

```jsx
function getGreeting(isLoggedIn) {
  return isLoggedIn ? 'Welcome' : 'Sign in';
}

function Greeting({ isLoggedIn }) {
  return <h1>{getGreeting(isLoggedIn)}</h1>;
}
```

- Useful for complex logic extraction

<br>

### 8.6 Returning `null`

```jsx
function Warning({ show }) {
  if (!show) return null;
  return <p>Warning Message</p>;
}
```

- Returning `null` from a component hides its output

<br>

### 8.7 Inline Style for Conditional Display

```jsx
const style = isVisible ? {} : { display: 'none' };
<div style={style}>Content</div>
```

- Hides elements via style instead of conditionally skipping rendering

<br>

### 8.8 Summary

| Technique        | Use Case                     |
| ---------------- | ---------------------------- |
| `if/else`        | Complex conditional blocks   |
| Ternary Operator | Short expressions within JSX |
| Logical `&&`     | Conditional render when true |
| Function Extract | Clean up rendering logic     |
| Return `null`    | Skip rendering conditionally |

<br>
<br>


---

## Part 9: Lists and Keys

---

### 9.1 Rendering Lists in React

- Use JavaScript's `map()` function to render lists of elements.
- Each item should return a JSX element.

```jsx
const users = ['Shiva', 'Amit', 'Neha'];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}
```

<br>

### 9.2 Why Use Keys?

- Keys help React identify which items have changed, are added, or removed.
- Keys **must be unique** among siblings.
- Helps optimize rendering performance.

<br>

### 9.3 Best Practices for Keys

- Prefer using a unique ID from data (not array index):

```jsx
const users = [
  { id: 1, name: 'Shiva' },
  { id: 2, name: 'Amit' }
];

{users.map(user => <li key={user.id}>{user.name}</li>)}
```

- Avoid using `index` as key when list can change (reordering, filtering, etc.)

<br>

### 9.4 Rendering a List of Components

```jsx
function User({ name }) {
  return <li>{name}</li>;
}

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
}
```

<br>

### 9.5 Lists with Fragments

- Use React Fragments (`<>...</>`) when you don't want an extra DOM node:

```jsx
users.map(user => (
  <React.Fragment key={user.id}>
    <dt>{user.name}</dt>
    <dd>{user.email}</dd>
  </React.Fragment>
))
```


**`/src/constants/index.jx`**
```js
export const products = [
    {
        stars: "4.5",
        imgURL: "shoe4",
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        stars: "5.0",
        imgURL: "shoe5",
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        stars: "4.8",
        imgURL: "shoe6",
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        stars: "4.6",
        imgURL: "shoe7",
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const shoes = [
    {
        thumbnail: "thumbnailShoe1",
        bigShoe: "bigShoe1",
    },
    {
        thumbnail: "thumbnailShoe",
        bigShoe: "bigShoe2",
    }, 
    {
        thumbnail: "thumbnailShoe3",
        bigShoe: "bigShoe3",
    },
];

```


For a big list, use `...` spread operator and pass as  **`props`** to **another componant**
```jsx
import { products, shoes} from '../constants';


{/*Another componant*/}
const ProductCard = ({ stars, imgURL, name, price }) => {
  return (
    <div>
      {stars} {imgURL} {name} {price}
      <br />
    </div>
  );
};

{/*Rendering the big dictionary list..pass key and spread  other as props*/}
<ul>
  {products.map((product) => (
    <ProductCard key={product.name} {...product} />
  ))}
</ul>

```
```
4.5 shoe4 Nike Air Jordan-01 $200.20
5.0 shoe5 Nike Air Jordan-10 $210.20
4.8 shoe6 Nike Air Jordan-100 $220.20
4.6 shoe7 Nike Air Jordan-001 $230.20
```


**Small Lists**
```jsx

<ul>
{
    shoes.map((shoe) => (
        <li key ={shoe.thumbnail} >{shoe.bigShoe}</li>
    ))
}
</ul>
```
```
bigShoe1
bigShoe2
bigShoe3
```

<br>

### 9.6 Summary

| Concept     | Explanation                                 |
| ----------- | ------------------------------------------- |
| `map()`     | Used to render lists in JSX                 |
| `key`       | Unique identifier for each element          |
| `index` key | Avoid if items may change in order          |
| Component   | Can render a list of components             |
| Fragment    | Used to group multiple tags without wrapper |

<br>
<br>


---

## Part 10: Forms Handling

---

### 10.1 What is Form Handling in React?

- Forms collect user input.
- In React, forms are typically **controlled components**, meaning React manages the form state.

<br>

### 10.2 Controlled Components

- React controls the input via `value` and `onChange`

```jsx
function LoginForm() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => setEmail(e.target.value);

  return (
    <input type="email" value={email} onChange={handleChange} />
  );
}
```

- Input is bound to state
- Updates to input update the state, and vice versa

<br>

### 10.3 Handling Multiple Inputs

```jsx
function ProfileForm() {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="age" value={formData.age} onChange={handleChange} />
    </>
  );
}
```

- Use computed property names (`[e.target.name]`) to update fields dynamically

<br>

### 10.4 Handling Form Submission

```jsx
function ContactForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}
```

- `e.preventDefault()` prevents default form refresh behavior

<br>

### 10.5 Uncontrolled Components

- Use **Refs** to access DOM elements directly

```jsx
const inputRef = useRef();

function UncontrolledForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

- Less common in React; used when you don’t need state

<br>

### 10.6 Form Validation (Basic Example)

```jsx
function SignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email');
      return;
    }
    alert('Signed up with: ' + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}
```

<br>

### 10.7 Summary

| Concept              | Description                                    |
| -------------------- | ---------------------------------------------- |
| Controlled Component | React manages state of input fields            |
| `onChange`           | Updates the state on input change              |
| `onSubmit`           | Handles form submission                        |
| Uncontrolled         | Uses `ref` to access input value               |
| Validation           | Ensure form fields meet criteria before submit |

<br>
<br>


---

## Part 11: useEffect & useState Hooks - 🏷

---



### React Hooks Introduction
- Hooks are functions that let you use **React state** and **lifecycle features** in **functional components**.
- Introduced in **React 16.8**.


---
> Whenever there is **state change** , react re renders the whole App (App.jsx) along with its componants everytime state changes

> The `<strictmode> ` inside `main.jsx` runs the app twice during **Development** (not during Production) ..once to check..second time to execute..to stop it ..comment it out (Not recommended)
---


Two most used hooks:
1. `useState` – for managing state
2. `useEffect` – for handling side effects (API calls, timers, subscriptions)

<br>

### A) useState Recap

```jsx
const [count, setCount] = useState(0);
```
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}
```

- Initializes state `count` with `0`
- `setCount` updates the state and re-renders the component

<br>

### B) useEffect 
Useeffect is a hook that executes everytime update / change occurs within props(updated inside ,main app.jsx before passing when they are elems..props never change in children) 


Syntax : use snippet
```jsx
useEffect( () = {} )

useEffect(() => {
  // effect logic
  return () => {
    // optional cleanup
  };
}, [dependencies]);
```

- Runs **after the first render** and after **every update** if dependencies change

<br>

### a) useEffect Without Dependencies
```jsx
//Run every render..used generally for debugging..logging purposes..here we dont use []
useEffect(() => {
  console.log('Component rendered or updated');
});
```

- Runs on **every render** (not recommended for most cases)

<br>

### b) useEffect with Empty Dependency Array `[]`

```jsx
useEffect(() => {
  console.log('Component mounted');
}, []);
```

- Runs **only once** after the initial render
- Similar to `componentDidMount`

<br>

### c) useEffect with Dependencies

```jsx
useEffect(() => {
  console.log(`Count is now ${count}`);
}, [count]);
```

- Runs when `count` value **changes**
- Acts like `componentDidUpdate`

<br>

### d) useEffect Cleanup (componentWillUnmount) - used Less

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log('Running...'), 1000);
  return () => clearInterval(timer);
}, []);
```

- Cleanup runs **before** component unmounts

<br>

### Common useEffect Use Cases

- Fetching data from APIs
- Subscribing/unsubscribing to streams
- Setting up and clearing timers
- Updating page title or triggering animations

<br>



### Example 1 : Prop change alert

**/App.jsx**
```jsx
//useEffect is used to run code after the component has been rendered
export default function App() {
  const [navele, setNavele] = useState("Leetcode")  //updated first


//Case 3 : Run whenever change takes place
  useEffect(() => {
    alert("Nav updated again")    //4
    setNavele("Codechef") //updated second
  }, [])

  //send prop
  return (
        <Nav  navele={navele}/>
  }
```

**componant/Nav.jsx**
```jsx
const Nav = ({navele}) => {

   //Case 1: Run only on first load..first Render
   useEffect(() => {
     alert("Welcome to the app!");  //1
   }, [])

   //Case 2: Run every render..used generally for debugging..logging purposes
    useEffect(() => {
        alert("Run on every render");  //2 5
    })

    //Case 4: Run when change take place (Here inside componant)
    useEffect(() => {
      alert("Navele changed inside nav to " + navele);    //3 6
    }, [navele])

    //Case 5: example of cleanup - Run when unmount (Try uncommenting the nav component in App.jsx)
    useEffect(() => {
        return () => {
            alert("Nav unmounted successfully");
        }
    }, [])

    return (
    <li>{navELe}</li>
  )

```
```
1. Here on page load - screen Leetcode
   - alert1 - Welcome to the app                          / Nav.jsx
   - alert2 - Run on every render                         / Nav.jsx
   - alert3 - Navele changed inside nav to Leetcode       / Nav.jsx
   - alert4 -  Nav updating again                         / App.jsx
3. screen Codechef
   - alert5 - Run on every render (Here its running on change of navele )  / Nav.jsx
   - alert6 - Navele changed inside nav to Codechef                        / Nav.jsx


Navbar Commented inside App.jsx..Unmounting/ Removing componant simulation  (Conditional Rendering..showing on condition)
used very less, 
   - alert7 - Nav unmounted successfully
  ```
  
     
###  Example 2: API Fetch with useEffect

```jsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

<br>

### e) Multiple useEffects

```jsx
useEffect(() => {
  console.log('Runs on mount');
}, []);

useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
```

- You can use **multiple useEffect hooks** to separate concerns

<br>

### Rules of Hooks

- Only call hooks **at the top level** (not inside loops/conditions)
- Only call hooks from **React functions** (components or custom hooks)

<br>

### Summary Table

| Hook        | Purpose                                    | Runs When?              |
| ----------- | ------------------------------------------ | ----------------------- |
| `useState`  | Manage local state in functional component | On change               |
| `useEffect` | Handle side effects                        | On mount/update/unmount |
| `[]`        | Effect runs once on mount                  | On mount                |
| `[dep]`     | Effect runs when dependency changes        | On mount and dep change |
| Cleanup     | Teardown before unmount or dep change      | On unmount / re-run     |

<br>
<br>

---

## Part 12: Component Lifecycle (Class-based)

---

### 12.1 What is a Component Lifecycle?

- Lifecycle methods allow you to **run code at specific points** in a component's life.
- Only applicable to **class components** (in functional components, useEffect is used instead).

<br>

### 12.2 Lifecycle Phases

1. **Mounting** – Component is inserted into the DOM
2. **Updating** – Component is re-rendered due to changes in state or props
3. **Unmounting** – Component is removed from the DOM

<br>

### 12.3 Mounting Methods

| Method                            | Description                             |
| --------------------------------- | --------------------------------------- |
| constructor()                     | Initialize state and bind methods       |
| static getDerivedStateFromProps() | Sync state from props (rare)            |
| render()                          | Returns JSX to render                   |
| componentDidMount()               | Runs after component is rendered in DOM |

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

<br>

### 12.4 Updating Methods

| Method                            | Description                              |
| --------------------------------- | ---------------------------------------- |
| static getDerivedStateFromProps() | Called before every render               |
| shouldComponentUpdate()           | Allows optimization (returns true/false) |
| render()                          | Renders JSX again                        |
| getSnapshotBeforeUpdate()         | Capture values (e.g. scroll position)    |
| componentDidUpdate()              | Runs after updates are flushed to DOM    |

```jsx
componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    console.log('Count updated');
  }
}
```

<br>

### 12.5 Unmounting Method

| Method               | Description                     |
| -------------------- | ------------------------------- |
| componentWillUnmount | Called before component removal |

```jsx
componentWillUnmount() {
  console.log('Component will unmount');
}
```

<br>

### 12.6 Summary Table

| Phase   | Method                | Usage                                    |
| ------- | --------------------- | ---------------------------------------- |
| Mount   | constructor           | Initialize state                         |
| Mount   | componentDidMount     | Fetch data, set up subscriptions         |
| Update  | shouldComponentUpdate | Performance optimization                 |
| Update  | componentDidUpdate    | React to updates                         |
| Unmount | componentWillUnmount  | Cleanup timers, subscriptions, listeners |

<br>

### 12.7 Functional Equivalent

| Class Component      | Functional Component (Hook)  |
| -------------------- | ---------------------------- |
| componentDidMount    | useEffect(() => {}, \[])     |
| componentDidUpdate   | useEffect(() => {}, \[dep])  |
| componentWillUnmount | return () => {} in useEffect |

<br>
<br>


---

## Part 13: Routing with React Router

---


---
> Note: Return Entire `Router`, Not as a seperate componant componant inside any other componant
---

❌ Don’t
```jsx
export default function App() {
  return (
    <main className="relative">

    {/* Inside */}
      <Router>
        <Nav /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<div className="p-10 text-xl">Home Page</div>} />
          <Route path="/card" element={<ApiCard />} />
        </Routes>
     </Router>

   </main>
  );
}

```

✅ instead:
```jsx
export default function App() {
  return (
{/* Outside*/}
    <Router>

      <main className="relative">
        <Nav /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<div className="p-10 text-xl">Home Page</div>} />
          <Route path="/card" element={<ApiCard />} />
        </Routes>
      </main>

    </Router>
  );
}

```

<br>

### 13.1 What is React Router?

- A standard library for routing in React.
- Enables navigation among views of various components.
- Keeps the UI in sync with the URL.

<br>

### 13.2 Installing React Router

```bash
npm install react-router-dom
```

<br>

### 13.3 Core Components of React Router

| Component         | Description                           |
| ----------------- | ------------------------------------- |
| `<BrowserRouter>` | Wraps the entire app for routing      |
| `<Routes>`        | Contains all route definitions        |
| `<Route>`         | Defines path-to-component mapping     |
| `<Link>`          | Navigation without full page reload   |
| `<Navigate>`      | Programmatic navigation (redirection) |

<br>

###  Basic Setup

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

<br>

### Route Parameters

```jsx
<Route path="/user/:id" element={<User />} />
```

- Access with `useParams()`:

```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}
```

<br>

### Redirects with `<Navigate />`

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn }) {
  return isLoggedIn ? <Dashboard /> : <Navigate to="/login" />;
}
```

<br>

###  Nested Routes

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
</Route>
```

- Use `<Outlet />` in parent to render nested child

```jsx
import { Outlet } from 'react-router-dom';
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

<br>

###  useNavigate() – Programmatic Navigation

```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/dashboard');
  return <button onClick={handleLogin}>Login</button>;
}
```

<br>

### Example 1 : With `<Router>` Method

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import ApiCard from "./components/ApiCard";
import Nav from "./components/Nav";
import User from './components/User';



export default function App() {

  return (

    <Router>
      <main className="relative">
        <Nav /> {/* Always visible */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/card" element={<ApiCard />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </main>
    </Router>

  );
}

```


### Example 2 : With `createBrowserRouter` Method (v6+)

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Login from './components/Login';
import Home from './components/Home';
import ApiCard from "./components/ApiCard";
import Nav from "./components/Nav";
import User from './components/User';



export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav /><Home /></>
    },
    {
      path: "/Login",
      element: <><Nav /><Login /></>
    },
    {
      path: "/card",
      element: <><Nav /><ApiCard /></>
    },
   {
      path: "/user/:username",
      element: <><Nav /><User /></>
    },
  ])
  
  return (
      <main>
        <RouterProvider router={router}/>
      </main>

}

```

**/components/user.jsx** - use of Use Params
```jsx
import { useParams } from "react-router-dom"

const User = () => {

const params = useParams()

  return (
    <section className="w-full absolute mt-20">
    <h1 className="text-center font-bold text-[50px]">
        Hello {params.username}
    </h1>
    </section>
  )
}

export default User
```
As you click on user in nav and type user/Yash you see 
```
Hello Yash
```

The `<NavLink>` in **react-router-dom**
- Shows the color change on nav link Click 
```jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
```


<br>
<br>


---

## Part 14: Context API

---

### 14.1 What is the Context API?

- React Context provides a way to **pass data through the component tree** without manually passing props down at every level.
- Useful for **global state** like themes, user data, authentication, etc.

<br>

<div align = "center">

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/5e9b7971dfd10059f8484c7d784539f033451aaf/NodeJS/StoreRoom/ContextApi_magic.png?raw=true"/>
      <br>
      <b>Context-Api Tree Drill</b>
    </td>
  </tr>
</table>

</div>

<br>

### Lets Consider an Example
Here Child1 is Called inside App.jsx and same further
```
App.jsx
   └── Child1.jsx
         └── Child2.jsx
               └── Child3.jsx
```

### Without Context API - Props Drilling at each Child as parent
Here, **AppGenes** prop is passed from **`App → Child1 → Child2 → Child3`**. This is props drilling.

**App.jsx**
```jsx
import Child1 from './components/Child1';

import { useState} from "react";


export default function App() {
//Create a prop inside Parent
  const [genes, setGenes] = useState("AppGenes")

  return (
    <>
    {/*Pass the Prop*/}
     <Child1 genes = {genes}/>
    </>
  );
}
```


**components/Child1.jsx**
```jsx

import Child2 from "./Child2"

const Child1 = ({genes}) => {
  return (
      <section className="w-full absolute mt-20">
          <h1 className="text-center font-bold text-[50px]">
              Hello I am <span className="text-green-400">Child1 </span> called inside <span className="text-red-500">App.jsx </span> Received {genes}
                   <Child2 genes2 = {genes}/>
          </h1>
      </section>
  )
}

export default Child1
```

**components/Child2.jsx**
```jsx
import Child3 from "./Child3"

const Child2 = ({genes2}) => {
  return (
      <section className="w-full absolute mt-20">
          <h1 className="text-center font-bold text-[50px]">
              Hello I am <span className="text-yellow-500">Child2 </span> called inside <span className="text-green-400">Child1 </span>  Received {genes2}
              <Child3 genes3 = {genes2} />
          </h1>
      </section>
  )
}

export default Child2
```

**components/Child3.jsx**
```jsx
const Child3 = ({genes3}) => {
  return (
      <section className="w-full absolute mt-20">
          <h1 className="text-center font-bold text-[50px]">
              Hello I am <span className="text-blue-600">Child3 </span> called inside <span className="text-yellow-500">Child2 </span> Received {genes3}
          </h1>
      </section>
  )
}

export default Child3
```
<div align = "center">

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/8ddea087c44d70ae3a5274dbb25fd385dda83cd1/NodeJS/StoreRoom/Without.PNG?raw=true" width = 600/>
      <br>
      <b>Props Drilling</b>
    </td>
  </tr>
</table>

</div>

<br>

---
> **You can create Context of Any Number of Props that will Be defines inside App.jsx using useState**
---

### With Context Api

**1. Create `context/context.js**`
```js
import { createContext, useContext } from "react";

export const AppGenesContext = createContext("ApppGenes")

// use me inside App.jsx as reference
```


**2. Use This inside Parent from where you want to pass Prop to all componants and their Children**
 - Here App.jsx is the parent

**App.jsx**
```jsx
import { AppGenesContext } from './context/context';

import Child1 from './components/Child1';
import Nav from "./components/Nav";

import { useState} from "react";


export default function App() {
  //You can pass this to all the componants and their nested componants wrapped inside AppGenesContext
  //eg. Child1 and its further Child even Nav can use this prop with context
  const [genes, setGenes] = useState("AppGenes") 

  return (
    <>
    <AppGenesContext.Provider value={genes}>

        <Nav />

       <Child1/>

    </AppGenesContext.Provider>
    </>
  );
}

```


`/componant/Child3.jsx` <br>
**3. Now Use this context in any componant or its nest**
```jsx
import { useContext } from "react"
import { AppGenesContext } from "../context/context"

const Child3 = ({genes3}) => {
const receivedFromContext = useContext(AppGenesContext)

  return (
      <section className="w-full absolute mt-20">
          <h1 className="text-center font-bold text-[50px]">
              Hello I am <span className="text-blue-600">Child3 </span> called inside <span className="text-yellow-500">Child2 </span> Received {receivedFromContext} directly from context
          </h1>
      </section>
  )
}

export default Child3
```

<div align = "center">

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/8654dacdced2a85c42160ff86b1110c56143bcd6/NodeJS/StoreRoom/WithContext.PNG?raw=true" width = 600/>
      <br>
      <b>Context API</b>
    </td>
  </tr>
</table>

</div>




<br>

### 14.2 When to Use Context

- When multiple components at different nesting levels need access to the same data
- Avoids "prop drilling"

<br>

### 14.3 Steps to Use Context

#### 14.3.1 Create Context

```jsx
import { createContext } from 'react';

const UserContext = createContext();
```

#### 14.3.2 Provide Context

```jsx
function App() {
  const user = { name: 'Shiva', role: 'Admin' };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}
```

- Wrap the component tree with the provider
- Pass shared state via `value`

#### 14.3.3 Consume Context (with useContext)

```jsx
import { useContext } from 'react';

function Dashboard() {
  const user = useContext(UserContext);
  return <h1>Welcome, {user.name}</h1>;
}
```

- `useContext` is the hook to consume context inside functional components

<br>

### 14.4 Using Context in Class Components

```jsx
Dashboard.contextType = UserContext;

class Dashboard extends React.Component {
  render() {
    return <h1>Hello, {this.context.name}</h1>;
  }
}
```

- `contextType` is the older way for class components

<br>

### 14.5 Updating Context Value

```jsx
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

<br>

### 14.6 Context Best Practices

- Use **multiple contexts** for separation of concerns (AuthContext, ThemeContext, etc.)
- Do **not overuse** for data that doesn't need to be global

<br>

### 14.7 Summary Table

| Step           | Method                        |
| -------------- | ----------------------------- |
| Create Context | `createContext()`             |
| Provide Value  | `<Context.Provider value={}>` |
| Consume Data   | `useContext(Context)`         |
| Class Usage    | `Class.contextType = Context` |

<br>
<br>


---

## Part 15: Refs and DOM Manipulation
[useRef Documentation](https://react.dev/reference/react/useRef)
- Refs provide a way to **access DOM nodes or React elements** directly.
- Created using `useRef()` in functional components or `React.createRef()` in class components.

#### Usecase - A
---
**useRef** is a React Hook that lets you reference a value that’s not needed for rendering.
- Everytime change takes place inside a componant (eg. counter increment) the entire componant is re-rendered
- As a result, the reference variable declared in that componant that is spposed to update is reset to default value(eg. using let ..let cnt = 0)..
- Thus we use `useRef` to sustain value on rerender


---
> When we change `ref` value, useEffect is not triggered..that is, componant, `state` dont re-render

> But when `state` is changed, (eg. counter inc), `ref` does not re-render
---

**A) Reference Reinitialized / Without useRef**
```jsx
import { useState, useRef, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    let cntLog = 0  //dont use const
    // const ref = useRef(0)

    useEffect(() => {
        cntLog = cntLog + 1
        // ref.current = ref.current + 1

        console.log("Counter has been updated " + cntLog + " times");
        // console.log("Counter has been updated " + ref.current + " times");
    },)


    return (
        <div>
            <p>You clicked {count} times</p>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;
```
```
You Clicked Button 5 times

(5) Counter has been updated 1 times - reinitialized to 0 everytime
```

<br>

**B) Reference Update on Re-render / Not reinitialized**
```jsx
import { useState, useRef, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // let cntLog = 0  //dont use const
    const ref = useRef(0)

    useEffect(() => {
        // cntLog = cntLog + 1
        ref.current = ref.current + 1

        // console.log("Counter has been updated " + cntLog + " times");
        console.log("Counter has been updated " + ref.current + " times");
    },)


    return (
        <div>
            <p>You clicked {count} times</p>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Counter;
```
```
You Clicked Button 5 times

(5) Counter has been updated 5 times - Not reinitialized to 0 
```

<br>

#### Usecase - B -  Manipulating the DOM and referencing


- Refs allow you to bypass React's declarative approach
- Should be used **sparingly** and only when necessary
1. We avoid DOM manipulation in react
2. Here without DOM manip we use `ref` to reference variables from anywhere in componant
3. So to access a `DOM element` we use refVar.current
4. Thus, when we want to access an element lot of times, we create its ref and use it with ref.current 

```jsx
import { useState, useRef, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);


    const refBtn = useRef(null);


    useEffect(() => {
        refBtn.current.style.backgroundColor = "red"
        console.log("First Rendering usedEffect component"); 
    },[ ])


    return (
        <div>
            <p>You clicked {count} times</p>
            <button ref = {refBtn} className='btn btn-primary' onClick={() => setCount(count + 1)}>Click me</button>
            

            <br/>
            {/* Referencing the above button to vanish */}
            <button className='btn btn-secondary' onClick={() => refBtn.current.style.display = "none"}>Hide Red Button</button>
            
            {/* <button className='btn btn-secondary' onClick={() => refBtn.current.style.backgroundColor = "blue"}>Change Color</button> */}
        </div>
    );
}

export default Counter;
```
```
Click on `Hide Red Button`  that references the redButton to vanish it
```

<br>

### Pitfalls
1. Reading or writing a ref during rendering breaks these expectations.

```jsx
function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}
```


<br>

2. You can read or write refs from event handlers or effects instead.

```jsx
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```

<br>







### When to Use Refs

- Managing focus, text selection, or media playback
- Triggering imperative animations
- Integrating with third-party DOM libraries (e.g., jQuery)

<br>

### Eg. Creating and Using Refs (Functional Components) - FOcus

```jsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
```

- `inputRef.current` holds the actual DOM element




<br>



Example: Scroll into view

```jsx
function ScrollBox() {
  const boxRef = useRef();

  const scrollToBottom = () => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  };

  return (
    <div ref={boxRef} style={{ height: '100px', overflow: 'auto' }}>
      <p>Some content...</p>
      <button onClick={scrollToBottom}>Scroll</button>
    </div>
  );
}
```

<br>
<br>


---

## Part 16: useReducer & useMemo Hooks

---

### 16.1 `useReducer` Hook

#### 16.1.1 What is `useReducer`?

- An alternative to `useState` for complex state logic
- Suitable when:
  - Next state depends on previous state
  - Multiple sub-values or nested objects

#### 16.1.2 Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

#### 16.1.3 Example

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

#### 16.1.4 When to Use

- Complex state logic
- Shared state logic between components

<br>

### 16.2 `useMemo` Hook

#### 16.2.1 What is `useMemo`?

- Memoizes a **computed value** to avoid unnecessary recalculations on each render.
- Similar to **`caching`** a value until dependencies change.

#### 16.2.2 Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Eg: Lets consider a Heavy Find Operation simulation, that finds num 10000 from an array of 20000**
 - Without usememo() everytime the componant rendered, the heavy find operation runs again
 - With usememo() a value is **memoized**


**Counter2**


```jsx
import { useState, useMemo } from 'react';

// Simulate a medium-sized array
const nums = new Array(20_000).fill(0).map((_, i) => ({
    index: i,
    isMagical: i === 10_000
}));

function Counter2() {
    const [count, setCount] = useState(0);

    // // ❌ Expensive find() runs on every render..that is componant render everytime and find runs everytime
    // const magical = nums.find(item => {
    //     console.log("Running heavy find()...");
    //     return item.isMagical === true;
    // });

    // ✅ Expensive find() is now memoized — runs only once..that is componant render everytime and find runs once and stores value like cache
    const magical = useMemo(() => {
        console.log("Running heavy find()...");
        return nums.find(item => item.isMagical === true);
    }, []); // Empty dependency: runs only on first render


    const handleClick = () => {
        setCount(count => count + 1);
    };

    return (
        <>
            <div>
                <h2>No useMemo: Moderate Computation Each Render</h2>
                <p>Magical number is <strong>{magical?.index}</strong></p>
            </div>

            <div className="card">
                <button onClick={handleClick}>
                    Count is {count}
                </button>
            </div>
        </>
    );
}

export default Counter2;
```
```
Without usememo(), the counter works very slowly as the heavy operation is performed everytime
```
```
With usememo() counter workds fluently, as no recalculation is to be performed
```

#### Thus 
- With usememo your app workds without lag and performance is optimized
   

#### 16.2.3 Example

```jsx
function ExpensiveComponent({ num }) {
  const slowSquare = (n) => {
    console.log('Calculating...');
    for (let i = 0; i < 1e8; i++) {} // slow loop
    return n * n;
  };

  const result = useMemo(() => slowSquare(num), [num]);

  return <p>Square: {result}</p>;
}
```

- `slowSquare` runs only when `num` changes

#### 16.2.4 When to Use

- Expensive calculations in render
- Avoid recomputing values unnecessarily

<br>

### 16.3 Summary Table

| Hook         | Purpose                        | When to Use                      |
| ------------ | ------------------------------ | -------------------------------- |
| `useReducer` | State management via reducer   | Complex state, dependent updates |
| `useMemo`    | Memoize expensive computations | Heavy computation on rerender    |

<br>
<br>


<br>

## Part 17: Custom Hooks

<br>

### 17.1 What are Custom Hooks?

- A **custom hook** is a JavaScript function whose name starts with `use` and can call other hooks.
- They allow you to **reuse stateful logic** between components without repeating code.

<br>

### 17.2 Why Use Custom Hooks?

- Encapsulate logic cleanly
- Improve readability and reusability
- Separate concerns (e.g., fetch logic, form handling, toggles)

<br>

### 17.3 Creating a Custom Hook

```jsx
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle];
}
```

### 17.4 Using a Custom Hook

```jsx
function ToggleButton() {
  const [isOn, toggleIsOn] = useToggle();

  return <button onClick={toggleIsOn}>{isOn ? 'ON' : 'OFF'}</button>;
}
```

<br>

### 17.5 Example: useFetch Hook

```jsx
import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
```

Usage:

```jsx
const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');
```

<br>

### 17.6 Rules for Custom Hooks

- Must start with the word `use`
- Can call other hooks inside
- Must follow the **Rules of Hooks**:
  - Top-level only
  - Only inside functional components or other hooks

<br>

### 17.7 Summary Table

| Feature     | Description                            |
| ----------- | -------------------------------------- |
| Custom Hook | Reusable function using built-in hooks |
| Naming      | Must start with `use`                  |
| Purpose     | Encapsulate and reuse logic            |
| Reusability | Share between multiple components      |

<br>
<br>


---

## Part 18: Lifting State Up

---

### 18.1 What is Lifting State Up?

- In React, **state is lifted up** to the nearest common ancestor to allow **shared access** between sibling components.
- Helps maintain a **single source of truth**.

<br>

### 18.2 Problem: Sibling Components Can't Share State Directly

```jsx
function Parent() {
  return (
    <>
      <ChildA />
      <ChildB />
    </>
  );
}
```

- ChildA and ChildB are siblings and cannot share state directly.

<br>

### 18.3 Solution: Move State to Parent

```jsx
function Parent() {
  const [text, setText] = useState('');

  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </>
  );
}

function ChildA({ text, setText }) {
  return <input value={text} onChange={e => setText(e.target.value)} />;
}

function ChildB({ text }) {
  return <p>Typed: {text}</p>;
}
```

- State `text` is now **shared** between ChildA and ChildB via props

<br>

### 18.4 Benefits of Lifting State

- Ensures consistent state across components
- Avoids redundant or conflicting local state
- Encourages thinking in terms of **data flow**

<br>

### 18.5 When to Lift State

- Two or more components need to **view or modify** the same state
- Components must **react to changes** in shared data

<br>

### 18.6 Lifting State vs Context

| Technique     | Use When                              |
| ------------- | ------------------------------------- |
| Lifting State | Few components share data (locally)   |
| Context API   | Global or deeply nested state sharing |

<br>

### 18.7 Summary Table

| Concept           | Description                             |
| ----------------- | --------------------------------------- |
| Lifting State     | Moving state to nearest common ancestor |
| Props Down        | Pass state and setters via props        |
| Single Source     | Keeps one consistent state copy         |
| Avoid Duplication | Prevents multiple unsynced states       |

<br>
<br>


---

## Part 19: React Fragments & Portals

---

### 19.1 React Fragments

#### 19.1.1 What is a Fragment?

- A Fragment lets you group a list of children **without adding extra nodes** to the DOM.

#### 19.1.2 Why Use It?

- Avoid unnecessary `<div>` wrappers
- Useful when returning **multiple elements** from a component

#### 19.1.3 Syntax

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
);
```

Or using the full form:

```jsx
import React from 'react';

return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Description</p>
  </React.Fragment>
);
```

#### 19.1.4 When to Use Fragments

- Returning multiple sibling elements
- Table rows or list items inside loops

```jsx
function Table() {
  return (
    <table>
      <tbody>
        {[1, 2].map(i => (
          <React.Fragment key={i}>
            <tr><td>Row {i}</td></tr>
            <tr><td>Another {i}</td></tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
```

<br>

### 19.2 React Portals

#### 19.2.1 What is a Portal?

- A Portal lets you render children **into a DOM node** outside the root DOM hierarchy.
- Used for **modals, tooltips, popups** that need to break out of layout/container constraints.

#### 19.2.2 Syntax

```jsx
import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal">{children}</div>,
    document.getElementById('modal-root')
  );
}
```

In HTML:

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

#### 19.2.3 When to Use Portals

- Modals
- Tooltips
- Toasts/Notifications
- Dropdowns that break CSS layout

<br>

### 19.3 Summary Table

| Feature  | Purpose                                     | Syntax Example                       |
| -------- | ------------------------------------------- | ------------------------------------ |
| Fragment | Group elements without extra DOM nodes      | `<></>` or `<React.Fragment>`        |
| Portal   | Render component outside root DOM hierarchy | `createPortal(component, container)` |

<br>
<br>


---

## Part 20: Performance Optimization

---

### Why Optimize React Apps?

- Improve app speed and responsiveness
- Reduce unnecessary renders
- Enhance user experience, especially for large applications

<br>

### A) Memoization with `React.memo`

- memo is used to `memoze` **componant**
- Prevents unnecessary re-renders of functional components if props haven't changed

---
> Note : In React, everytime state Changes, all the componants in App.jsx associated with state, changes

> This also causes some other components having no relation with that state to re render

> As a result they are also re rendered

> So we use `memo` to avoid  re-render and render only on props change
---

```jsx
const MyComponent = React.memo(function MyComponent({ name }) {
  return <p>Hello {name}</p>;
});
```

- Use when component output is pure and only depends on props

Eg With and Without Memo
**/App.jsx**

```
// App.jsx
import { useState } from 'react';
import Child from './Child';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(prev => prev + 1);

    return (
        <div>
            <h1>Parent Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>

            {/* Even though label doesn't change, Child re-renders every time */}
            <Child label="I never change" />
        </div>
    );
}

export default App;
```
#### First: Without `memo`
**Child.jsx**
```jsx
// Child.jsx
function Child({ label }) {
    console.log("Child rendered");
    return <h2>Child Component: {label}</h2>;
}

export default Child;
```
```
Parent Count: 0
Child rendered
// click ➜
Parent Count: 1
Child rendered

// click ➜
Parent Count: 2
Child rendered

// click ➜
Parent Count: 3
Child rendered

// click ➜
Parent Count: 5
Child rendered
```


#### With `memo`
**Child.jsx**
```jsx
// Child.jsx
import { memo } from 'react';

function Child({ label }) {
    console.log("Child rendered");
    return <h2>Child Component: {label}</h2>;
}

export default memo(Child); //  Wrapped with memo

```

```
Parent Count: 0
Child rendered

// click ➜
Parent Count: 1
(no Child render) 

// click ➜
Parent Count: 2
(no Child render) 

// click ➜
Parent Count: 3
(no Child render) 

// click ➜
Parent Count: 4
(no Child render) 
```




<br>

### B) `useMemo` for Expensive Computations
- Memoize a **value**
- Caches calculated results between renders

```jsx
const expensiveValue = useMemo(() => computeHeavyTask(data), [data]);
```

- Use when calculations are CPU-intensive or complex

<br>

### C) `useCallback` for Stable Functions

- Memoizes **callback functions** to prevent re-creation on each render

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

- Especially useful when passing callbacks to child components


**Eg: App.jsx**
```jsx
// App.jsx
import { useState, useCallback } from 'react';
import Child from './components/Child';

function App() {
    const [count, setCount] = useState(0);

    // // 🔴 This function is recreated on every render!
    // const handleClick = () => {
    //     console.log("Clicked from child");
    // };

    // ✅ Memoized function — won't change across renders
    const handleClick = useCallback(() => {
        console.log("Clicked from child");
    }, []); // empty dependency → stable reference

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child onClick={handleClick} />
        </div>
    );
}

export default App;

```

**Child.jsx**
```jsx
// Child.jsx
import { memo } from "react";

function Child({ onClick }) {
    console.log("Child rendered");
    return <button onClick={onClick}>Child Button</button>;
}

export default memo(Child); // memoized to avoid unnecessary renders

```


#### Without `useCallback()`
- App re-renders on increment
- handleClick gets recreated every time 
- Since Child receives a new function prop, it re-renders — even though it's memoized! because it thinks new prop recieved 

#### With `useCallback()`
- The function() handleClick gets **Freezed ❄**
- handleClick is memoized and stays the same function between renders
- Child receives same props, so it doesn’t re-render unless necessary

#### Remember
-  Dont use `useCallback()` on working functions that operate a dynamic value (eg. a counting function) as it will be freezed on first return output
-  Use on constant value operating functions like this one aboce performing just `console.log()`


<br>



Thus

| Tool          | Purpose                 | Used On          | Prevents unnecessary...         |
| ------------- | ----------------------- | ---------------- | ------------------------------- |
| `memo`        | Memoize a **component** | React Component  | Re-renders (if props unchanged) |
| `useMemo`     | Memoize a **value**     | Inside Component | Expensive recalculations        |
| `useCallback` | Memoize a **function**  | Inside Component | Re-creation of functions        |


<br>

### D) Code Splitting with `React.lazy` & `Suspense`

- Loads components **only when needed**

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

<br>

### E) Avoid Anonymous Functions in JSX

Bad:

```jsx
<button onClick={() => handleClick(id)}>Click</button>
```

Better:

```jsx
const handleClickMemo = useCallback(() => handleClick(id), [id]);
<button onClick={handleClickMemo}>Click</button>
```

<br>

### F) Avoid Unnecessary State and Props

- Minimize component state
- Avoid deep prop chains (lift state or use context wisely)

<br>

### G) Virtualize Long Lists

- Use libraries like `react-window` or `react-virtualized`

```jsx
import { FixedSizeList as List } from 'react-window';

<List
  height={300}
  itemCount={1000}
  itemSize={35}
  width={300}
>
  {({ index, style }) => <div style={style}>Item {index}</div>}
</List>
```

<br>

###  Summary Table

| Technique            | Purpose                                  |
| -------------------- | ---------------------------------------- |
| `React.memo`         | Skip re-renders if props unchanged       |
| `useMemo`            | Cache expensive values                   |
| `useCallback`        | Preserve function identity               |
| `React.lazy`         | Code splitting for dynamic imports       |
| Virtualized Lists    | Render only visible items in large lists |
| Minimize State/Props | Keep components focused and optimized    |

<br>
<br>


---

## Part 21: React with External Tools

---

### 21.1 Integrating React with External Libraries & Tools

React can work seamlessly with external tools for routing, HTTP requests, state management, styling, and more. Below are common categories and tools used alongside React:

<br>

### 21.2 1. State Management

#### 21.2.1 Redux

- Manages complex global state outside of components
- Uses `store`, `actions`, and `reducers`

```bash
npm install redux react-redux
```

```jsx
import { Provider } from 'react-redux';
import store from './store';

<Provider store={store}>
  <App />
</Provider>
```

#### 21.2.2 Zustand, Jotai, Recoil

- Simpler, more modern state managers
- Hooks-based, minimal boilerplate

<br>

### 21.3 2. HTTP Requests

#### 21.3.1 Axios

```bash
npm install axios
```

```jsx
import axios from 'axios';

useEffect(() => {
  axios.get('/api/data')
       .then(res => setData(res.data));
}, []);
```

#### 21.3.2 Fetch API

- Native JavaScript option

```jsx
fetch('/api/data')
  .then(res => res.json())
  .then(data => setData(data));
```

<br>

### 21.4 3. Styling Tools

#### 21.4.1 Tailwind CSS

- Utility-first CSS framework

```bash
npm install -D tailwindcss
npx tailwindcss init
```

```js
// tailwind.config.js
content: ['./src/**/*.{js,jsx}']
```

#### 21.4.2 Styled Components

- CSS-in-JS library

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
`;
```

<br>

### 21.5 4. Routing Libraries

- `react-router-dom` (covered previously)
- Integrates seamlessly with React SPA architecture

<br>

### 21.6 5. Form Libraries

#### 21.6.1 Formik + Yup

- Manage form state and validation

```bash
npm install formik yup
```

#### 21.6.2 React Hook Form

- Lightweight, performant form handling

```bash
npm install react-hook-form
```

<br>

### 21.7 6. Testing Tools

- **Jest**: Unit testing framework
- **React Testing Library**: For testing React components via the DOM
- **Cypress**: End-to-end testing

<br>

### 21.8 Summary Table

| Category         | Tool(s)                     | Purpose                     |
| ---------------- | --------------------------- | --------------------------- |
| State Management | Redux, Zustand, Recoil      | Global app state            |
| HTTP Requests    | Axios, Fetch                | API calls                   |
| Styling          | Tailwind, Styled-Components | CSS and UI styling          |
| Forms            | Formik, React Hook Form     | Form state & validation     |
| Testing          | Jest, RTL, Cypress          | Unit and end-to-end testing |
| Routing          | React Router                | SPA routing                 |

<br>
