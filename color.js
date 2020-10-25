// Click Button, Change Background Color
// Check if button is clicked
// Cycle through Color Array
// Color changes on click once 

// Color Array
var color = ["Blue", "Green", "Black", "Orange", "Red", "White", "Yellow"];

// Array Color Count
var count = Math.floor((Math.random() * 6) + 0);

// Color Change Function
function colorChange() {
    if (count >= 6) {
        count = 0;
    } else {
        count++;
    }
    // Body element
    var body = document.getElementsByTagName("BODY")[0];

    //Background Color
    body.style.backgroundColor = color[count];
}

