# Lesson 8: jQuery Form Handling

## Introduction
Form handling is a crucial aspect of web development, allowing users to input data, submit forms, and receive feedback. jQuery simplifies form handling by providing easy-to-use methods for retrieving and modifying form values, handling events, and validating inputs.

---

## 📌 Topics Covered
- Getting form values
- Setting form values
- Handling form submission
- Validating forms
- Preventing default behavior

---

## 📝 Getting Form Values
To retrieve user input values from form fields, jQuery provides the `.val()` method.

### Example:
```javascript
$(document).ready(function() {
    $('#getValueBtn').click(function() {
        let name = $('#nameInput').val();
        alert('Entered Name: ' + name);
    });
});
```

```html
<input type="text" id="nameInput" placeholder="Enter your name">
<button id="getValueBtn">Get Value</button>
```

### Alternative (Vanilla JavaScript):
```javascript
document.getElementById('getValueBtn').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value;
    alert('Entered Name: ' + name);
});
```

---

## 📝 Setting Form Values
You can use `.val(value)` to set a new value for an input field.

### Example:
```javascript
$('#setValueBtn').click(function() {
    $('#nameInput').val('Yash Bandal');
});
```

```html
<button id="setValueBtn">Set Value</button>
```

---

## 📝 Handling Form Submission
The `.submit()` method allows handling form submission.

### Example:
```javascript
$('#myForm').submit(function(event) {
    event.preventDefault(); // Prevents actual submission
    alert('Form Submitted!');
});
```

```html
<form id="myForm">
    <input type="text" placeholder="Your Name">
    <button type="submit">Submit</button>
</form>
```

---

## 📝 Validating Forms
We can validate user input using `.blur()` or `.keyup()` events.

### Example:
```javascript
$('#email').blur(function() {
    let email = $(this).val();
    if (!email.includes('@')) {
        alert('Invalid Email!');
    }
});
```

```html
<input type="email" id="email" placeholder="Enter your email">
```

---

## 📝 Preventing Default Behavior
To prevent default form submission, use `event.preventDefault()`.

### Example:
```javascript
$('#myForm').submit(function(event) {
    event.preventDefault();
    alert('This form will not be submitted!');
});
```

---

## ✅ Summary
- `.val()` is used to get or set input field values.
- `.submit()` is used to handle form submission.
- `.blur()` and `.keyup()` help with form validation.
- `event.preventDefault()` prevents unwanted form submissions.

🔗 **Next Lesson:** [Lesson 9: jQuery Plugins](./9_jQuery_Plugins.md)

