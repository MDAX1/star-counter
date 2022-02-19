let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    // set count value to 0
    countEl.textContent = 0;
    // also setting the count variable to 0 to reset the number when we click on save button
    count = 0;
}