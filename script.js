const grid = document.querySelector(".gridContainer");
const newGrid = document.querySelector("#new-grid");
const reset = document.querySelector(".reset");

function createGrid(n=25, color="black"){
    for(let j = 1; j <= n; j++){
        for(let i = 1; i <= n; i++){
            const content = document.createElement("div");

            let width = 500/n;
            let height = 500/n;

            content.style.width = width + "px";
            content.style.height = height + "px";
            content.style.outline = "1px solid";

            content.addEventListener("mousedown", () => {content.style.background = color;})

            grid.appendChild(content);
        };
    };
};

function getNewGrid(){};

function draw(){

};

createGrid()





