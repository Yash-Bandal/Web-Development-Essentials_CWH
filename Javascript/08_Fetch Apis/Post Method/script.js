// https://free-apis.github.io/#/browse
//This is The Get Method


let w = fetch("https://goweather.herokuapp.com/weather/pune")

// Snippet
//   w.then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log('Success:', data))
//   .catch(error => console.error('Error:', error));

w.then((response) => {
    console.log(response.status) //200 OK
    console.log(response.ok) //OK ..IF true all OK
    return response.json()
    // return response.text() //or

}).then((response) => {
    console.log(response)
})


//Its a 2 stage Process
/*
logic ....whenever we fetch API..a promise is resolved .
.which is further resolved again and we get data.
 .THUS 2 times resolve
 so we use 2 then

 It is designed 2 stage so that developer like me can chk the status in first "then"
and take action accordinglt
 */



//=================================
