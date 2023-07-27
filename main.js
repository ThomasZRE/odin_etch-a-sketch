/* Button for input */
const button = document.querySelector(".button");
button.innerText = "Squares per side"

// input button div child
const input = document.createElement("input");
const submit = document.createElement("button");

// input data
input.alt = "16";

// submit data
submit.type = "submit";
submit.innerText = "Submit";
submit.classList.add("submit");

button.append(input, submit);



/* Grid logic */
const container = document.querySelector(".container");
let div = document.createElement("div");
let squares = 16
let info = input.value
if (info) squares = input;

if (squares > 30) {
    squares = 16
}

for (let i = 0; i < squares**2; i++) {
    container.appendChild(document.createElement("div"));
}

const divArray = document.querySelectorAll("div");

let arr = Array.from(divArray);

arr.shift();
arr.shift();

arr.forEach(dv => {
    let value = ((100 / squares) - ( (100 / squares) / 100 ) ) - 0.2;
    document.documentElement.style.setProperty(`--valor`, `${value}%`);
});

arr.forEach(dv => dv.innerText = "\n");
arr.forEach(dv => dv.addEventListener("mouseover", () => dv.style.background = "red"));
