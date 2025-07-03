<h1 align="center"> <b>React-Redux</b></h1>


## Part 1: Redux Basics (Core Concepts)

###  What is Redux?

Redux is a **predictable state container** for JavaScript apps. It helps manage application state in a **centralized** and **structured** way, especially useful in complex apps with many components.

### Why Use Redux with React?

React handles local component state well. But for **global state** (e.g., user data, theme, cart), Redux helps:

* Centralize state in one place
* Share state easily between components
* Debug using Redux DevTools
* Make state updates predictable via reducers

### Three Core Principles of Redux

1. **Single Source of Truth**: One global store holds the entire state of your app.
2. **State is Read-Only**: You can’t modify state directly; use actions to describe changes.
3. **Changes via Pure Functions**: Reducers specify how state changes in response to actions.

### Key Terminologies

* **Store**: The single object that holds application state.
* **Action**: A plain JS object with a `type` property. Describes **what happened**.
* **Reducer**: A function that takes previous state and an action, returns new state.
* **Dispatch**: A method to send actions to the reducer.

### Basic Redux Flow

1. Component dispatches an **action**
2. **Reducer** receives current state and action, returns new state
3. **Store** updates and notifies subscribed components

```js
// Action
const incrementAction = { type: 'INCREMENT' };

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);

// Dispatching
store.dispatch(incrementAction);
```

### Summary Table

| Concept  | Description                        |
| -------- | ---------------------------------- |
| Store    | Holds the entire state tree        |
| Action   | Describes a state change intention |
| Reducer  | Pure function to update the state  |
| Dispatch | Sends an action to the reducer     |

<br>

---

<br>

## Part 2: Setting Up Redux in React (Without Redux Toolkit)

### 1. Installation

To use Redux with React, install these packages:

```bash
npm install redux react-redux
```

* `redux`: Core Redux library
* `react-redux`: Official bindings to connect Redux with React components


<br>

### 2. Create the Reducer

Define your reducer logic that manages a part of the app state.

```js
// reducers/counterReducer.js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
```


<br>

### 3. Create the Redux Store

```js
// store.js
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);
export default store;
```


<br>

### 4. Provide Store to React App

Wrap your root component with the `<Provider>` from `react-redux`.

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```


<br>

### 5. Access Redux State with useSelector

Use the `useSelector` hook to read state from the store.

```js
// Counter.js
import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  return <h1>Count: {count}</h1>;
}

export default Counter;
```

<br>

### 6. Dispatch Actions with useDispatch

Use `useDispatch` to send actions to reducers.

```js
// Counter.js
import React from 'react';
import { useDispatch } from 'react-redux';

function CounterControls() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

export default CounterControls;
```

<br>

### 7. Summary Table

| Item            | Role                                   |
| --------------- | -------------------------------------- |
| `createStore()` | Creates a Redux store                  |
| `<Provider>`    | Makes the Redux store available        |
| `useSelector`   | Accesses data from the Redux store     |
| `useDispatch`   | Dispatches an action to Redux reducers |

<br>

---

<br>

## Part 3: React-Redux Hooks

### 1. Introduction

React-Redux provides custom hooks to interact with the Redux store inside functional components:

* `useSelector` — to **read** values from the store
* `useDispatch` — to **send** actions to the store

These hooks are the preferred modern way of accessing Redux in React.


<br>

### 2. useSelector

* Syntax: `const data = useSelector(callback)`
* Takes a callback function with the Redux state as the argument
* Returns the selected slice of state

#### Example:

```js
import { useSelector } from 'react-redux';

