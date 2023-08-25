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


// this section colors the grid when hover the div with mouse
let square = document.querySelectorAll(".square");
let selectedColor = `rgb(0,0,0)`;

function hoverColors() {
    if (selectedColor === "rnd") {
        square.forEach(square => square.addEventListener('mouseover', 
        (e) => e.target.style.backgroundColor = `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`));    
    } else {
        square.forEach(square => square.addEventListener('mouseover', 
        (e) => e.target.style.backgroundColor = selectedColor));
    }
}
hoverColors();

const eraser = document.querySelector(".eraser");   // eraser selects white color
eraser.addEventListener("click", () => {
    selectedColor = `rgb(238,174,202)`;
    hoverColors();
});

const ink = document.querySelector(".ink");          // ink selects black color
ink.addEventListener("click", () => {
    selectedColor = `rgb(0,0,0)`;
    hoverColors();
});

const random = document.querySelector(".random");             // random color
function randomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
}
random.addEventListener("click", () => {
    selectedColor = `rnd`;
    hoverColors();
})


// this section clears the grid when reset button is clicked
const resetButton = document.querySelector(".reset");
function toReset(e) {
    square.forEach(square => square.style.backgroundColor = `rgb(238,174,202)`);
};
resetButton.addEventListener("click", toReset);


// this section changes the no. of squares in the grid based on user input
const userInput = document.querySelector(".user-input")
function gettingInput(e) {
    inputXaxis = Number(prompt("Enter the no. of squares for X-axis :", 16));
    inputYaxis = Number(prompt("Enter the no. of squares for Y-axis :", 16));
    if (isNaN(inputXaxis) || isNaN(inputYaxis) || 
        inputXaxis <= 0 || inputYaxis <= 0 || 
        inputXaxis > 100 || inputYaxis > 100) {
        alert("Cancelled. Add a number between 1 to 100");
    } else {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        };
        squaresInXaxis = inputXaxis;
        squaresInYaxis = inputYaxis;
        createGrid();
        square = document.querySelectorAll(".square");
        hoverColors();
    }
}
userInput.addEventListener("click", gettingInput);