## Tailwind CSS Notes

### 1. Introduction to Tailwind CSS

**Tailwind CSS** is a utility-first CSS framework for rapidly building custom designs. Instead of writing custom CSS, you use utility classes directly in your HTML.

#### Benefits:

* No need to write custom CSS for most tasks
* Faster development with predefined classes
* Highly customizable
* Encourages responsive and consistent UI

---

### 2. Installation & Setup

#### Option 1: Using CDN (for quick testing)

```html
<link href="https://cdn.tailwindcss.com" rel="stylesheet">
```

Add this inside your `<head>` tag.

#### Option 2: Using Tailwind with Node.js (Recommended for Projects)

**Step 1: Initialize Project**

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

**Step 2: Folder Structure**

```
project/
├── src/
│   └── input.css
├── dist/
│   └── output.css
├── index.html
└── tailwind.config.js
```

**Step 3: input.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Step 4: Build CSS**

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

**Step 5: Link in HTML**

```html
<link href="./dist/output.css" rel="stylesheet">
```

<br>

### 3. Tailwind Config File (tailwind.config.js)

Generated via `npx tailwindcss init`
Used to customize:

* Theme (colors, spacing, etc.)
* Breakpoints
* Plugins
* Dark mode

```js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

<br>

### 4. Purging Unused CSS (for production)

Tailwind can remove unused CSS by scanning your HTML/JSX files:

```js
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  // other config
}
```

Use build command:

```bash
NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
```

<br>

### 5. Dark Mode Support

Enable in config:

```js
darkMode: 'class', // or 'media'
```

Usage:

```html
<body class="dark">
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white">
    Content
  </div>
</body>
```

<br>

---

<br>



### 2. Core Concepts

#### Utility-First Approach

Tailwind provides **utility classes** for every CSS property. You compose UI elements by combining these classes directly in HTML.

Example:

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

Benefits:

* No need to name or manage separate CSS classes
* Fast prototyping
* Highly maintainable

---

#### Mobile-First & Responsive Design

Tailwind is **mobile-first**. Classes apply from smallest screen and scale up.

Breakpoints:

| Prefix | Min Width |
| ------ | --------- |
| `sm:`  | 640px     |
| `md:`  | 768px     |
| `lg:`  | 1024px    |
| `xl:`  | 1280px    |
| `2xl:` | 1536px    |

Usage:

```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
```

---

#### State Variants

Tailwind supports pseudo-classes using prefixes:

* `hover:` — on hover
* `focus:` — on input focus
* `active:` — on click
* `disabled:` — on disabled state

Example:

```html
<input class="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
```

---

#### Dark Mode

Handled using `dark:` prefix, once enabled in config (`darkMode: 'class'`):

```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  Adaptive to Dark Mode
</div>
```

---

#### Customization

You can customize Tailwind using `tailwind.config.js`:

Example: Extend color palette

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A'
      }
    },
  }
}
```

---

#### Using @apply Directive

You can compose utility classes inside CSS using `@apply`:

```css
.btn {
  @apply bg-blue-500 text-white font-semibold py-2 px-4 rounded;
}
```


<br>

---

<br>


### 3. Layout

#### Container

The `container` class sets a max-width at different breakpoints.

```html
<div class="container mx-auto px-4">
  Content
</div>
```

#### Box Sizing

* `box-border`: Includes padding and border in total width/height
* `box-content`: Default behavior (excludes padding and border)

#### Display

* `block`, `inline-block`, `inline`
* `flex`, `inline-flex`
* `grid`, `inline-grid`
* `hidden`

#### Example:

```html
<div class="flex">
  <div class="w-1/2">Left</div>
  <div class="w-1/2">Right</div>
</div>
```

---

### Positioning

* `static`, `relative`, `absolute`, `fixed`, `sticky`
* Use with `top`, `right`, `bottom`, `left` utilities:

```html
<div class="relative top-4 left-2">Positioned Box</div>
```

#### Z-Index

* `z-0`, `z-10`, `z-20`, `z-30`, ..., `z-50`
* Custom values can be added in `tailwind.config.js`

#### Float & Clear

* `float-left`, `float-right`, `float-none`
* `clear-left`, `clear-right`, `clear-both`, `clear-none`

---

### Overflow

