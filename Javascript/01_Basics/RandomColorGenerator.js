//(a,b) = (0,255) rgb vals...formula a+ r * ( b-a )

//Note harry said html collection does not have foreahch method
console.log("yash.js initializing");
// let boxes = document.getElementsByClassName("box");  //or
let boxes = document.querySelector(".container").children;
console.log(boxes);

function getRandomColor(){
    // let val1 = Math.random();-ppppppppppppppppppppppppppppppppppppppp0
    let val1 = Math.ceil(0 + Math.random()*(255-0));
    let val2 = Math.ceil(0 + Math.random()*(255-0));
    let val3 = Math.ceil(0 + Math.random()*(255-0));
    return  `rgb(${val1}, ${val2}, ${val3})`; 
}


Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();

})

//Formula
/*

we know that math.random() gives a random num btw 0 and 1 only
thus 
To get values btw a and b random num
a+r(b-a)

here a = 0
b = 255
r=Math.random()


Math.ceil(4.33) = 5
when r is random num btw 0 and 1
*/



// Array.from(boxes).forEach(e=>{
//     console.log(e);
// })

//gives op

/* <div class="box">Box</div>
<div class="box">Box</div>
<div class="box">Box</div>
<div class="box">Box</div>
<div class="box">Box</div> */

