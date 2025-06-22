# JavaScript DOM and Form Handling

## 1. Accessing Forms

Forms are accessed using the `document.forms` collection or by `getElementById()`.

```js
let form = document.forms["loginForm"];
let username = form["username"].value;
```

Or directly:

```js
let username = document.getElementById("username").value;
```

## 2. Handling Form Submission

Preventing default form behavior and handling submission with JavaScript:

```js
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  console.log("Username:", username);
  console.log("Password:", password);
});
```

## 3. Validating Form Inputs

### Basic Validation

```js
if (username === "") {
  alert("Username is required");
}
```

### Check Length or Pattern

```js
if (password.length < 6) {
  alert("Password must be at least 6 characters long");
}
```

### Email Validation with Regex

```js
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  alert("Invalid email address");
}
```

## 4. Real-Time Validation

```js
document.getElementById("email").addEventListener("input", function() {
  let value = this.value;
  if (!value.includes("@")) {
    this.style.borderColor = "red";
  } else {
    this.style.borderColor = "green";
  }
});
```

## 5. Working with Different Input Types

```js
let checkbox = document.getElementById("agree").checked;
let selectedOption = document.getElementById("dropdown").value;
let radioValue = document.querySelector("input[name='gender']:checked").value;
```

## 6. Resetting and Clearing Forms

```js
document.getElementById("myForm").reset();
```

Or manually:

```js
document.getElementById("username").value = "";
document.getElementById("password").value = "";
```

<br>

## Conclusion

| Task                        | Method/Property                              |
| --------------------------- | -------------------------------------------- |
| Get form by name            | `document.forms["formName"]`                 |
| Access input value          | `element.value`                              |
| Check checkbox state        | `element.checked`                            |
| Get selected dropdown/radio | `element.value`, `querySelector(':checked')` |
| Listen for form submit      | `addEventListener("submit", handler)`        |
| Prevent default form action | `event.preventDefault()`                     |
| Reset form                  | `form.reset()`                               |


