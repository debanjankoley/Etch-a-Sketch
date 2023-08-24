const container = document.querySelector(".container");
let verticalDivs = [];
let horizontalDivs = [];
let squaresInYaxis = 16;
let squaresInXaxis = 16;
createGrid();

// this section creates the grid
function createGrid() {
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
}
// this section colors grid black when hover the div with mouse
let square = document.querySelectorAll(".square");
square.forEach(square => square.addEventListener('mouseover', 
    (e) => e.target.classList.add("color")));


// this section clears the grid when reset button is clicked
const resetButton = document.querySelector(".reset");
function toReset(e) {
    square.forEach(square => square.classList.remove("color"));
};
resetButton.addEventListener("click", toReset);

// this section changes the no. of squares in the grid based on user input
const userInput = document.querySelector(".user-input")
function gettingInput(e) {
    square.forEach(square => square.classList.remove("color"));
    inputXaxis = Number(prompt("Enter the no. of squares for X-axis :", 16));
    inputYaxis = Number(prompt("Enter the no. of squares for Y-axis :", 16));
    if (isNaN(inputXaxis && inputYaxis) || inputXaxis && inputYaxis <= 0) {
        alert("Not a valid number");
    } else {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        };
        squaresInXaxis = inputXaxis;
        squaresInYaxis = inputYaxis;
        createGrid();
        square = document.querySelectorAll(".square");
        square.forEach(square => square.addEventListener('mouseover', 
            (e) => e.target.classList.add("color")));
    }
}
userInput.addEventListener("click", gettingInput);