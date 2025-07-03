<h1 align= "center"><b> React Form Handling </b> </h1>

1. [Documentation](https://www.react-hook-form.com/get-started/)

<br>

## Part 1: Why Native Form Handling is Hard in React

### Controlled Components Recap

* React forms use controlled components: inputs bound to `useState`.
* You manage every keystroke, change, and validation manually.

```jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

### Problems with Native Handling

* Tedious for large forms
* Boilerplate code increases (state, handlers for each input)
* Error-prone when dealing with nested fields
* Validation logic becomes messy
* Difficult to reset or track errors

### Example: Manual Form

```jsx
const [formData, setFormData] = useState({ name: '', email: '' });

function handleChange(e) {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}

<input name="name" value={formData.name} onChange={handleChange} />
<input name="email" value={formData.email} onChange={handleChange} />
```

### Conclusion

* Native form handling works, but is **verbose, repetitive, and not scalable**.
* That’s why libraries like **React Hook Form** exist — to simplify and structure form management.

<br>

---

<br>



## Part 2: React Hook Form – Introduction & Setup

### What is React Hook Form?

* A lightweight library for managing forms in React.
* Minimizes re-renders and boilerplate code.
* Supports validation, nested inputs, and easy integration with UI libraries.

### Installation

```bash
npm install react-hook-form
```

### Basic Usage 
There are generally **3** sections 

```jsx
import { useForm } from 'react-hook-form';

function MyForm() {

  //1 Define Requirenments
  const { register, handleSubmit } = useForm();

  //2 Handle After submit Operations
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
  {/* 3 Form Code */}
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      <input type="submit" />
    </form>
  );
}
```


<br>

---

<br>



## Part 3: Handling Validation with React Hook Form



### Built-in Validation (HTML5-style)

React Hook Form allows validation directly in the `register()` function.

```jsx
<input {...register("email", { required: true })} />
```

Add multiple rules:

```jsx
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
      message: "Invalid email address"
    }
  })}
/>
```

<br>

### Showing Error Messages

Use the `errors` object from `formState`:

```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
```

```jsx
{errors.email && <p>{errors.email.message}</p>}
```

<br>

### Example: Validated Form

```jsx
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email required",
          pattern: {
            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            message: "Invalid email"
          }
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="submit" />
    </form>
  );
}
```

<br>

### Common Validation Rules

| Rule                     | Description             |
| ------------------------ | ----------------------- |
| `required`               | Field must be filled    |
| `pattern`                | Regex pattern for input |
| `min`, `max`             | Numeric min/max values  |
| `minLength`, `maxLength` | Length restrictions     |

<br>

---

<br>



## Part 4: Working with Select, Checkbox, Radio Buttons


### Select Dropdown

```jsx
<select {...register("gender")}> 
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
```

### With default value:

```jsx
<select defaultValue="male" {...register("gender")}>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
```

<br>

### Checkbox Input

```jsx
<input type="checkbox" {...register("terms")} /> I agree
```

### Handling multiple checkboxes:

```jsx
<label>
  <input type="checkbox" value="html" {...register("skills")} /> HTML
</label>
<label>
  <input type="checkbox" value="css" {...register("skills")} /> CSS
</label>
```

---
> Returns array of selected values: `skills: ['html', 'css']`
---

<br>

### Radio Buttons

```jsx
<label>
  <input type="radio" value="yes" {...register("subscribe")} /> Yes
</label>
<label>
  <input type="radio" value="no" {...register("subscribe")} /> No
</label>
```

* Only one value selected: `subscribe: "yes"` or `"no"`

<br>

### Displaying the Data

```jsx
const onSubmit = (data) => console.log(data);
```

<br>

### Summary Table

| Input Type | Code Snippet                    | Output Type           |
| ---------- | ------------------------------- | --------------------- |
| Select     | `<select {...register("key")}>` | Single selected value |
| Checkbox   | `<input type="checkbox" ... />` | Boolean or array      |
| Radio      | `<input type="radio" ... />`    | Single selected value |

<br>

---

<br>


## Part 5: Resetting Form / Default Values



### Setting Default Values

Use `defaultValues` inside `useForm()`:

```jsx
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues: {
    name: "John",
    email: "john@example.com",
    gender: "male",
    subscribe: "yes",
  },
});
```

<br>

### Resetting the Form

Use the `reset()` function:

```jsx
<button type="button" onClick={() => reset()}>
  Reset
</button>
```

* Resets all form fields to their default values (or clears them if none set)

### Reset to custom values:

```jsx
reset({
  name: "",
  email: "",
  gender: "",
});
```

<br>

### Reset After Submission (Optional)

```jsx
const onSubmit = (data) => {
  console.log(data);
  reset();
};
```

<br>

### Thus..

| Feature         | Description                    |
| --------------- | ------------------------------ |
| `defaultValues` | Sets initial form field values |
| `reset()`       | Clears or restores form fields |
| `reset({...})`  | Reset with custom field values |

<br>

---

<br>




## Part 6: Best Practices Recap



### 1. Prefer `react-hook-form` for Simplicity

* Less code and fewer re-renders than manual `useState`
* Built-in validation, minimal config

<br>

### 2. Use `register` with Validation

* Keep all logic within `register()` to avoid scattered rules

```jsx
<input {...register("email", { required: "Email is required" })} />
```

<br>

### 3. Group Form Elements Clearly

* Use fieldsets or component grouping for large forms
* Example: Split personal details, contact info, preferences

<br>

### 4. Reset Wisely

* Use `reset()` after submission or when switching forms
* Set `defaultValues` if you expect pre-filled forms (e.g., edit profile)

<br>

### 5. Error Display

* Always show clear error messages with `errors[field]?.message`
* Keep UI responsive and informative

```jsx
{errors.email && <p>{errors.email.message}</p>}
```

<br>

### 6. Optimize Performance

* Avoid re-renders by minimizing use of `useState`
* Prefer uncontrolled inputs (which RHF uses internally)

<br>

### 7. Use Libraries Wisely

| Library         | When to Use                               |
| --------------- | ----------------------------------------- |
| react-hook-form | Most practical, scalable, and fast        |
| Formik + Yup    | Heavier forms, complex validation schemas |

<br>

### 8. Points to Remember
1. Simulate network delay while submission
2. Disable submit button after submit to avoid multiple submits: provided utilility inside formState
   ```
   formState: { errors, isSubmitting }
   ```
3. Use `seterror` to define custom errors


### Final Tip

Use dev tools like React Hook Form's DevTool to debug and inspect form behavior.

