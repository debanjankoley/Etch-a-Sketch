const container = document.querySelector(".container")
let verticalDivs = [];
let horizontalDivs = [];

for (i = 1; i <= 16; i++) {
    verticalDivs[i] = document.createElement("div");
    verticalDivs[i].classList.add("square");
    container.appendChild(verticalDivs[i]);
    for (j = 1; j <= 16; j++) {
        horizontalDivs[j] = document.createElement("div");
        horizontalDivs[j].classList.add("square");
        verticalDivs[i].appendChild(horizontalDivs[j]);
    }
}