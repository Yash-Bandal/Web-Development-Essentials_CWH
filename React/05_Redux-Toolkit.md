# Redux (Without Toolkit) - Basics Overview

## 1. What is Redux?

Redux is a **JavaScript state management library** used to manage the global state of an application. It is commonly used with React.

## 2. Core Concepts

* **Store**: Holds the entire application state.
* **Action**: A plain JS object describing *what* happened (must have a `type` field).
* **Reducer**: A function that receives the current state and an action, and returns the new state.
* **Dispatch**: Sends actions to the reducer via the store.
* **Subscribe**: Allows components to listen for state changes.

<br>

## 3. Example Flow (Without Redux Toolkit)

```javascript
// action.js
export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

// reducer.js
const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};
export default counterReducer;

// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;

// App.js (React)
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { increment } from './action';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```

<br>

## 4. Drawbacks of Classic Redux

* Too much boilerplate: actions, action creators, reducers all separate.
* Verbose switch-case logic.
* Harder to scale and maintain.

<br>

---

<br>


# Redux Toolkit (RTK) - Part 1: Introduction and Core Concepts

## 1. Why Redux Toolkit?

Redux Toolkit (RTK) is the **official, recommended** way to write Redux logic. It simplifies Redux by reducing boilerplate and improving code readability.

### Key Benefits:

* Fewer files and lines of code
* Built-in support for immutable updates
* Simplified store setup
* Supports async logic with `createAsyncThunk`

<br>

## 2. Core APIs

* `configureStore()` – Sets up the store with good defaults
* `createSlice()` – Automatically generates actions and reducers
* `createAsyncThunk()` – Handles async logic (e.g., API calls)
* `Provider` – Connects React with Redux store
* `useDispatch()` – Dispatches actions
* `useSelector()` – Reads state from the store

<br>

## 3. RTK vs Classic Redux

| Feature       | Classic Redux        | Redux Toolkit               |
| ------------- | -------------------- | --------------------------- |
| Boilerplate   | High                 | Minimal                     |
| Setup         | Manual (createStore) | Automatic (configureStore)  |
| Reducers      | switch-case          | createSlice                 |
| Async Support | Custom/middleware    | Built-in (createAsyncThunk) |

---

## 4. File Structure Example

```
src/
├── app/
│   └── store.js
├── features/
│   └── counter/
│       ├── counterSlice.js
│       └── Counter.js
└── App.js
```


<br>

---

<br>

# Redux Toolkit (RTK) - Part 2: Counter App with `createSlice()`

## 1. Setup

Make sure you have React and Redux Toolkit installed:

```bash
npm install @reduxjs/toolkit react-redux
```

<br>

## 2. Create the Redux Store

### `app/store.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

<br>

## 3. Create a Slice

### `features/counter/counterSlice.js`

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

<br>

## 4. Create Counter Component

### `features/counter/Counter.js`

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;
```

<br>

## 5. Integrate Store in App

### `App.js`

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/counter/Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```

<br>

## 6. Summary

* `createSlice()` replaces action types, creators, and reducers.
* Redux logic is colocated in a single slice file.
* State is updated directly using Immer (no need to return new state manually).

<br>

---

<br>

# Redux Toolkit (RTK) - Part 3: Async Logic with `createAsyncThunk()`

## 1. What is `createAsyncThunk()`?

`createAsyncThunk` simplifies handling **asynchronous logic** like API calls. It automatically dispatches actions for the request lifecycle:

* `pending` – request started
* `fulfilled` – request succeeded
* `rejected` – request failed

<br>

## 2. File Structure Example

```
src/
├── app/
│   └── store.js
├── features/
│   └── posts/
│       ├── postsSlice.js
│       └── Posts.js
└── App.js
```

<br>

## 3. Create the Async Thunk and Slice

