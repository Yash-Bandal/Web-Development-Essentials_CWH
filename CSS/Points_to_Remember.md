## In react or other elements
1. To change the default styling of forms, navbars , options, dropdowns, inputs provided by html, change the `web-toolkits` css
```css
/* Default (Light mode) autofill */
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #ffffff inset !important; /* Tailwind light: bg-white */
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  -webkit-text-fill-color: #1f2937 !important; /* Tailwind light: text-gray-800 */
  transition: background-color 5000s ease-in-out 0s;
}

/* Dark mode override (only when .dark class is applied to html or body) */
.dark input:-webkit-autofill,
.dark textarea:-webkit-autofill,
.dark select:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #1f2937 inset !important; /* Tailwind dark: bg-gray-800 */
  -webkit-box-shadow: 0 0 0px 1000px #1f2937 inset !important;
  -webkit-text-fill-color: #f3f4f6 !important; /* Tailwind dark: text-gray-100 */
}
```
