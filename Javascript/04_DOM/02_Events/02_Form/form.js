
//==============================  Form.js ==================================
const output = document.getElementById("output");
const form = document.getElementById("myForm");
const textInput = document.getElementById("textInput"); //points input of form
const selectBox = document.getElementById("selectBox");
const textarea = document.getElementById("textarea");

// Event: input (triggered when the value of an input or textarea changes)
// Expected Output: Updates dynamically as you type.
textInput.addEventListener("input", () => {
  output.textContent = `Text Input: ${textInput.value}`;
});

// Event: focus (triggered when an element gains focus)
// Expected Output: "Text input is focused!"
textInput.addEventListener("focus", () => {
  output.textContent = "Text input is focused!";
});

// Event: blur (triggered when an element loses focus)
// Expected Output: "Text input lost focus!"
textInput.addEventListener("blur", () => {
  output.textContent = "Text input lost focus!";
});

// Event: change (triggered when a select element's value changes)
// Expected Output: "Selected option: Option X"
selectBox.addEventListener("change", () => {
  output.textContent = `Selected option: ${selectBox.value}`;
});

// Event: input (triggered as text is typed in a textarea)
// Expected Output: "Textarea input: Your text..."
textarea.addEventListener("input", () => {
  output.textContent = `Textarea input: ${textarea.value}`;
});

// Event: submit (triggered when the form is submitted)
// Expected Output: "Form submitted!"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents the page from reloading
  output.textContent = "Form submitted!";
});


// Event: reset (triggered when the form is reset)
// Expected Output: "Form reset!"
document.getElementById("myForm").addEventListener("reset", () => {
    output.textContent = "Form reset!";
  });
  
