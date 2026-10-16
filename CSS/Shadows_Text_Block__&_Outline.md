# CSS Shadows and Outline

## Index

1. [box-shadow](#1-box-shadow)
2. [text-shadow](#2-text-shadow)
3. [outline](#3-outline)
4. [outline-offset](#4-outline-offset)
5. [border vs outline](#5-border-vs-outline)
6. [Quick Revision](#6-quick-revision)


<br>



## 1. box-shadow

Adds a shadow around an element's box.

**Syntax:**

```css
box-shadow: h-offset v-offset blur spread color;
```

Example:

```css
.box {
    box-shadow: 5px 15px 5px 0px #70a711;
}
```

- `5px` — Horizontal offset: moves the shadow right.
- `15px` — Vertical offset: moves the shadow down.
- `5px` — Blur radius: controls how blurry the shadow looks.
- `0px` — Spread radius: does not expand or shrink the shadow.
- `#70a711` — Shadow color.

**Another example:**

```css
.box {
    box-shadow: 0px 4px 10px 2px gray;
}
```

This creates a gray shadow below the box with a soft blur.

**Inset shadow:**

```css
.box {
    box-shadow: inset 0px 0px 10px gray;
}
```

`inset` places the shadow inside the box instead of outside it.


<br>



## 2. text-shadow

Adds a shadow to text.

**Syntax:**

```css
text-shadow: h-offset v-offset blur color;
```

Example:

```css
.text-element {
    text-shadow: 2px 3px 4px gray;
}
```

- `2px` — Shadow moves right.
- `3px` — Shadow moves down.
- `4px` — Blur radius.
- `gray` — Shadow color.

**Colored text shadow:**

```css
h1 {
    text-shadow: 2px 2px 3px red;
}
```

**Important:** Unlike `box-shadow`, `text-shadow` does not have a spread-radius or `inset` parameter.


<br>



## 3. outline

Draws a line around an element, outside its border.

Example:

```css
.box {
    border: 2px solid black;
    outline: 2px solid red;
}
```

- `border` creates the element's border.
- `outline` draws an additional line outside that border.

Outline does not take up space in the normal box model.


<br>



## 4. outline-offset

Controls the distance between the outline and the element's border.

Example:

```css
.box {
    border: 2px solid black;
    outline: 2px solid red;
    outline-offset: 10px;
}
```

- Positive value (`10px`) → Moves the outline away from the border.
- Negative value (`-5px`) → Moves the outline inward, toward the element's content.

In your example:

```css
outline-offset: 50px;
```

The outline is placed `50px` away from the border, creating a large gap.


<br>



## 5. border vs outline

| Feature | Border | Outline |
|---|---|---|
| Position | Around the element's box | Outside the border, or shifted using `outline-offset` |
| Takes up box-model space | Yes | No |
| Customizable thickness | Yes | Yes |
| Rounded corners | Follows `border-radius` | Does not reliably follow the same rounded shape |
| Offset property | No `border-offset` property | `outline-offset` |

Example:

```css
.box {
    border: 3px solid black;
    outline: 2px solid red;
    outline-offset: 5px;
}
```

This creates a black border and a separate red outline with a `5px` gap.


<br>



## 6. Quick Revision

| Property | Purpose |
|---|---|
| `box-shadow` | Adds a shadow around a box |
| `text-shadow` | Adds a shadow to text |
| `outline` | Draws an extra line outside the border |
| `outline-offset` | Adjusts the outline's distance from the border |
| `inset` | Places a box shadow inside the element |



<br>

