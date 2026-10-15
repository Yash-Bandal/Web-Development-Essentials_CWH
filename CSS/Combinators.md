# Combinators
In CSS, combinators tell us the relationship between HTML elements so we can select the elements we want to style.

Imagine this HTML:

```html
<div>
    <p>Hello</p>
    <section>
        <p>Welcome</p>
    </section>
</div>

<p>Goodbye</p>
```

CSS has 4 main combinators.

## 1. Descendant combinator — space (` `)

Selects all matching elements inside another element, even if they are nested deeply.

```
div p {
    color: red;
}
```

Result

div

Hello — red

section

Welcome — red

Goodbye — unchanged

Why? Both `Hello` and `Welcome` are inside the `div`. The space means any descendant, not just an immediate child.

## 2. Child combinator — `>`

Selects only the direct children of an element.

```
div > p {
    color: blue;
}
```

Result

div

Hello — blue

section

Welcome — unchanged

Goodbye — unchanged

Why? `Hello` is a direct child of `div`, but `Welcome` is inside `section`, so it is not a direct child of `div`.

## 3. Adjacent sibling combinator — `+`

Selects the immediately following sibling.

```
<h2>Movies</h2>
<p>First paragraph</p>
<p>Second paragraph</p>
```

```
h2 + p {
    color: green;
}
```

Result:

### Movies

First paragraph — green

Second paragraph — unchanged

Why? The first `p` comes immediately after the `h2`. The second `p` does not.

## 4. General sibling combinator — `~`

Selects all matching siblings that come after the specified element.

Using the same HTML:

```
h2 ~ p {
    color: purple;
}
```

Result:

### Movies

First paragraph — purple

Second paragraph — purple

Why? Both paragraphs come after the `h2` and share the same parent.

## Quick comparison

| Combinator | Meaning          | Easy way to remember        |
| ---------- | ---------------- | --------------------------- |
| `A B`      | Descendant       | Anywhere inside A           |
| `A > B`    | Child            | Directly inside A           |
| `A + B`    | Adjacent sibling | The very next sibling       |
| `A ~ B`    | General sibling  | All later matching siblings |

## Test your understanding

Suppose the HTML is:

```
<div>
    <p>One</p>
    <section>
        <p>Two</p>
    </section>
</div>
```

