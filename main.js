const container = document.querySelector(".container");
let div = document.createElement("div");

for (let i = 0; i < 16**2; i++) {
    container.appendChild(document.createElement("div"));
}

const divArray = document.querySelectorAll("div");

let arr = Array.from(divArray);

arr.shift();

arr.forEach(dv => dv.innerText = "\n\n");
arr.forEach(dv => dv.addEventListener("mouseover", () => dv.style.color = "red"));

