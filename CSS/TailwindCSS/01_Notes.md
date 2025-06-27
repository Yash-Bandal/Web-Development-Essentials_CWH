<h1 align = "center"> <b>Tailwind CSS</b> </h1>

<br>

1. [Documentation](https://v2.tailwindcss.com/docs)
2. [Portal](https://tailwindcss.com/)
3. [shadcn](https://ui.shadcn.com/)
4. [Tailwind-Play](https://play.tailwindcss.com/)

<br>

### Index
1. [Introduction](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#1-introduction)
2. [Core Concepts](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#2-core-concepts)
3. [Layout](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#3-layout)
4. [Flexbox & Grid](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#4-flexbox--grid)
5. [Spacing & Sizing](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#5-spacing--sizing)
6. [Typography](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#6-typography)
7. [Backgrounds](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#7-backgrounds)
8. [Borders & Effects](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#8-borders--effects)
9. [Transitions & Animation](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#9-transitions--animation)
10. [Responsive Design & Variants](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#10-responsive-design--variants)
11. [Forms](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#11-forms)
12. [Customization](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#12-customization)
13. [Tailwind with Frameworks](https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/main/CSS/TailwindCSS/01_Notes.md#13-tailwind-with-frameworks)


<br>

## 1. Introduction

### 1.1 Introduction to Tailwind CSS
**Tailwind CSS** is a utility-first CSS framework designed for rapid custom design creation. It enables developers to style directly in HTML using utility classes, eliminating the need for extensive custom CSS.

#### Benefits:
- Eliminates the need for custom CSS in most cases
- Accelerates development with predefined utility classes
- Highly customizable for tailored designs
- Promotes responsive and consistent UI

### 1.2 Installation & Setup

#### 1.2.1 Option 1: Using CDN (Quick Testing)
```html
<link href="https://cdn.tailwindcss.com" rel="stylesheet">
```
Add this inside the `<head>` tag for quick prototyping.

#### 1.2.2 Option 2: Using Tailwind with Node.js (Recommended for Projects)
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

**Step 3: Configure input.css**
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

### 1.3 Tailwind Configuration File (tailwind.config.js)
Generated via `npx tailwindcss init`. Used to customize:
- Theme (colors, spacing, etc.)
- Breakpoints
- Plugins
- Dark mode

```js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 1.4 Purging Unused CSS (Production)
Tailwind removes unused CSS by scanning HTML/JSX files:
```js
module.exports = {
  content: ["./*.html", "./src/**/*.{js,jsx}"],
  // other config
}
```

Build command for production:
```bash
NODE_ENV=production npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
```

### 1.5 Dark Mode Support
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

## 2. Core Concepts

### 2.1 Utility-First Approach
Tailwind provides utility classes for every CSS property, allowing UI composition directly in HTML.

Example:
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

**Benefits:**
- Eliminates the need to name or manage separate CSS classes
- Enables fast prototyping
- Highly maintainable codebase

### 2.2 Mobile-First & Responsive Design
Tailwind is mobile-first, with classes scaling up from the smallest screen size.

**Breakpoints:**
| Prefix | Min Width |
|--------|-----------|
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

### 2.3 State Variants
Tailwind supports pseudo-classes with prefixes:
- `hover:` — on hover
- `focus:` — on input focus
- `active:` — on click
- `disabled:` — on disabled state

Example:
```html
<input class="border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
```

### 2.4 Dark Mode
Use the `dark:` prefix after enabling in config (`darkMode: 'class'`):
```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  Adaptive to Dark Mode
</div>
```

### 2.5 Customization
Customize Tailwind via `tailwind.config.js`. Example: Extend color palette:
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

### 2.6 Using @apply Directive
Combine utility classes in CSS using `@apply`:
```css
.btn {
  @apply bg-blue-500 text-white font-semibold py-2 px-4 rounded;
}
```


<br>

---

<br>

## 3. Layout

### 3.1 Container
The `container` class sets max-width at different breakpoints.
```html
<div class="container mx-auto px-4">
  Content
</div>
```

### 3.2 Box Sizing
- `box-border`: Includes padding and border in width/height
- `box-content`: Excludes padding and border (default)

### 3.3 Display
- `block`, `inline-block`, `inline`
- `flex`, `inline-flex`
- `grid`, `inline-grid`
- `hidden`

Example:
```html
<div class="flex">
  <div class="w-1/2">Left</div>
  <div class="w-1/2">Right</div>
</div>
```

### 3.4 Positioning
- `static`, `relative`, `absolute`, `fixed`, `sticky`
- Combine with `top`, `right`, `bottom`, `left` utilities:
```html
<div class="relative top-4 left-2">Positioned Box</div>
```

### 3.5 Z-Index
- `z-0`, `z-10`, `z-20`, ..., `z-50`
- Custom values can be added in `tailwind.config.js`

### 3.6 Float & Clear
- `float-left`, `float-right`, `float-none`
- `clear-left`, `clear-right`, `clear-both`, `clear-none`

### 3.7 Overflow
- `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`
- Also: `overflow-x-*`, `overflow-y-*`

### 3.8 Object Fit & Position
Controls image/video scaling:
- `object-contain`, `object-cover`, `object-fill`, `object-none`
- `object-top`, `object-center`, `object-bottom`, `object-left`, etc.

Example:
```html
<img class="object-cover h-48 w-full" src="image.jpg" />
```


<br>

---

<br>

## 4. Flexbox & Grid

### 4.1 Flexbox
**Flex Container**
- `flex`: Enables flex layout
- `inline-flex`: Flex for inline elements

**Flex Direction**
- `flex-row` (default), `flex-row-reverse`
- `flex-col`, `flex-col-reverse`

**Flex Wrap**
- `flex-wrap`, `flex-wrap-reverse`, `flex-nowrap`

**Justify Content** (main axis)
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly`

**Align Items** (cross axis)
- `items-start`, `items-center`, `items-end`, `items-stretch`, `items-baseline`

**Align Self**
- `self-auto`, `self-start`, `self-center`, `self-end`, `self-stretch`

**Align Content** (multi-line)
- `content-center`, `content-start`, `content-end`, `content-between`, `content-around`, `content-evenly`

**Gap Between Items**
- `gap-0`, `gap-1`, ..., `gap-12`
- `gap-x-*`, `gap-y-*`

**Grow, Shrink, and Basis**
- `flex-grow`, `flex-grow-0`
- `flex-shrink`, `flex-shrink-0`
- `basis-1/2`, `basis-full`, `basis-auto`, etc.

Example:
```html
<div class="flex justify-between items-center gap-4">
  <div class="flex-1 bg-blue-200">Box 1</div>
  <div class="flex-1 bg-blue-400">Box 2</div>
</div>
```

### 4.2 CSS Grid
**Enable Grid**
- `grid`: Enables grid layout
- `inline-grid`

**Grid Template Columns**
- `grid-cols-1` to `grid-cols-12`, `grid-cols-none`

**Grid Template Rows**
- `grid-rows-1` to `grid-rows-6`

**Grid Column Span**
- `col-span-1` to `col-span-12`
- `col-start-*`, `col-end-*`

**Grid Row Span**
- `row-span-1` to `row-span-6`
- `row-start-*`, `row-end-*`

**Gap Between Cells**
- `gap-*`, `gap-x-*`, `gap-y-*`

**Place Items and Content**
- `place-items-start`, `place-items-center`, `place-items-end`
- `place-content-start`, `place-content-center`, `place-content-between`

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

## 5. Spacing & Sizing

### 5.1 Margin

#### Syntax
```
m {t | r | b | l} - size
```

- `m-`, `mx-`, `my-`, `mt-`, `mr-`, `mb-`, `ml-`
- Example: `m-4`, `mt-2`, `mx-auto`, `mb-0`
- Negative margins: `-m-1`, `-mt-2`, etc.

### 5.2 Padding
- `p-`, `px-`, `py-`, `pt-`, `pr-`, `pb-`, `pl-`
- Example: `p-4`, `px-2`, `pt-1`, `pb-8`

### 5.3 Space Between Elements
Applies spacing **between** child elements in flex/grid:
- `space-x-*`: Horizontal spacing
- `space-y-*`: Vertical spacing

Example:
```html
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### 5.4 Width
- Fixed: `w-0`, `w-1`, ..., `w-96`
- Fractional: `w-1/2`, `w-1/3`, `w-2/3`, `w-1/4`, ...
- Full: `w-full`, `w-screen`, `w-auto`, `w-min`, `w-max`, `w-fit`

### 5.5 Min/Max Width
- `min-w-*`: `min-w-0`, `min-w-full`, `min-w-min`, etc.
- `max-w-*`: `max-w-xs`, `max-w-sm`, ..., `max-w-full`, `max-w-screen-md`

### 5.6 Height
- Fixed: `h-0`, `h-10`, `h-32`, `h-full`, `h-screen`, `h-auto`, etc.

### 5.7 Min/Max Height
- `min-h-*`: `min-h-0`, `min-h-screen`, etc.
- `max-h-*`: `max-h-full`, `max-h-screen`, etc.


<br>

---

<br>

## 6. Typography

### 6.1 Font Family
- `font-sans` (default), `font-serif`, `font-mono`

### 6.2 Font Size
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, ..., `text-9xl`

### 6.3 Font Weight
- `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black`

### 6.4 Text Alignment
- `text-left`, `text-center`, `text-right`, `text-justify`

### 6.5 Text Color
- `text-gray-800`, `text-red-500`, `text-blue-600`, `text-white`, `text-black`, etc.

### 6.6 Text Decoration
- `underline`, `line-through`, `no-underline`
- `decoration-solid`, `decoration-dashed`, `decoration-dotted`, etc.

### 6.7 Text Transform
- `uppercase`, `lowercase`, `capitalize`, `normal-case`

### 6.8 Line Height
- `leading-none`, `leading-tight`, `leading-snug`, `leading-normal`, `leading-relaxed`, `leading-loose`

### 6.9 Letter Spacing
- `tracking-tighter`, `tracking-tight`, `tracking-normal`, `tracking-wide`, `tracking-wider`, `tracking-widest`

### 6.10 Text Overflow
- `truncate`: One line with ellipsis
- `overflow-ellipsis`, `overflow-clip`
- Combine with `whitespace-nowrap` to prevent wrapping

Example:
```html
<p class="text-lg font-semibold text-gray-800 leading-relaxed">
  Tailwind typography example
</p>
```


<br>

---

<br>

## 7. Backgrounds

### 7.1 Background Color
- `bg-red-500`, `bg-blue-200`, `bg-green-100`, `bg-transparent`, `bg-white`, `bg-black`

### 7.2 Hover/Focus States
```html
<button class="bg-blue-500 hover:bg-blue-700 focus:bg-blue-800">
  Hover me
</button>
```

### 7.3 Background Opacity
- `bg-opacity-0`, `bg-opacity-25`, `bg-opacity-50`, `bg-opacity-75`, `bg-opacity-100`

### 7.4 Background Image
- `bg-none`
- `bg-[url('/img/example.png')]` (JIT mode)

### 7.5 Background Position
- `bg-top`, `bg-center`, `bg-bottom`, `bg-left`, `bg-right`

### 7.6 Background Size
- `bg-auto`, `bg-cover`, `bg-contain`

### 7.7 Background Repeat
- `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y`, `bg-repeat-round`, `bg-repeat-space`

### 7.8 Background Attachment
- `bg-fixed`, `bg-local`, `bg-scroll`

### 7.9 Background Gradient
- `bg-gradient-to-r`, `bg-gradient-to-l`, `bg-gradient-to-t`, `bg-gradient-to-b`
- Combine with `from-*`, `via-*`, `to-*`

Example:
```html
<div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-32 w-full">
  Gradient Background
</div>
```


<br>

---

<br>

## 8. Borders & Effects

### 8.1 Border Width
- `border`, `border-0`, `border-2`, `border-4`, `border-8`
- Side-specific: `border-t`, `border-b-2`, `border-l-4`, etc.

### 8.2 Border Color
- `border-gray-300`, `border-red-500`, `border-blue-700`, etc.

### 8.3 Border Radius
- `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`
- Specific sides: `rounded-t-lg`, `rounded-b-md`, `rounded-l`, `rounded-r`

### 8.4 Outline & Ring
- `outline`, `outline-none`, `outline-2`, `outline-offset-2`, etc.
- `ring`, `ring-2`, `ring-offset-2`, `ring-blue-500`
- `focus:ring-*` for input focus styles

Example:
```html
<input class="border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500" />
```

### 8.5 Box Shadow
- `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
- `shadow-inner`, `shadow-outline`, `shadow-none`

Example:
```html
<div class="p-4 shadow-lg rounded-lg bg-white">
  Card with shadow
</div>
```

### 8.6 Divide Utilities
Borders between child elements:
- `divide-x`, `divide-y`
- `divide-gray-300`, `divide-red-400`, etc.
- Combine with `divide-dashed`, `divide-dotted`, `divide-solid`

Example:
```html
<div class="divide-y divide-dashed divide-blue-300">
  <p>Item 1</p>
  <p>Item 2</p>
</div>
```


<br>

---

<br>

## 9. Transitions & Animation

### 9.1 Transition Property
- `transition-none`
- `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, etc.

### 9.2 Transition Duration
- `duration-75`, `duration-100`, `duration-150`, `duration-200`, `duration-300`, ..., `duration-1000`

### 9.3 Transition Timing Function
- ease-linear`, `ease-in`, `ease-out`, `ease-in-out`

### 9.4 Transition Delay
- `delay-75`, `delay-100`, `delay-150`, ..., `delay-1000`

Example:
```html
<button class="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out">
  Hover me
</button>
```


<br>

---

<br>

### 9.5 Animation
Default animations:
- `animate-none`, `animate-spin`, `animate-ping`, `animate-pulse`, `animate-bounce`

Example:
```html
<div class="animate-bounce w-6 h-6 bg-blue-500"></div>
```

### 9.6 Custom Keyframes
Define custom animations in `tailwind.config.js`:
```js
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

## 10. Responsive Design & Variants

### 10.1 Mobile-First Breakpoints
Classes apply from the smallest screen and scale up.

**Breakpoints:**
| Prefix | Min Width |
|--------|-----------|
| `sm:`  | 640px     |
| `md:`  | 768px     |
| `lg:`  | 1024px    |
| `xl:`  | 1280px    |
| `2xl:` | 1536px    |

Example:
```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive Text
</div>
```

### 10.2 Responsive Prefixes
Apply styles conditionally using:
- `sm:bg-blue-100`, `md:p-4`, `lg:flex`, `xl:text-right`

### 10.3 State Variants
Support for UI states:
- `hover:`, `focus:`, `active:`, `disabled:`, `checked:`, `group-hover:`, `peer-focus:`

Example:
```html
<input class="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />
```

### 10.4 Dark Mode Variants
Enable in config (`darkMode: 'class'`):
```html
<div class="bg-white text-black dark:bg-gray-800 dark:text-white">
  Adaptive UI
</div>
```


<br>

---

<br>

## 11. Forms

### 11.1 Input Fields
Style inputs with utilities for borders, padding, and focus states:
```html
<input class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
```

### 11.2 Checkbox & Radio
```html
<input type="checkbox" class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
<input type="radio" class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300">
```

### 11.3 Select Dropdown
```html
<select class="border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### 11.4 Textarea
```html
<textarea class="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter message"></textarea>
```

### 11.5 Tailwind Forms Plugin
Enhances form control styling. Install:
```bash
npm install -D @tailwindcss/forms
```

Add to config:
```js
plugins: [
  require('@tailwindcss/forms'),
],
```

**Benefits:**
- Normalizes form field appearance
- Reduces browser inconsistencies
- Provides sensible defaults


<br>

---

<br>

## 12. Customization

### 12.1 Extending the Theme
Add custom colors, spacing, fonts, etc.:
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

### 12.2 Custom Utilities
Define custom utilities using `@layer utilities`:
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

### 12.3 Using Plugins
Popular plugins include:
- `@tailwindcss/forms`
- `@tailwindcss/typography`
- `@tailwindcss/aspect-ratio`
- `@tailwindcss/line-clamp`

Example:
```bash
npm install -D @tailwindcss/typography
```

```js
plugins: [
  require('@tailwindcss/typography'),
],
```

Usage:
```html
<article class="prose">
  <h1>Article title</h1>
  <p>This text is styled with the Typography plugin.</p>
</article>
```

### 12.4 @apply Directive
Combine utilities into reusable classes:
```css
.btn-primary {
  @apply bg-blue-500 text-white font-semibold py-2 px-4 rounded;
}
```


<br>

---

<br>

## 13. Tailwind with Frameworks

### 13.1 Tailwind with React
**Install Tailwind:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure tailwind.config.js:**
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Import in CSS (e.g., `index.css`):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Use in JSX:**
```jsx
function Button() {
  return <button className="bg-blue-500 text-white py-2 px-4 rounded">Click Me</button>
}
```

### 13.2 Tailwind in MERN Stack
Tailwind integrates with the React frontend in a MERN stack. Backend (MongoDB, Express, Node.js) remains unaffected.

**Folder Structure:**
```
mern-app/
├── client/        → React + Tailwind CSS
├── server/        → Node.js + Express
└── package.json
```

### 13.3 UI Libraries Built with Tailwind
- **Tailwind UI**: Official premium component library
- **daisyUI**: Open-source UI components
  ```bash
  npm install daisyui
  ```
  ```js
  plugins: [require("daisyui")],
  ```
- **Flowbite**: Components with JS functionality
- **Headless UI**: Accessible component logic


<br>

---

<br>
