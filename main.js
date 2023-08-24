const container = document.querySelector(".container")
let verticalDivs = [];
let horizontalDivs = [];
squaresInYaxis = 16;
squaresInXaxis = 16;

for (i = 0; i < squaresInYaxis; i++) {
    verticalDivs[i] = document.createElement("div");
    verticalDivs[i].classList.add("rectangle");
    container.appendChild(verticalDivs[i]);
    for (j = 0; j < squaresInXaxis; j++) {
        horizontalDivs[j] = document.createElement("div");
        horizontalDivs[j].classList.add("square");
        verticalDivs[i].appendChild(horizontalDivs[j]);
    }
}

const square = document.querySelectorAll(".square")
square.forEach(square => square.addEventListener('mouseover', (e) => e.target.classList.add("color")))