# CSS Sizes and Units

<br>

## Index

## Index

1. [Introduction](#1-introduction)
2. [Pixels (px)](#2-pixels-px)
3. [Percentage (%) ](#3-percentage-)
4. [Viewport Units (vw and vh)](#4-viewport-units-vw-and-vh)
5. [vmin and vmax](#5-vmin-and-vmax)
6. [em — Relative to Font Size](#6-em--relative-to-font-size)
7. [rem — Relative to the Root Font Size](#7-rem--relative-to-the-root-font-size)
8. [min-width, max-width, min-height, and max-height](#8-min-width-max-width-min-height-and-max-height)
9. [margin: auto and Centering](#9-margin-auto-and-centering)
10. [box-sizing: border-box](#10-box-sizing-border-box)
11. [Common Mistakes to Avoid](#11-common-mistakes-to-avoid)
12. [Quick Revision Table](#12-quick-revision-table)
13. [Practice Questions](#13-practice-questions)

<br>

## 1. Introduction

CSS units are used to define the size of elements, text, spacing, and other properties.

For example:

```css
.box {
    width: 200px;
    height: 100px;
    font-size: 18px;
}
```

Here:
- `width: 200px` → The box is 200 pixels wide.
- `height: 100px` → The box is 100 pixels tall.
- `font-size: 18px` → The text size is 18 pixels.

CSS units are mainly divided into two categories:

1. **Absolute units** — For example, `px`.
2. **Relative units** — For example, `%`, `em`, `rem`, `vw`, and `vh`.

---

## 2. Pixels (`px`)

A pixel is a fixed CSS unit commonly used to define sizes.

```css
.box {
    width: 200px;
    height: 100px;
    font-size: 16px;
    border: 2px solid black;
}
```

In this example:
- The width is `200px`.
- The height is `100px`.
- The text size is `16px`.
- The border thickness is `2px`.

**Important:** A CSS pixel is not always equal to one physical screen pixel. The browser maps CSS pixels to physical pixels depending on the device and display scaling.

### When to use `px`?

Use pixels when you need a specific size, such as border thickness, small icons, or precise spacing.

---

## 3. Percentage (`%`)

A percentage defines a size relative to a reference, usually the corresponding size of the parent element.

Consider this example:

```html
<div class="container">
    <div class="box">Inner box</div>
</div>
```

```css
.container {
    width: 800px;
}

.box {
    width: 50%;
}
```

The inner box will be:

- Parent width = `800px`
- Child width = `50%` of `800px`
- Child width = `400px`

### Example: Nested elements

```css
.container {
    width: 800px;
}

.container > div {
    width: 50%;
}

.container > div > div {
    width: 50%;
}
```

Suppose the structure is:

```text
Container: 800px
    |
    └── First child: 400px (50% of 800px)
            |
            └── Second child: 200px (50% of 400px)
```

**Important:** Percentage sizing depends on the reference element and property. For example, percentage width normally refers to the containing block's width, while percentage height can behave differently if the containing block's height is not explicitly determined.

### When to use `%`?

Use percentages when an element should resize according to its parent.

---

## 4. Viewport Units (`vw` and `vh`)

The **viewport** is the visible area of the browser where the webpage is displayed.

Viewport units allow us to size elements relative to this area.

### 4.1 `vw` — Viewport Width

`1vw` = 1% of the viewport width.

```css
.box {
    width: 80vw;
}
```

Suppose the viewport width is `1000px`.

Calculation:

```text
80vw = 80% of 1000px
     = 800px
```

Therefore, the box width is `800px`.

### 4.2 `vh` — Viewport Height

`1vh` = 1% of the viewport height.

```css
.box {
    height: 50vh;
}
```

Suppose the viewport height is `800px`.

Calculation:

```text
50vh = 50% of 800px
     = 400px
```

Therefore, the box height is `400px`.

### 4.3 Example using both

```css
.box {
    width: 80vw;
    height: 10vh;
}
```

If the viewport is `1200px` wide and `900px` tall:

- Width = `80% of 1200` = `960px`
- Height = `10% of 900` = `90px`

### Dividing the screen into sections

If you want three vertical sections that together occupy the viewport height:

```css
.header {
    height: 20vh;
}

.main {
    height: 50vh;
}

.footer {
    height: 30vh;
}
```

Total:

```text
20vh + 50vh + 30vh = 100vh
```

The three sections together equal the viewport height, assuming their sizing and box-model settings do not add extra space.

**Note:** On mobile browsers, viewport height can change as browser controls appear or disappear. Modern CSS also provides `svh`, `lvh`, and `dvh` for different viewport-height behaviors.

### When to use `vw` and `vh`?

Use them for full-screen layouts, hero sections, responsive widths, and elements that should scale with the viewport.

---

## 5. `vmin` and `vmax`

These units depend on the smaller or larger dimension of the viewport.

- `vmin` = 1% of the smaller viewport dimension.
- `vmax` = 1% of the larger viewport dimension.

Suppose:

```text
Viewport width  = 1200px
Viewport height = 800px
```

Then:

```text
1vmin = 1% of 800px  = 8px
1vmax = 1% of 1200px = 12px
```

### Example

```css
.box {
    width: 50vmin;
    height: 20vmax;
}
```

Calculation:

```text
Width  = 50% of 800px  = 400px
Height = 20% of 1200px = 240px
```

### How do they behave on different devices?

| Viewport | Smaller dimension | `vmin` uses | `vmax` uses |
|---|---|---|---|
| Laptop: 1200 × 800 | Height | Height | Width |
| Portrait mobile: 390 × 844 | Width | Width | Height |
| Landscape mobile: 844 × 390 | Height | Height | Width |

**Important:** `vmin` and `vmax` do not permanently mean `vh` or `vw`. They change depending on which dimension is smaller or larger.

### When to use them?

Use `vmin` to keep an element proportionate to the smaller screen dimension, such as a square that must fit comfortably on the screen.

Use `vmax` when sizing relative to the larger screen dimension is useful.

---

## 6. `em` — Relative to Font Size

The `em` unit is commonly used for font sizes and spacing.

When used in `font-size`, `em` is relative to the inherited font size of the parent element.

Consider:

```html
<div class="container">
    <p>Hello World</p>
</div>
```

```css
.container {
    font-size: 18px;
}

.container p {
    font-size: 2em;
}
```

Calculation:

```text
Parent font size = 18px

Child font size = 2 × 18px
                = 36px
```

The paragraph text will be `36px`.

### Common `em` values

If the parent font size is `18px`:

| CSS value | Calculation | Result |
|---|---|---|
| `0.5em` | 0.5 × 18 | 9px |
| `1em` | 1 × 18 | 18px |
| `1.5em` | 1.5 × 18 | 27px |
| `2em` | 2 × 18 | 36px |

### Important: `em` can behave differently for other properties

For properties such as `padding`, `margin`, and `width`, `em` is based on the font size of the element itself.

```css
.container {
    font-size: 18px;
}

.container p {
    font-size: 2em;
    padding: 1em;
}
```

The paragraph font size becomes `36px`.

Its `padding: 1em` also becomes `36px`, because the paragraph's own computed font size is `36px`.

### Nested `em` example

```css
.parent {
    font-size: 20px;
}

.child {
    font-size: 1.5em;
}

.grandchild {
    font-size: 1.5em;
}
```

Calculation:

```text
Parent      = 20px
Child       = 1.5 × 20 = 30px
Grandchild  = 1.5 × 30 = 45px
```

The font size increases at each level because each child uses its parent's font size.

### When to use `em`?

Use `em` when you want text or spacing to scale relative to an element's typography.

---

## 7. `rem` — Relative to the Root Font Size

`rem` stands for **root em**.

It is relative to the font size of the root HTML element, usually selected using the `html` selector.

Consider your example:

```css
html {
    font-size: 12px;
}

.box {
    font-size: 2rem;
}
```

Calculation:

```text
Root font size = 12px

Box font size = 2 × 12px
              = 24px
```

Therefore, the text size is `24px`.

### Common `rem` values

If the root font size is `12px`:

| CSS value | Calculation | Result |
|---|---|---|
| `0.5rem` | 0.5 × 12 | 6px |
| `1rem` | 1 × 12 | 12px |
| `1.5rem` | 1.5 × 12 | 18px |
| `2rem` | 2 × 12 | 24px |
| `3rem` | 3 × 12 | 36px |

If you do not change the root font size, browsers commonly use a default of `16px`. However, users and browser settings can change the effective default.

### `em` vs `rem`

```css
html {
    font-size: 12px;
}

.parent {
    font-size: 20px;
}

.child-em {
    font-size: 2em;
}

.child-rem {
    font-size: 2rem;
}
```

Assuming the two child elements are inside `.parent`:

```text
Parent font size = 20px

Child using 2em:
2 × 20px = 40px

Child using 2rem:
2 × 12px = 24px
```

| Unit | Font-size reference |
|---|---|
| `em` | Parent's inherited font size |
| `rem` | Root HTML element's font size |

### When to use `rem`?

Use `rem` for consistent typography, padding, margins, and component sizing across a website.

For example:

```css
h1 {
    font-size: 2rem;
}

button {
    padding: 0.75rem 1.5rem;
}
```

---

## 8. `min-width`, `max-width`, `min-height`, and `max-height`

These are CSS size constraints rather than units. They work with units such as `px`, `%`, `vw`, `vh`, `em`, and `rem`.

### 8.1 `min-width`

Defines the minimum allowed width of an element.

```css
.box {
    min-width: 300px;
}
```

The box should not become narrower than `300px` under normal sizing conditions.

### 8.2 `max-width`

Defines the maximum allowed width.

```css
.box {
    width: 100%;
    max-width: 800px;
}
```

The box can shrink on smaller screens, but its width will not exceed `800px`.

This is useful for keeping text content readable on large monitors.

### 8.3 `min-height`

Defines the minimum height of an element.

```css
.container {
    min-height: 80vh;
}
```

If the viewport height is `900px`:

```text
Minimum height = 80% of 900px
               = 720px
```

The container will be at least `720px` tall, but it can grow taller if its content requires more space.

This is why `min-height` is often useful for content containers.

### 8.4 `max-height`

Defines the maximum allowed height.

```css
.container {
    max-height: 400px;
    overflow-y: auto;
}
```

The container's height is limited to `400px`. If the content becomes taller, `overflow-y: auto` allows vertical scrolling.

### Quick comparison

| Property | Meaning |
|---|---|
| `min-width` | Width cannot normally go below this limit |
| `max-width` | Width cannot normally exceed this limit |
| `min-height` | Height cannot normally go below this limit |
| `max-height` | Height cannot normally exceed this limit |

### Example: A responsive container

```css
.container {
    width: 80vw;
    min-width: 280px;
    max-width: 1000px;

    min-height: 80vh;
}
```

This means:

- The width aims to be `80%` of the viewport.
- The width should not be less than `280px`.
- The width should not exceed `1000px`.
- The height should be at least `80%` of the viewport height.

If the viewport is too narrow to accommodate the minimum width, the element can overflow its containing area. Choose minimums carefully for responsive layouts.

---

## 9. `margin: auto` and Centering

The `auto` value is not a measurement unit. It tells the browser to calculate the relevant spacing automatically.

Consider:

```css
.box {
    width: 80%;
    margin: auto;
}
```

For a block element with a definite width, the browser can distribute the remaining horizontal space equally on both sides.

Suppose the parent is `1000px` wide:

```text
Parent width = 1000px
Box width    = 800px
Remaining    = 200px

Left margin  = 100px
Right margin = 100px
```

The box is centered horizontally.

### Example from your code

```css
.container {
    width: 80vw;
    margin: 23px auto;
}
```

Here:

- Top margin = `23px`
- Bottom margin = `23px`
- Left and right margins = `auto`

The browser centers the container horizontally when the layout conditions permit it.

**Important:** `margin: auto` does not automatically center an element vertically.

---

## 10. `box-sizing: border-box`

This property controls how CSS calculates an element's width and height.

### Default behavior: `content-box`

```css
.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

The declared `200px` is the content width.

```text
Total width = Content + Padding + Border

            = 200 + 40 + 10
            = 250px
```

### With `border-box`

```css
.box {
    box-sizing: border-box;
    width: 200px;
    padding