### `features/posts/postsSlice.js`

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
```

<br>

## 4. Create the Component

### `features/posts/Posts.js`

```javascript
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
```

<br>

## 5. Update Store

### `app/store.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
```
<br>

## 6. Summary

* `createAsyncThunk()` handles API calls with auto-generated pending, fulfilled, and rejected actions.
* `extraReducers` lets you respond to those lifecycle actions.
* This pattern helps manage server-side data clearly and predictably.


<br>

---

<br>

# Redux Toolkit (RTK) - Part 4: Organizing Large Applications

## 1. Feature-Based Folder Structure

Organize files **by feature**, not by type. Each feature manages its own slice, components, and related logic.

### Example Structure

```
src/
├── app/
│   └── store.js
├── features/
│   ├── counter/
│   │   ├── counterSlice.js
│   │   └── Counter.js
│   ├── posts/
│   │   ├── postsSlice.js
│   │   └── Posts.js
│   └── auth/
│       ├── authSlice.js
│       └── Login.js
└── App.js
```

<br>

## 2. Store Setup with Multiple Slices

### `app/store.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    auth: authReducer,
  },
});
```

<br>

## 3. Tips for Scaling

* **Encapsulate logic per feature**: Keep slices, API calls, and UI together.
* Use `createAsyncThunk()` per feature for API requests.
* Use reusable components where needed (like buttons or forms).

<br>

## 4. Optional Utilities for Large Apps

* **RTK Query** – Built-in data fetching and caching tool
* **Redux Persist** – Persist Redux state across page reloads
* **Middleware** – Add custom logic for logging, auth, etc.

<br>

## 5. Summary

* Organize Redux logic using feature folders.
* Combine multiple slices cleanly in `configureStore()`.
* Scaling becomes easier with modular, maintainable code.

<br>

---

<br>

# Redux Toolkit (RTK) - Part 5: Introduction to RTK Query

## 1. What is RTK Query?

RTK Query is a **powerful data-fetching and caching tool** built into Redux Toolkit. It eliminates the need for `createAsyncThunk` and manual reducers for API calls.

### Key Benefits

* Auto-fetching, caching, and updating
* Automatic loading and error states
* Optimistic updates and pagination support

<br>

## 2. Install

```bash
npm install @reduxjs/toolkit react-redux
```

(No extra package needed—RTK Query is included in RTK)


<br>

## 3. Create API Slice

### `features/api/apiSlice.js`

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
```

<br>

## 4. Update Store

### `app/store.js`

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
```

<br>

## 5. Create Component

### `features/api/PostsRTKQuery.js`

```javascript
import React from 'react';
import { useGetPostsQuery } from './apiSlice';

function PostsRTKQuery() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsRTKQuery;
```

<br>

## 6. Summary

* RTK Query replaces `createAsyncThunk`, `extraReducers`, and manual state.
* Auto-handles `isLoading`, `isError`, and response data.
* Clean and efficient for CRUD operations.

<br>

---

<br>

# Redux Toolkit (RTK) - Part 6: RTK Query Advanced (Mutations & Refetching)

## 1. What are Mutations?

Mutations are used in RTK Query to perform **write operations** like POST, PUT, PATCH, and DELETE.

<br>

## 2. Adding Mutations to API Slice

### `features/api/apiSlice.js`

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = apiSlice;
```

<br>

## 3. Using the Mutation in Component

### `features/api/AddPost.js`

```javascript
import React, { useState } from 'react';
import { useAddPostMutation } from './apiSlice';

function AddPost() {
  const [title, setTitle] = useState('');
  const [addPost] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      await addPost({ title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
```

<br>

## 4. Auto Refetching (Optional)

You can enable auto refetching when a component gains focus or reconnects:

```javascript
<Provider store={store}> 
  <ApiProvider api={apiSlice}> 
    <App /> 
  </ApiProvider>
</Provider>
```

Or configure globally:

```javascript
baseQuery: fetchBaseQuery({
  baseUrl: '/api',
}),
refetchOnFocus: true,
refetchOnReconnect: true
```

<br>

## 5. Summary

* Mutations allow POST/PUT/DELETE requests.
* RTK Query automatically manages cache updates.
* Supports auto refetching on focus or network reconnection.

<br>

---

<br>
