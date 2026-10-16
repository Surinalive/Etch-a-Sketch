
const container = document.querySelector("div");

//create div grid containers
function createGrid() {
    for (let i = 0; i < 16; i++){
        //create rows.
        let row = document.createElement("div");
        row.classList.add("row");
        

        for(let j = 0; j < 16; j++){
            //add columns.
            console.log("Creating grid number " + ((i * 16) + j + 1)); //I think this math logics :p
            let square = document.createElement("div");
            square.classList.add("square");

            //temporary so I can see containers
            let p = document.createElement("p");
            p.textContent = "new";
            square.appendChild(p);


            row.appendChild(square);
        }

        //add row to container
        container.appendChild(row);

    }
}

createGrid();

//background color of grid should change color...
function mouse_entered(e) {
// const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
}



function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

//should color change back to white?
function mouse_exited(e) {
    e.target.backgroundColor = 'rbg(0,0,0)';
}

const squares = document.querySelectorAll(".square");
//console.log(squares);


for (const square of squares){
    square.addEventListener("mouseenter", bgChange);

    square.addEventListener("mouseleave", 
        (e) => {e.target.backgroundColor = 'rgb(255,255,255)'});
}

