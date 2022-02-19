// document.getElementById("count-el").innerText = 5

// Initilize the count as 0
// Listen for clicks on the increament button
// Increament the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}
