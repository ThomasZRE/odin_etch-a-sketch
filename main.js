const container = document.querySelector(".container");
let div = document.createElement("div");

for (let i = 0; i < 16; i++) {
    container.appendChild(document.createElement("div"));
}