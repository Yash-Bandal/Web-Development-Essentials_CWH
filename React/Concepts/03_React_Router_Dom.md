# React Router DOM

<br>

[Router-Version6+](https://reactrouter.com/) <br>
[Reference Version5](https://v5.reactrouter.com/web/guides/quick-start)

<br>

---
> `Switch` is updated in version 6 with routes in diff sytax, see old Syntax in doc above
---

## 1. What is React Router?
- **React Router DOM** is a routing library for React apps.
- It allows navigation without refreshing the page (SPA behavior).

---

## 2. Installation
```bash
npm install react-router-dom
```

---

## 3. Key Components and APIs

### 3.1 `<BrowserRouter>`
- Wraps the app to enable routing.
- Uses the HTML5 History API.
```js
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  {/* routes go here */}
</BrowserRouter>
```

### 3.2 `<Routes>` (v6+)
- Replaces `<Switch>` from v5.
- Renders the first matching `<Route>`.
```js
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

### 3.3 `<Route>`
- Defines a path and the component to render.
- In v6, use `element={<Component />}` syntax.
```js
<Route path="/contact" element={<Contact />} />
```

### 3.4 `<Link>`
- Used to navigate between routes (instead of `<a>`).
```js
<Link to="/about">Go to About</Link>
```

### 3.5 `<Navigate>`
- Used for redirection.
```js
<Navigate to="/login" replace />
```

---

## 4. Hooks in React Router

### 4.1 `useNavigate()`
- Used for programmatic navigation.
```js
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/dashboard');
```

### 4.2 `useParams()`
- Extracts dynamic parameters from URL.
```js
<Route path="/user/:id" element={<User />} />
const { id } = useParams();
```

### 4.3 `useLocation()`
- Returns the current location object.
```js
const location = useLocation();
console.log(location.pathname);
```

---

## 5. Example: Basic App
```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}
function About() {
  return <h2>About Page</h2>;
}

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

---

## 6. 404 Page (Not Found)
```js
<Route path="*" element={<NotFound />} />
```

---

## 7. Nested Routes
```js
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="stats" element={<Stats />} />
</Route>
```

---

## 8. Summary Table
| Feature               | Component/Hook                | Description                          |
|-----------------------|-------------------------------|--------------------------------------|
| Routing container     | `<BrowserRouter>`             | Enables routing                      |
| Define routes         | `<Routes>` + `<Route>`        | Maps paths to components             |
| Navigation            | `<Link to="...">`            | Navigate without page reload        |
| Programmatic nav      | `useNavigate()`               | Navigate via code                    |
| Dynamic params        | `useParams()`                 | Get URL params                       |
| Redirection           | `<Navigate to="..." />`      | Redirect users                       |
| Current path          | `useLocation()`               | Get URL info                         |
| 404 fallback          | `<Route path="*" />`         | Catch-all route                      |
