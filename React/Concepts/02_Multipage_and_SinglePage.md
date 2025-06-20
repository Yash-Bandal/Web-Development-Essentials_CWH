# Multi-Page Application (MPA) vs Single-Page Application (SPA) in React

## 1. Introduction

Modern web applications generally follow one of two architectures:

* **Multi-Page Applications (MPA)**
* **Single-Page Applications (SPA)**

React is primarily designed for building SPAs, but understanding the difference between these two approaches is important.

---

## 2. Multi-Page Application (MPA)

### Concept

In an MPA, each page is a separate HTML file. When a user navigates to a new route (like `/about` or `/contact`), the browser sends a new HTTP request to the server, which responds with an entirely new HTML document along with its corresponding CSS and JS files.

### Behavior

* Each page load triggers a **full page reload**.
* Server sends **a complete new HTML document** for each route.
* CSS/JS may be re-downloaded or cached based on settings.

### Example

```
User visits /contact --> browser requests /contact --> server responds with contact.html + contact.css + contact.js
```

### Pros

* Better SEO (traditionally).
* Each page is isolated — easy to debug.

### Cons

* Slower navigation due to full reloads.
* Server load increases.
* Poor user experience for dynamic UIs.

---

## 3. Single-Page Application (SPA) with React

### Concept

In an SPA, the browser loads a **single HTML file** (`index.html`) initially. The entire UI is then rendered dynamically using JavaScript (typically React). When the user navigates to different routes (`/home`, `/contact`), the page is **not reloaded** — instead, **JavaScript handles the routing and updates the DOM dynamically**.

### Behavior

* Only one HTML page is ever loaded from the server.
* Navigation is handled **client-side** via the React Router.
* Only the required JavaScript changes the view by manipulating the DOM.

### Example

```
User visits /contact --> React Router updates DOM to show Contact component --> No page reload
```

### Pros

* Fast navigation and seamless user experience.
* Efficient resource usage (no reloads).
* Perfect for dynamic, interactive UIs.

### Cons

* SEO can be challenging without extra tools.
* Initial load may be slightly heavier due to bundled JS.

---