function Profile() {
  const username = useSelector((state) => state.user.name);
  return <p>User: {username}</p>;
}
```

#### Key Points:

* Runs on every Redux state update
* You can use `shallowEqual` to prevent unnecessary re-renders

```js
import { shallowEqual, useSelector } from 'react-redux';
const userData = useSelector((state) => ({
  name: state.user.name,
  age: state.user.age
}), shallowEqual);
```


<br>

### 3. useDispatch

* Syntax: `const dispatch = useDispatch()`
* Returns the `dispatch` function to send actions

#### Example:

```js
import { useDispatch } from 'react-redux';

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return <button onClick={handleLogout}>Logout</button>;
}
```

<br>

### 4. Best Practices

* Use **selectors** (functions that read state) to keep components clean
* Extract selectors to a separate file if reused across components
* Keep action types in constants to avoid typos

#### Selector Example:

```js
// selectors/userSelectors.js
export const selectUserName = (state) => state.user.name;
```

Then use it:

```js
import { useSelector } from 'react-redux';
import { selectUserName } from './selectors/userSelectors';

const username = useSelector(selectUserName);
```

<br>

### 5. Summary Table

| Hook          | Purpose                                 |
| ------------- | --------------------------------------- |
| `useSelector` | Reads data from the Redux store         |
| `useDispatch` | Sends actions to update the Redux store |



<br>

---

<br>

## Part 4: Redux Toolkit (Modern Redux Approach)

### 1. What is Redux Toolkit?

Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It simplifies store setup, reducer creation, and reduces boilerplate.

### 2. Installation

```bash
npm install @reduxjs/toolkit react-redux
```

### 3. Core APIs in Redux Toolkit

* `configureStore()` — to set up the store
* `createSlice()` — to generate actions and reducers
* `createAsyncThunk()` — to handle asynchronous logic (covered in next part)


<br>

### 4. Creating a Slice

A slice includes the state, reducers, and automatically generated actions.

```js
// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
    decrement: (state) => { state.count -= 1 },
    reset: (state) => { state.count = 0 }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

### 5. Setting Up Store with configureStore

```js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

### 6. Using Redux Toolkit in Components

```js
// CounterComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counterSlice';

function CounterComponent() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default CounterComponent;
```


<br>

### 7. Summary Table

| API              | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `createSlice`    | Creates reducer, actions, and initial state |
| `configureStore` | Sets up the Redux store                     |
| `useSelector`    | Reads state from store                      |
| `useDispatch`    | Dispatches actions from the slice           |



<br>

---

<br>

## Part 5: Redux Toolkit with Async Logic (createAsyncThunk)

### 1. Why Handle Async in Redux?

Async operations like API calls cannot be handled directly inside reducers. Redux Toolkit provides `createAsyncThunk` to manage such logic while keeping reducers pure.


<br>


### 2. What is createAsyncThunk?

`createAsyncThunk` is a helper to create **thunk actions** for performing asynchronous tasks and managing their loading, success, and error states automatically.

### 3. Basic Syntax

```js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
  }
);
```

* First argument: action type string
* Second argument: async function that returns a promise


<br>

### 4. Using in a Slice

```js
// features/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return await res.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;
```


<br>

### 5. Using in a Component

```js
// UsersList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './features/usersSlice';

function UsersList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
```

<br>

### 6. Summary Table

| Method             | Purpose                                    |
| ------------------ | ------------------------------------------ |
| `createAsyncThunk` | Handles async logic like fetching API data |
| `.pending`         | Sets loading state be                      |


<br>

---

<br>

## Part 6: Redux Middleware

### 1. What is Middleware in Redux?

Middleware in Redux is a function that runs **between dispatching an action and the moment it reaches the reducer**. It can:

* Log actions
* Delay actions
* Run async operations (e.g., API calls)


<br>

### 2. Built-in Middleware in Redux Toolkit

Redux Toolkit comes with **redux-thunk** middleware preconfigured.

```js
import { configureStore } from '@reduxjs/toolkit';
import someReducer from './features/someSlice';