* `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
* Also: `overflow-x-*`, `overflow-y-*`

#### Object Fit & Position

Used for controlling how images/videos scale:

* `object-contain`, `object-cover`, `object-fill`, `object-none`
* `object-top`, `object-center`, `object-bottom`, `object-left`, etc.

```html
<img class="object-cover h-48 w-full" src="image.jpg" />
```



<br>

---

<br>

### 4. Flexbox & Grid

#### Flexbox

**Flex Container**

* `flex`: Enables flex layout
* `inline-flex`: Flex on inline elements

**Flex Direction**

* `flex-row` (default)
* `flex-row-reverse`
* `flex-col`
* `flex-col-reverse`

**Flex Wrap**

* `flex-wrap`
* `flex-wrap-reverse`
* `flex-nowrap`

**Justify Content** (main axis)

* `justify-start`
* `justify-center`
* `justify-end`
* `justify-between`
* `justify-around`
* `justify-evenly`

**Align Items** (cross axis)

* `items-start`
* `items-center`
* `items-end`
* `items-stretch`
* `items-baseline`

**Align Self**

* `self-auto`, `self-start`, `self-center`, `self-end`, `self-stretch`

**Align Content** (multi-line)

* `content-center`, `content-start`, `content-end`, `content-between`, `content-around`, `content-evenly`

**Gap Between Items**

* `gap-0`, `gap-1`, `gap-2`, ..., `gap-12`
* `gap-x-*`, `gap-y-*`

**Grow, Shrink, and Basis**

* `flex-grow`, `flex-grow-0`
* `flex-shrink`, `flex-shrink-0`
* `basis-1/2`, `basis-full`, `basis-auto`, etc.

Example:

```html
<div class="flex justify-between items-center gap-4">
  <div class="flex-1 bg-blue-200">Box 1</div>
  <div class="flex-1 bg-blue-400">Box 2</div>
</div>
```

---

#### CSS Grid

**Enable Grid**

* `grid`: Enables grid layout
* `inline-grid`

**Grid Template Columns**

* `grid-cols-1` to `grid-cols-12`
* `grid-cols-none`

**Grid Template Rows**

* `grid-rows-1` to `grid-rows-6`

**Grid Column Span**

* `col-span-1` to `col-span-12`
* `col-start-*`, `col-end-*`

**Grid Row Span**

* `row-span-1` to `row-span-6`
* `row-start-*`, `row-end-*`

**Gap Between Cells**

* `gap-*`, `gap-x-*`, `gap-y-*`

**Place Items and Content**

* `place-items-start`, `place-items-center`, `place-items-end`
* `place-content-start`, `place-content-center`, `place-content-between`

Example:

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-gray-300">1</div>
  <div class="bg-gray-400 col-span-2">2</div>
  <div class="bg-gray-500">3</div>
</div>
```




<br>

---

<br>

### 5. Spacing & Sizing

#### Margin (`m-`, `mx-`, `my-`, `mt-`, `mr-`, `mb-`, `ml-`)

* Example: `m-4`, `mt-2`, `mx-auto`, `mb-0`
* Negative margins: `-m-1`, `-mt-2`, etc.

#### Padding (`p-`, `px-`, `py-`, `pt-`, `pr-`, `pb-`, `pl-`)

* Example: `p-4`, `px-2`, `pt-1`, `pb-8`

#### Space Between Elements

* Applies spacing **between** child elements (in flex/grid only)
* `space-x-*`: horizontal spacing
* `space-y-*`: vertical spacing

```html
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

#### Width (`w-*`)

* Fixed sizes: `w-0`, `w-1`, ..., `w-96`
* Fractional sizes: `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, ...
* Full sizes: `w-full`, `w-screen`, `w-auto`, `w-min`, `w-max`, `w-fit`

#### Min/Max Width

* `min-w-*`: `min-w-0`, `min-w-full`, `min-w-min`, etc.
* `max-w-*`: `max-w-xs`, `max-w-sm`, ..., `max-w-full`, `max-w-screen-md`

---

#### Height (`h-*`)

* Similar to width: `h-0`, `h-10`, `h-32`, `h-full`, `h-screen`, `h-auto`, etc.

#### Min/Max Height

* `min-h-*`: `min-h-0`, `min-h-screen`, etc.
* `max-h-*`: `max-h-full`, `max-h-screen`, etc.



<br>

---

<br>


### 6. Typography

#### Font Family

* `font-sans` (default), `font-serif`, `font-mono`

#### Font Size (`text-*`)

