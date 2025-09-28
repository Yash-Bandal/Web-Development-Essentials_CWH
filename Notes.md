## Notes :
 
### HTML
display : flex and justify all props

### CSS
1. Box Shadow set:
    - box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px -10px; (within hover)
    - transform: scale(1.02);
    - transition: transform 0.3s ease, box-shadow 0.5s ease; (before hover)
2. Most of the times use
    - Position
    - margin and padding
    - Display
    - Overflow

<br>
<div align="center">
  <img src="https://github.com/Yash-Bandal/Web-Development-Essentials_CWH/blob/93ae5c7707c5a8fc914008bee6325b8759860ccc/NodeJS/StoreRoom/FlexBox.PNG" width=600>
</div>
<br>
      

### javascript
designMode = on..temporarily edit websites

<br>

---

<br>

#  Design Thinking
1. Visit the website you want to clone design
2. Inspect sections and their css
3. Map on a plain paper
4. Then implement
5. Dont go to chatgpt without a proper structure, use AI sometimes for errors and enhance something, not blind coding

<br>

# Knowledge based
## Backend FrontEnd Connection
- Its simple, just prrocess datta at backend and create/parse into a JSON format and create a **POST** request from backend -JSONIFY
- On the frontend, fetch the api sent from backend
- Use CORS library

### why do we declare global var of local
because local var changes every time new funct called...global is static

### If get element by tagname does not work..check if u have used [0]
```js
getElementsByTagName("input")[0]  //work
getElementsByTagName("input")     //not work
```


> [!Tip]
>  A good way is to make the web responsive on phone ..ie adding media queries side by side

<br>

---

# Resources
### Hamburger nav bar
You can toggle the visibility of a hamburger menu close button using CSS display: none; [default] and display: block;[on phone media query] based on a media query for mobile devices.




### Text animations
[1](https://tobiasahlin.com/moving-letters/)
[2](https://prismic.io/blog/css-hover-effects#3-explosive-text-effect)

### Swwet Alerts
[SweetAlerts](https://sweetalert2.github.io/)

### UI/UX Componants

| Library                        | Description                             | Website                                                                                    |
| ------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------ |
| **SweetAlert2**                | Modern, beautiful alerts with animation | [https://sweetalert2.github.io](https://sweetalert2.github.io)                             |
| **Toastr**                     | Simple, non-blocking notifications      | [https://codeseven.github.io/toastr](https://codeseven.github.io/toastr)                   |
| **Animate.css**                | Ready-to-use CSS animations             | [https://animate.style](https://animate.style)                                             |
| **AOS (Animate on Scroll)**    | Animate elements on scroll              | [https://michalsnik.github.io/aos](https://michalsnik.github.io/aos)                       |
| **Notyf**                      | Minimalist notification library         | [https://github.com/caroso1222/notyf](https://github.com/caroso1222/notyf)                 |
| **VanillaTilt.js**             | 3D hover tilt effect                    | [https://micku7zu.github.io/vanilla-tilt.js/](https://micku7zu.github.io/vanilla-tilt.js/) |
| **Particles.js / tsparticles** | Cool background particle effects        | [https://vincentgarreau.com/particles.js](https://vincentgarreau.com/particles.js)         |
| **Shepherd.js**                | Guided user tour overlays               | [https://shepherdjs.dev](https://shepherdjs.dev)                                           |
| **Flatpickr**                  | Lightweight date picker                 | [https://flatpickr.js.org](https://flatpickr.js.org)                                       |
| **Swiper.js**                  | Modern mobile touch slider              | [https://swiperjs.com](https://swiperjs.com)                                               |

### UI Kits (Templates)

| Kit                   | Description                                  | Website                                          |
| --------------------- | -------------------------------------------- | ------------------------------------------------ |
| **Tailwind UI**       | Official Tailwind premium components         | [https://tailwindui.com](https://tailwindui.com) |
| **Flowbite**          | Free Tailwind components & templates         | [https://flowbite.com](https://flowbite.com)     |
| **DaisyUI**           | Utility-first component library for Tailwind | [https://daisyui.com](https://daisyui.com)       |
| **UIdeck**            | Free modern HTML & Tailwind templates        | [https://uideck.com](https://uideck.com)         |
| **Cruip**             | Modern SaaS and landing page templates       | [https://cruip.com](https://cruip.com)           |
| **CodePen Templates** | Search "UI template", "login form", etc.     | [https://codepen.io](https://codepen.io)         |




<br>


# Errors
1. If you thinK AI isnt solving problem, or showing different things, ask what version of library its using and install that version only
2. Mostly download old versions only, new are experimenttal
3. See item.dataset / item.targer.dataset...see what we need while accesing contents from the folder
