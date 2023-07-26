const container = document.querySelector(".container");
let div = document.createElement("div");

let squares = parseInt(prompt("Squares per side: "));

if (squares > 30) {
    squares = 16
}

for (let i = 0; i < squares**2; i++) {
    container.appendChild(document.createElement("div"));
}

const divArray = document.querySelectorAll("div");

let arr = Array.from(divArray);

arr.shift();

arr.forEach(dv => dv.innerText = "\n\n");
arr.forEach(dv => dv.addEventListener("mouseover", () => dv.style.background = "red"));

