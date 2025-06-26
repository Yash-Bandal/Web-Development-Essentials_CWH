# Bootstrap CSS Cheatsheet

[Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

<br>

### Starter Template
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Hello, world..Yash Here!</title>
  </head>
  <body>
    <h1>Hello..! Yash here!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    -->

  </body>
</html>
```

<br>

### Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

<br>

---

<br>

## 1. Spacing Utilities

### Margin and Padding

Format:

```
{property}{sides?}-{breakpoint?}-{size}
```

* `m` = margin
* `p` = padding
* `t` = top
* `b` = bottom
* `s` = start (left in LTR)
* `e` = end (right in LTR)
* `x` = left and right
* `y` = top and bottom
* `0–5` = spacing size (0 = 0px, 5 = 3rem)
* `auto` = auto margin

### Examples

```html
mt-3        <!-- margin-top: 1rem -->
mb-2        <!-- margin-bottom: 0.5rem -->
mx-auto     <!-- margin-left and right: auto -->
py-4        <!-- padding-top and bottom: 1.5rem -->
p-0         <!-- padding: 0 -->
m-5         <!-- margin: 3rem -->
p-1         <!-- padding: 0.25rem -->
```

## 2. Display Utilities

```html
d-none         <!-- display: none -->
d-block        <!-- display: block -->
d-inline       <!-- display: inline -->
d-inline-block <!-- display: inline-block -->
d-flex         <!-- display: flex -->
d-grid         <!-- display: grid -->
```

### Responsive

```html
d-md-none          <!-- hide at md and above -->
d-lg-block         <!-- show only on large screens -->
```

## 3. Flex Utilities

```html
d-flex
flex-row / flex-column
justify-content-start / center / end / between / around / evenly
align-items-start / center / end / stretch / baseline
align-self-start / center / end
flex-grow-1 / flex-shrink-0
flex-wrap / flex-nowrap
order-0 / order-1 / order-last
```

## 4. Text Utilities

```html
text-start / text-end / text-center
text-uppercase / text-lowercase / text-capitalize
text-muted / text-primary / text-success / text-danger
text-break   <!-- break long words -->
text-nowrap  <!-- no wrapping -->
```

## 5. Background Utilities

```html
bg-primary / bg-success / bg-danger / bg-warning / bg-info / bg-dark / bg-light / bg-white / bg-transparent
```

## 6. Border Utilities

```html
border / border-0
border-top / border-end / border-bottom / border-start
border-primary / border-danger / border-success
rounded / rounded-0 / rounded-1 / rounded-2 / rounded-3 / rounded-circle / rounded-pill
```

## 7. Sizing Utilities

```html
w-25 / w-50 / w-75 / w-100 / w-auto
h-25 / h-50 / h-75 / h-100 / h-auto
min-vw-100 / min-vh-100
vw-100 / vh-100
```

## 8. Position Utilities

```html
position-static / position-relative / position-absolute / position-fixed / position-sticky
top-0 / bottom-0 / start-0 / end-0
translate-middle / translate-middle-x / translate-middle-y
```

## 9. Visibility Utilities

```html
visible / invisible
```

## 10. Buttons

```html
btn btn-primary / btn-secondary / btn-success / btn-danger / btn-warning / btn-info / btn-light / btn-dark / btn-link
btn-outline-primary / btn-outline-secondary
btn-lg / btn-sm
w-100       <!-- full-width -->
disabled / active
```

## 11. Grid System

* Uses Flexbox
* 12 columns per row
* Responsive breakpoints: `col`, `col-sm`, `col-md`, `col-lg`, `col-xl`, `col-xxl`

```html
<div class="row">
  <div class="col-6 col-md-4">Item 1</div>
  <div class="col-6 col-md-8">Item 2</div>
</div>
```

### Column Sizes

```html
col-4     <!-- 4/12 = 33.33% -->
col-md-6  <!-- 6 columns wide on md and up -->
```

### Nesting

```html
<div class="col">
  <div class="row">
    <div class="col-6">Nested 1</div>
    <div class="col-6">Nested 2</div>
  </div>
</div>
```

## 12. Containers

```html
container         <!-- fixed-width container -->
container-fluid   <!-- full-width container -->
container-sm / md / lg / xl / xxl
```

## 13. Alignment

```html
text-center / text-start / text-end
align-middle / align-top / align-bottom
mx-auto          <!-- center block element -->
float-start / float-end / float-none
```

## 14. Helpers & Utilities

```html
clearfix
shadow / shadow-sm / shadow-lg / shadow-none
ratio ratio-1x1 / ratio-4x3 / ratio-16x9 / ratio-21x9
visually-hidden       <!-- accessible, hidden visually -->
overflow-auto / hidden / visible / scroll
user-select-none / user-select-all
```

## 15. Breakpoints

```
Extra small (xs): <576px     [default]
Small (sm):      ≥576px
Medium (md):     ≥768px
Large (lg):      ≥992px
Extra large (xl):≥1200px
XXL (xxl):       ≥1400px
```

Used like:

```html
d-none d-sm-block        <!-- hidden on xs -->
text-md-start            <!-- left align from md and up -->
```

## 16. Typography Utilities

```html
h1–h6             <!-- heading sizes -->
display-1–6       <!-- larger headings -->
lead              <!-- emphasis paragraph -->
small             <!-- smaller font -->
fw-bold / fw-normal / fw-light / fw-lighter / fw-semibold
fst-italic / fst-normal
lh-1 / lh-sm / lh-base / lh-lg
text-decoration-none / underline / line-through
```

---

Made in 💕 with **YB- Tutorials** pvt.ltd
