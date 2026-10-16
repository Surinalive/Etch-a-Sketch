
const container = document.querySelector("div");
const button = document.querySelector("button");

//create div grid containers
function createGrid(size) {
    for (let i = 0; i < size; i++){
        //create rows.
        let row = document.createElement("div");
        row.classList.add("row");
        

        for(let j = 0; j < size; j++){
            //add columns.
            console.log("Creating grid number " + ((i * size) + j + 1)); //I think this math logics :p
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.backgroundColor = "white";

            //temporary so I can see containers
            // let p = document.createElement("p");
            // p.textContent = "box";
            // square.appendChild(p);

            square.addEventListener("mouseenter", bgChange);
            row.appendChild(square);
        }

        //add row to container
        container.appendChild(row);

    }
}

createGrid(16);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//change background color and opacity
function bgChange(e) {
    if(e.target.style.backgroundColor == "white"){
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        e.target.style.backgroundColor = rndCol;
    }
    const current = parseFloat(e.target.style.opacity) || 0;
    e.target.style.opacity = Math.min(current + 0.1, 1);
}

button.addEventListener("click", () => {
    let gridsize = prompt("Enter new grid size");

    while(Number.isNaN(gridsize) || gridsize > 100 || gridsize <= 0){
        console.log(!Number.isNaN(gridsize));
        console.log(gridsize > 100);
        console.log(gridsize <= 0);
        gridsize = prompt("Please enter a number between 0 and 100.");
    }

    //I can probably rewrite create grid to return an array of nodes and remove and 
    // replace in one operation...
    container.replaceChildren();
    createGrid(gridsize);
})

