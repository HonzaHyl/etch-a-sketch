const grid = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#new-grid");
const reset = document.querySelector(".reset");

let n = 25;

function createGrid(n, color="black"){
    for(let j = 1; j <= n; j++){
        for(let i = 1; i <= n; i++){
            const content = document.createElement("div");

            let width = 500/n;
            let height = 500/n;

            content.style.width = width + "px";
            content.style.height = height + "px";
            content.style.outline = "1px solid";

            content.addEventListener("mouseover", () => {content.style.background = color;});
            grid.appendChild(content);
        };
    };
};

function getNewGrid(){
    const size = Number(prompt("Enter number of squares per side (1-100):"));
    if (isNaN(size)){
        createGrid(n);
        alert("Please enter a number!");
    } else if ((size > 100) || (size < 0)) 
        {   createGrid(n);
            alert("Please enter number between 1 and 100'");
    } else {
        n = size;
        createGrid(n)
    };
};

function removeGrid(){
    const divs = document.querySelectorAll(".gridContainer > div");
    divs.forEach((div) => {
        div.remove()
        
    });
};

function draw(){};

createGrid(n);

newGrid.addEventListener("click", () => {
    removeGrid(); 
    getNewGrid();
    });


reset.addEventListener("click", () => {
    removeGrid();
    createGrid(n);
})



