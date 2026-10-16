# Useful CSS Topics

## Index

1. [CSS Display Property](#1-css-display-property)
2. [CSS Position](#2-css-position)
3. [CSS Combinators](#3-css-combinators)
4. [CSS Pseudo-Classes](#4-css-pseudo-classes)
5. [CSS Pagination](#5-css-pagination)
6. [Website Layout — Architecture](#6-website-layout--architecture)
7. [Flexbox](#7-flexbox)

<br>

## 1. [CSS Display Property](https://www.w3schools.com/cssref/pr_class_display.php)

**Content**

The `display` property controls how an element appears in the layout.

- `block` — Starts on a new line and normally takes the available width.
- `inline` — Stays in the same line; `width` and `height` generally do not apply.
- `inline-block` — Stays in the same line but supports `width`, `height`, and padding.
- `flex` — Helps arrange and align child elements.
- `none` — Hides the element and removes its layout space.

**Example:**

```css
.box {
    display: inline-block;
    width: 200px;
    padding: 20px;
}
```

**Practical use:** Display product cards side by side, hide elements, or control how text and containers appear.

<br>

## 2. [CSS Position](https://www.w3schools.com/css/css_position.asp)

**Content**

The `position` property controls where an element appears on a page.

- `static` — Default positioning.
- `relative` — Moves an element relative to its normal position.
- `absolute` — Positions an element relative to its nearest positioned ancestor.
- `fixed` — Keeps an element positioned relative to the viewport while scrolling.
- `sticky` — Behaves normally until it reaches a specified scroll position, then sticks.

**Example:**

```css
.container {
    position: relative;
}

.badge {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Here, the badge appears near the top-right corner of the container.

**Practical use:** Place notification badges on icons, overlay text on images, create sticky headers, or keep a button fixed on the screen.

<br>

## 3. [CSS Combinators](https://www.w3schools.com/css/css_combinators.asp)

**Content**

Combinators select elements based on their relationship with other elements.

- `A B` — Selects all matching descendants of A, including nested elements.
- `A > B` — Selects matching direct children of A only.
- `A + B` — Selects the first matching sibling B immediately after A.
- `A ~ B` — Selects all matching subsequent siblings B after A.

**Example:**

```css
.container p {
    color: blue;
}

.container > p {
    color: red;
}

h2 + p {
    font-weight: bold;
}
```

- All paragraphs inside `.container` become blue.
- Direct child paragraphs become red because the second rule overrides the first.
- The first paragraph immediately following an `h2` becomes bold.

**Practical use:** Style specific elements inside cards, forms, menus, and nested layouts without adding extra classes everywhere.

<br>

## 4. [CSS Pseudo-Classes](https://www.w3schools.com/css/css_pseudo_classes.asp)

**Content**

Pseudo-classes style an element when it is in a particular state or has a particular position.

Common examples:

- `:hover` — Mouse pointer is over an element.
- `:active` — Element is being activated, such as while clicking a button.
- `:focus` — Element has keyboard or other focus.
- `:first-child` — Element is the first child of its parent.
- `:last-child` — Element is the last child of its parent.
- `:nth-child(2)` — Element is the second child of its parent.

**Example:**

```css
button:hover {
    background-color: blue;
    color: white;
}

input:focus {
    outline: 2px solid blue;
}

li:first-child {
    font-weight: bold;
}
```

**Practical use:** Add hover effects to buttons, highlight focused inputs, and style the first or last item in a list.

<br>

## 5. [CSS Pagination](https://www.w3schools.com/css/css3_pagination.asp)

**Content**

Pagination divides a large collection of results into multiple pages.

For example, instead of showing 100 products on one page, display 10 products per page with navigation links.

**Example:**

```html
<div class="pagination">
    <a href="#">1</a>
    <a href="#">2</a>
    <a href="#">3</a>
</div>
```

```css
.pagination {
    display: flex;
    gap: 8px;
}

.pagination a {
    padding: 8px 12px;
    border: 1px solid gray;
    text-decoration: none;
    color: black;
    border-radius: 4px;
}

.pagination a:hover {
    background-color: lightgray;
}
```

**Practical use:** Product listings, search results, blog archives, and admin dashboards.

**Note:** This example styles the page links. Actual pagination requires logic to load or display the correct results for each page.

<br>

## 6. [Website Layout — Architecture](https://www.w3schools.com/css/css_website_layout.asp)

**Content**

A website layout divides a page into meaningful sections.

Common sections:

- `Header` — Website logo, title, or top section.
- `Navigation` — Links to different pages.
- `Main` — Primary content.
- `Aside` — Sidebar or supporting content.
- `Footer` — Information at the bottom.

**Example:**

```html
<header>My Website</header>

<nav>
    <a href="#">Home</a>
    <a href="#">About</a>
</nav>

<main>
    <h1>Welcome</h1>
    <p>Main page content goes here.</p>
</main>

<footer>Copyright 2026</footer>
```

```css
header,
nav,
main,
footer {
    padding: 20px;
    margin-bottom: 10px;
}

header {
    background-color: lightblue;
}

nav {
    background-color: lightgray;
}

main {
    min-height: 300px;
}

footer {
    background-color: lightgray;
}
```

**Practical use:** Plan the overall structure of portfolio websites, blogs, dashboards, and e-commerce applications.

<br>

## 7. [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)

**Content**

Flexbox is a CSS layout system used to arrange elements in a row or column and control their alignment and spacing.

Important properties:

- `display: flex` — Enables Flexbox on a container.
- `flex-direction` — Sets the direction to `row` or `column`.
- `justify-content` — Aligns items along the main axis.
- `align-items` — Aligns items along the cross axis.
- `gap` — Adds space between items.
- `flex-wrap` — Allows items to move onto another line when needed.

**Example:**

```html
<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</div>
```

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.box {
    padding: 20px;
    background-color: lightblue;
}
```

Here, the boxes appear in a row, with space between them, and can wrap onto another line when needed.

**Practical use:** Build navigation bars, align buttons, arrange cards, center content, and create responsive layouts.

