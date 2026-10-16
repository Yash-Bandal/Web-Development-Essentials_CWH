# CSS Display Property

## Index

1. [Introduction](#1-introduction)
2. [display: block](#2-display-block)
3. [display: inline](#3-display-inline)
4. [display: inline-block](#4-display-inline-block)
5. [display: none](#5-display-none)
6. [visibility: hidden](#6-visibility-hidden)
7. [display: flex](#7-display-flex)
8. [display: inline-flex](#8-display-inline-flex)
9. [Quick Revision Table](#9-quick-revision-table)

<br>


## 1. Introduction

The CSS `display` property defines how an element behaves in the page layout.

<br>


## 2. display: block

- Starts on a new line.
- Normally occupies the available width.
- Supports `width`, `height`, `margin`, and `padding`.

```css
.box {
    display: block;
    width: 200px;
}
```

**Examples:** `div`, `p`, `h1` (default display behavior).

<br>


## 3. display: inline

- Elements appear side by side.
- `width` and `height` generally do not apply.
- Horizontal margins and padding work, but vertical padding and margins do not affect surrounding layout in the same way as block elements.

```css
span {
    display: inline;
}
```

Example: Two `span` elements normally appear on the same line.

<br>


## 4. display: inline-block

- Elements appear side by side.
- Supports `width`, `height`, `margin`, and `padding`.
- Useful when you want inline positioning with block-like sizing.

```css
.box {
    display: inline-block;
    width: 200px;
    padding: 20px;
    margin: 10px;
}
```

Example: Two boxes can appear side by side while maintaining their specified widths.

<br>


## 5. display: none

- Completely removes the element from the page layout.
- The element occupies no space.

```css
.box {
    display: none;
}
```

The other elements move into the space it previously occupied.

<br>


## 6. visibility: hidden

- Hides the element visually.
- The element's space remains reserved in the layout.

```css
.box {
    visibility: hidden;
}
```

**Remember:**
- `display: none` → Element and its layout space are removed.
- `visibility: hidden` → Element is hidden, but its layout space remains.

<br>


## 7. display: flex

- Makes an element a flex container.
- Its direct children are arranged in a row by default.
- Useful for alignment, spacing, and positioning elements.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

- `justify-content: center` → Centers children along the main axis.
- `align-items: center` → Aligns children along the cross axis.
- `gap: 20px` → Adds space between children.

<br>


## 8. display: inline-flex

- Behaves like an inline-level element on the outside.
- Its children use flex layout on the inside.
- Useful when a flex container should sit alongside other inline content.

```css
.box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
```

**Difference:**
- `flex` → The container behaves like a block-level element.
- `inline-flex` → The container behaves like an inline-level element.

<br>


## 9. Quick Revision Table

| Property | Behavior |
|---|---|
| `block` | Starts on a new line; normally takes available width |
| `inline` | Sits within a line; width and height generally do not apply |
| `inline-block` | Sits within a line and supports width and height |
| `none` | Hides element and removes its layout space |
| `visibility: hidden` | Hides element but preserves its layout space |
| `flex` | Creates a block-level flex container |
| `inline-flex` | Creates an inline-level flex container |

<br>

