// Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(countEl);

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    // create variable that contain count and dash seperator
    let countStr = count + " - ";
    // Render the variable in the saveEl using innertext
    saveEl.textContent += countStr;
    console.log(count);
}