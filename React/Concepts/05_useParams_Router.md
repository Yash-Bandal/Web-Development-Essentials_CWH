# 1. useParams (React Router)

## 1.1 What is `useParams`?

`useParams` is a **React Router hook** that allows a component to **read dynamic values from the URL**.

### In simple words

> It helps a component know **which route parameter was used to reach it**.

It is used when a part of the URL is **variable** (dynamic) rather than fixed.

Example URL:

```tsx
/users/42
```

Here, `42` is a dynamic value. `useParams` lets the component access this value.

<br>

## 1.2 Why do we need `useParams`?

In real-world applications, pages are rarely static.

Common dynamic routes:

* `/users/1`, `/users/2`
* `/products/iphone-15`
* `/blog/how-react-works`

Instead of creating separate components for each ID:

* We define **one route**
* We extract the dynamic part using `useParams`

Without `useParams`, the component would not know:

* Which user to load
* Which product to fetch
* Which blog post to display

<br>

## 1.3 Defining Route Parameters

### Example Route Setup

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Key Point

```
:userId
```

* `userId` is a **route parameter**
* Acts like a variable inside the URL

<br>

## 1.4 Accessing Params Using `useParams`

### Basic Syntax

```tsx
import { useParams } from "react-router-dom";

const { paramName } = useParams();
```

### Type-Safe Syntax (TypeScript)

```tsx
const { slug } = useParams<{ slug: string[] }>();
```

* Useful when routes contain **catch-all or nested segments**
* Helps TypeScript understand the expected shape of params

<br>

### Example Component

```tsx
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserProfile;
```

### How it Works Internally

If the URL is:

```tsx
/users/42
```

Then:

```ts
useParams() ➜ { userId: "42" }
```

### Important Notes

* All params are returned as **strings**
* Even numbers come as strings (`"42"`, not `42`)

<br>

## 1.5 Real-World Use Case: API Call

```tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
```

### Flow

1. User navigates to `/users/42`
2. Route matches `/users/:userId`
3. `useParams()` extracts `{ userId: "42" }`
4. API is called using `userId`
5. Correct data is fetched and rendered

<br>

## 1.6 Multiple Route Parameters

### Route Definition

```tsx
<Route path="/courses/:courseId/lessons/:lessonId" element={<Lesson />} />
```

### Component

```tsx
const Lesson = () => {
  const { courseId, lessonId } = useParams();

  return (
    <div>
      Course: {courseId}
      Lesson: {lessonId}
    </div>
  );
};
```

### URL Example

```
/courses/react/lessons/3
```

### Extracted Params

```ts
{
  courseId: "react",
  lessonId: "3"
}
```

<br>

## 1.7 Key Takeaways

* `useParams` is used **inside React components only**
* Reads **dynamic segments** of the URL
* Always returns **string values**
* Comes from `react-router-dom`
* Commonly used for:

  * User profile pages
  * Product detail pages
  * Blog post pages
  * Dashboard sub-routes

<br>

## 1.8 Core Intuition

> **Props come from parent components, `useParams` comes from the URL.**
