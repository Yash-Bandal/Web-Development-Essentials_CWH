# Combinators
In CSS, combinators tell us the relationship between HTML elements so we can select the elements we want to style.

CSS has 4 main combinators.

1. **` ` Descendents** - 
2. **`>` Child**
3. **`~` General Sibling**
4. **`+` Adjacent Sibling**

<br>

## 1. Descendant combinator — space (` `)

Selects all matching elements inside another element, even if they are nested deeply.

```html
<div>
    <p>This is #1</p>
    <p>This is #2</p>
    <div>
       <p>This is #3</p>
    </div>
</div>

<p>This is #4</p>
<p>This is #5</p>
```
```css
div p {
    background-color: yellow;
}
```

Result

<img width="240" alt="image" src="https://github.com/user-attachments/assets/56478f3f-5ec6-4e83-b4ea-e989ac671dca" />



## 2. Child combinator — `>`

Selects only the direct children of an element.

```html
<div>
    <p>This is #1</p>
    <p>This is #2</p>
    <div>
       <p>This is #3</p>
    </div>
</div>

<p>This is #4</p>
<p>This is #5</p>
```
```css
div > p {
    background-color: yellow;
}
```

Result

<img width="240" alt="image" src="https://github.com/user-attachments/assets/d33275b0-d6c8-43c7-b7d2-bdf1a25e379e" />



## 3. Adjacent sibling combinator — `+`

Selects the immediately following sibling.

```html
<div>
    <p>This is #1</p>
    <p>This is #2</p>
    <div>
       <p>This is #3</p>
    </div>
</div>

<p>This is #4</p>
<p>This is #5</p>
```
```css
div + p {
    background-color: yellow;
}
```

Result:

<img width="240" alt="image" src="https://github.com/user-attachments/assets/8e07dc7c-043b-4b49-9277-9bc0eee99140" />


## 4. General sibling combinator — `~`

Selects all matching siblings that come after the specified element.

Using the same HTML:

```html
<div>
    <p>This is #1</p>
    <p>This is #2</p>
    <div>
       <p>This is #3</p>
    </div>
</div>

<p>This is #4</p>
<p>This is #5</p>
```
```css
div ~ p {
    background-color: yellow;
}
```

Result:

<img width="240" alt="image" src="https://github.com/user-attachments/assets/471b5575-77f3-4926-bfe0-76da0f59f3a3" />


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