* `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ..., `text-9xl`

#### Font Weight (`font-*`)

* `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`

#### Text Alignment

* `text-left`, `text-center`, `text-right`, `text-justify`

#### Text Color

* `text-gray-800`, `text-red-500`, `text-blue-600`, etc.
* `text-white`, `text-black`, etc.

#### Text Decoration

* `underline`, `line-through`, `no-underline`
* `decoration-solid`, `decoration-dashed`, `decoration-dotted`, etc.

#### Text Transform

* `uppercase`, `lowercase`, `capitalize`, `normal-case`

#### Line Height (`leading-*`)

* `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`

#### Letter Spacing (`tracking-*`)

* `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`

#### Text Overflow

* `truncate`: One line with ellipsis
* `overflow-ellipsis`, `overflow-clip`
* Combine with `whitespace-nowrap` to prevent wrapping

Example:

```html
<p class="text-lg font-semibold text-gray-800 leading-relaxed">
  Tailwind typography example
</p>
```


<br>

---

<br>


### 7. Backgrounds

#### Background Color (`bg-*`)

* `bg-red-500`, `bg-blue-200`, `bg-green-100`, etc.
* `bg-transparent`, `bg-white`, `bg-black`

#### Hover/Focus States

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:bg-blue-800">
  Hover me
</button>
```

#### Background Opacity

* `bg-opacity-0`, `bg-opacity-25`, `bg-opacity-50`, `bg-opacity-75`, `bg-opacity-100`

#### Background Image

* `bg-none`
* `bg-[url('/img/example.png')]` (JIT mode)

#### Background Position

* `bg-top`, `bg-center`, `bg-bottom`, `bg-left`, `bg-right`

#### Background Size

* `bg-auto`, `bg-cover`, `bg-contain`

#### Background Repeat

* `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`, `bg-repeat-round`, `bg-repeat-space`

#### Background Attachment

* `bg-fixed`, `bg-local`, `bg-scroll`

#### Background Gradient

Tailwind supports gradients using these utilities:

* `bg-gradient-to-r`, `bg-gradient-to-l`, `bg-gradient-to-t`, `bg-gradient-to-b`
* Use with `from-*`, `via-*`, `to-*`

Example:

```html
<div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-32 w-full">
  Gradient Background
</div>
```



<br>

---

<br>

### 8. Borders & Effects

#### Border Width

* `border`, `border-0`, `border-2`, `border-4`, `border-8`
* Side-specific: `border-t`, `border-b-2`, `border-l-4`, etc.

#### Border Color

* `border-gray-300`, `border-red-500`, `border-blue-700`, etc.

#### Border Radius (`rounded-*`)

* `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
* Specific sides: `rounded-t-lg`, `rounded-b-md`, `rounded-l`, `rounded-r`

#### Outline & Ring

* `outline`, `outline-none`, `outline-2`, `outline-offset-2`, etc.
* `ring`, `ring-2`, `ring-offset-2`, `ring-blue-500`
* `focus:ring-*` for input focus styles

Example:

```html
<input class="border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500" />
```

---

#### Box Shadow (`shadow-*`)

* `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
* `shadow-inner`, `shadow-outline`, `shadow-none`

Example:

```html
<div class="p-4 shadow-lg rounded-lg bg-white">
  Card with shadow
</div>
```

---

#### Divide Utilities (borders between children)

* `divide-x`, `divide-y`
* `divide-gray-300`, `divide-red-400`, etc.
* Use with `divide-dashed`, `divide-dotted`, `divide-solid`

```html
<div class="divide-y divide-dashed divide-blue-300">
  <p>Item 1</p>
  <p>Item 2</p>
</div>
```



<br>

---

<br>

### 9. Transitions & Animation

#### Transition Property (`transition-*`)

* `transition-none`
* `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, etc.

#### Transition Duration (`duration-*`)

* `duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, ..., `duration-1000`

#### Transition Timing Function (`ease-*`)

* `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`

#### Transition Delay (`delay-*`)

* `delay-75`, `delay-100`, `delay-150`, ..., `delay-1000`

Example:

```html
<button class="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out">
  Hover me
</button>
```

---

#### Animation (`animate-*`)

Tailwind includes a few default animations:

* `animate-none`
* `animate-spin`: continuous rotation
* `animate-ping`: pulsing effect
* `animate-pulse`: fading in/out
* `animate-bounce`: bouncing movement

```html
<div class="animate-bounce w-6 h-6 bg-blue-500"></div>
```

#### Custom Keyframes (via `tailwind.config.js`)

