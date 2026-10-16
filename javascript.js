
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
            //temporary so I can see containers
            let p = document.createElement("p");
            p.textContent = "new Square" + ((i * 16) + j + 1);
            square.appendChild(p);
            row.appendChild(square);
        }

        //add row to container
        container.appendChild(row);

    }
}