const store = configureStore({
  reducer: {
    some: someReducer
  }
  // thunk is included by default
});
```


<br>

### 3. redux-thunk Middleware

Thunk allows action creators to return a function instead of an object. It is used for handling async logic.

Example with custom thunk:

```js
const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_START' });
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (err) {
    dispatch({ type: 'FETCH_ERROR', error: err.message });
  }
};
```

Note: `createAsyncThunk` is a higher-level wrapper over thunk.


<br>

### 4. Custom Middleware

You can also create your own middleware for tasks like logging, analytics, etc.

```js
const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', storeAPI.getState());
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
});
```


<br>

### 5. Summary Table

| Middleware Type    | Description                                  |
| ------------------ | -------------------------------------------- |
| `redux-thunk`      | Default async logic handler in Redux Toolkit |
| `createAsyncThunk` | Simplified async wrapper built on thunk      |
| Custom middleware  | Logs, analytics, auth handling, etc.         |



<br>

---

<br>

## Part 7: Folder Structure and Best Practices

### 1. Why Structure Matters

A good folder structure:

* Improves scalability and readability
* Separates logic clearly
* Makes debugging and testing easier


<br>

### 2. Recommended Redux Toolkit Folder Structure

```
src/
│
├── app/
│   └── store.js               # configureStore defined here
│
├── features/
│   ├── counter/
│   │   ├── counterSlice.js    # createSlice with reducers
│   │   └── CounterComponent.js
│   │
│   └── users/
│       ├── usersSlice.js      # handles fetchUsers async logic
│       └── UsersList.js
│
├── selectors/                # re-usable selectors (optional)
│   └── userSelectors.js
│
└── index.js                  # App root with <Provider>
```


<br>

### 3. Naming Conventions

* Use **slice name** for folder: `counter/`, `auth/`, `products/`
* Name slice files as `xyzSlice.js`
* Keep related UI and logic together inside the same folder (optional)


<br>

### 4. Best Practices

* Keep each slice focused on a single feature
* Use `createAsyncThunk` for API logic
* Use `useSelector` and `useDispatch` in components only
* Avoid large single files; split code into modules
* Use `builder` syntax in `extraReducers`
* Use constants for action types if not using Toolkit


<br>

### 5. Summary Table

| Practice                        | Benefit                                   |
| ------------------------------- | ----------------------------------------- |
| Split features into folders     | Easier to scale and maintain              |
| Use `createSlice()` per feature | Keeps logic encapsulated                  |
| Place UI and logic nearby       | Improves cohesion, easier to locate files |
| Extract selectors/actions       | Reuse and testing                         |



<br>

---

<br>

## Part 8: Interview Prep (Redux vs Context API, Key Questions)

### 1. Redux vs Context API

| Feature           | Redux                                 | Context API                         |
| ----------------- | ------------------------------------- | ----------------------------------- |
| Purpose           | State management (especially global)  | Passing data through component tree |
| Boilerplate       | Higher (without Toolkit)              | Low                                 |
| Async Handling    | Built-in via middleware (e.g., thunk) | Manual                              |
| DevTools          | Yes (Redux DevTools)                  | No                                  |
| Re-render Control | Better with Redux                     | Can cause excessive re-renders      |
| Use Case          | Large apps with complex state         | Small/medium apps with simple state |

#### Summary:

* Use **Context API** for basic state (theme, user auth status)
* Use **Redux** when multiple components need complex, shared state and async logic


<br>

### 2. Common Interview Questions

#### Basic Level

1. What is Redux and why is it used?
2. What are the core principles of Redux?
3. What is the difference between an action and a reducer?
4. What is a store in Redux?

#### Intermediate Level

5. How does `useSelector` work?
6. What is the purpose of `useDispatch`?
7. Explain `createSlice` and its benefits
8. What is `createAsyncThunk` and when should you use it?
9. What are `extraReducers` in Redux Toolkit?

#### Advanced Level

10. How do you handle side effects in Redux?
11. What is middleware? Can you create one?
12. Compare Redux Toolkit with traditional Redux
13. How do you optimize performance in Redux-based apps?
14. How does Redux differ from React Context?


<br>

### 3. Summary Table

| Topic               | Key Insight                              |
| ------------------- | ---------------------------------------- |
| Redux vs Context    | Redux for complex shared state and async |
| Core Concepts       | Store, Action, Reducer, Dispatch         |
| Toolkit Advantages  | Less boilerplate, built-in async support |
| Interview Questions | Know basics, toolkit, async, performance |



<br>

---

<br>




