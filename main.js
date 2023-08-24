const container = document.querySelector(".container");
let verticalDivs = [];
let horizontalDivs = [];
squaresInYaxis = 16;
squaresInXaxis = 16;

// this section creates grid
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

// this section colors grid black when hover the div with mouse
const square = document.querySelectorAll(".square");
square.forEach(square => square.addEventListener('mouseover', (e) => e.target.classList.add("color")))

// this section clears the grid when reset button is clicked
const resetButton = document.querySelector(".reset");
function reset(e) {
    square.forEach(square => square.classList.remove("color"));
};
resetButton.addEventListener("click", reset);

// this section changes the no. of squares in the grid based on user input