You can define your own animations and keyframes:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
}
```

Usage:

```html
<div class="animate-wiggle">Wiggle Text</div>
```


<br>

---

<br>

### 10. Responsive Design & Variants

#### Mobile-First Breakpoints

Tailwind follows a mobile-first strategy. Classes are applied from the smallest screen size and scale up.

**Breakpoints:**

| Prefix | Min Width |
| ------ | --------- |
| `sm:`  | 640px     |
| `md:`  | 768px     |
| `lg:`  | 1024px    |
| `xl:`  | 1280px    |
| `2xl:` | 1536px    |

**Usage Example:**

```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
```

---

#### Responsive Prefixes

Apply styles conditionally based on screen size using prefixes:

* `sm:bg-blue-100`
* `md:p-4`
* `lg:flex`
* `xl:text-right`

#### State Variants

Tailwind provides variants for common UI states:

* `hover:`
* `focus:`
* `active:`
* `disabled:`
* `checked:`
* `group-hover:`
* `peer-focus:`

**Example:**

```html
<input class="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
```

---

#### Dark Mode Variants

Enable dark mode in config:

```js
darkMode: 'class' // or 'media'
```

Use with `dark:` prefix:

```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  Adaptive UI
</div>
```


<br>

---

<br>

### 11. Forms

#### Input Fields

Tailwind provides utilities to style input fields with borders, padding, focus rings, and shadows.

```html
<input class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
```

#### Checkbox & Radio

```html
<input type="checkbox" class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
<input type="radio" class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300">
```

#### Select Dropdown

```html
<select class="border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

#### Textarea

```html
<textarea class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter message"></textarea>
```

---

### Tailwind Forms Plugin (Recommended)

Tailwind's core styles are minimal for form controls. The `@tailwindcss/forms` plugin provides better base styles.

**Install Plugin:**

```bash
npm install -D @tailwindcss/forms
```

**Add to Config:**

```js
// tailwind.config.js
plugins: [
  require('@tailwindcss/forms'),
],
```

**Benefits:**

* Normalizes appearance of form fields
* Removes browser inconsistencies
* Adds sensible defaults

<br>

---

<br>

### 12. Customization

Tailwind is highly customizable via the `tailwind.config.js` file.

#### Extending the Theme

Add new colors, spacing, fonts, and more under the `extend` key:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#1DA1F2',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

---

#### Custom Utilities

Use the `@layer utilities` directive to define your own utility classes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px #888;
  }
}
```

---

#### Using Plugins

Tailwind supports a rich ecosystem of plugins:

* `@tailwindcss/forms`
* `@tailwindcss/typography`
* `@tailwindcss/aspect-ratio`
* `@tailwindcss/line-clamp`

**Example:**

```bash
npm install -D @tailwindcss/typography
```

```js
// tailwind.config.js
plugins: [
  require('@tailwindcss/typography'),
],
```

Use in HTML:

```html
<article class="prose">
  <h1>Article title</h1>
  <p>This text is styled with the Typography plugin.</p>
</article>
```

---

#### @apply Directive

Use `@apply` to combine utilities into reusable classes:

```css
.btn-primary {
  @apply bg-blue-500 text-white font-semibold py-2 px-4 rounded;
}
```



<br>

---

<br>

### 13. Tailwind with Frameworks

#### Tailwind with React

1. **Install Tailwind**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **Configure tailwind.config.js**

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **Import in your CSS** (e.g., `index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Use in JSX**

```jsx
function Button() {
  return <button className="bg-blue-500 text-white py-2 px-4 rounded">Click Me</button>
}
```

---

#### Tailwind in MERN Stack

Tailwind is frontend-only and works well with the React part of MERN. Backend (MongoDB, Express, Node.js) remains unaffected.

Typical integration:

* Use Tailwind in your React frontend folder
* Keep separate `client/` folder with Tailwind setup

Example folder structure:

```
mern-app/
├── client/        → React + Tailwind CSS
├── server/        → Node.js + Express
└── package.json   → (with concurrent dev scripts)
```

---

#### UI Libraries Built with Tailwind

* **Tailwind UI** – official premium component library
* **daisyUI** – open-source UI components (buttons, cards, alerts)
  ```bash
  npm install daisyui
  ```
  ```js
  // tailwind.config.js
  plugins: [require("daisyui")],
  ```
* **Flowbite** – Tailwind components with JS functionality (modals, dropdowns)
* **Headless UI** – accessible component logic (modals, popovers, etc.)

<br>

 **Tailwind CSS notes complete.**

