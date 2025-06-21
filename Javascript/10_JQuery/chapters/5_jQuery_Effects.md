# Chapter 5: 💫 Effects and Animations in jQuery

## 📌 Introduction

One of the most powerful features of jQuery is its ability to create smooth effects and animations with minimal code. jQuery provides built-in methods to manipulate the visibility and appearance of elements dynamically.
## 🎯 Topics Covered
- Hiding and showing elements
- Fading effects
- Sliding effects
- Custom animations
- Stopping animations
- Callback functions

---

# jQuery Effects 

Hide, Show, Toggle, Slide, Fade, and Animate.
## 1. jQuery hide() and show()
syntax:
```
//callback - optional
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
```
The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.

The optional callback parameter is a function to be executed after the hide() or show() method completes .
```javascript
$("#hide").click(function(){
  $("p").hide(1000);
});

$("#show").click(function(){
  $("p").show();
});
```
## 2.jQuery toggle()
```
$(selector).toggle(speed,callback);
```
default action hide and show 
```javascript
$("button").click(function(){
  $("p").toggle();
});
```

### 3. jQuery Fading Methods
With jQuery you can fade an element in and out of visibility.

jQuery has the following fade methods:
- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()

#### 1. fadeIn() 
```
$(selector).fadeIn(speed,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein

#### 2.  fadeOut()
```
$(selector).fadeOut(speed,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout

#### 3.  fadeToggle()
The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.
```
$(selector).fadeToggle(speed,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle

#### 4.  fadeTo()
The required opacity parameter in the fadeTo() method specifies fading to a given opacity (value between 0 and 1)
```
$(selector).fadeTo(speed,opacity,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeto


### 4. jQuery Sliding Methods
With jQuery you can create a sliding effect on elements.

jQuery has the following slide methods:

- slideDown()
- slideUp()
- slideToggle()

#### 1. slideDown()
slide down animation
```
$(selector).slideDown(speed,callback);
```
```javascript
$("#flip").click(function(){
  $("#panel").slideDown();
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down


#### 2. slideUp() 
The jQuery slideUp() method is used to slide up an element
```
$(selector).slideUp(speed,callback);
```
```javascript
$("#flip").click(function(){
  $("#panel").slideDown();
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_up

#### 3.  slideToggle() 
The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
```
$(selector).slideToggle(speed,callback);
```
```javascript
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle


### 5. jQuery Animations - The animate() Method
The jQuery animate() method is used to create custom animations.

Syntax:
```
$(selector).animate({params},speed,callback);
```
```javascript
//1
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});

//2
$(document).ready(function(){
    $("#animateButton").click(function(){
        $("#box").animate({
            left: '+=100px',
            height: 'toggle'
        });
    });
});
```
see : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1

see2 : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_multicss

### 6. jQuery stop() Method
The jQuery `stop()` method is used to stop an animation or effect before it is finished

Syntax:
```
$(selector).stop(stopAll,goToEnd);
```
```javascript
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
```
see : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_slide

### 7. jQuery Callback Functions [Imp]
A callback function is executed after `the current effect` is 100% finished.
JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.

Typical syntax:
```
$(selector).hide(speed,callback);
```
```javascript
$("button").click(function(){
  $("p").hide("slow", function(){
    alert("The paragraph is now hidden");
  });
});
```

see : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_callback

## jQuery - Chaining
Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.

Until now we have been writing jQuery statements one at a time (one after the other).
The following example chains together the css(), slideUp(), and slideDown() methods. The "p1" element first changes to red, then it slides up, and then it slides down

```javascript
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```
neat
```javascript
$("#p1").css("color", "red")
   .slideUp(2000)
   .slideDown(2000);
```
see : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_chaining

jQuery is not very strict on the syntax; you can format it like you want, including line breaks and indentations.



## 🎯 Summary
- `hide()` / `show()` / `toggle()` → Basic visibility control.
- `fadeIn()` / `fadeOut()` / `fadeToggle()` → Smooth fade effects.
- `slideUp()` / `slideDown()` / `slideToggle()` → Vertical animations.
- `animate()` → Custom animation on CSS properties.
- `stop()` → Stops an ongoing animation.
- **Callback functions** → Execute logic after animations finish.

📌 Next Chapter: [jQuery Traversing](./6_jQuery_Traversing.md)




