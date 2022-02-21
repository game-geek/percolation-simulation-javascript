import "./styles.css";
import canvasManager from "./scripts/canvas";
import print from "./scripts/print";
import randomGenerator from "./scripts/generator";
import canvasLoader from "./scripts/loader";
import pathFinder from "./scripts/pathFinder2";
import documentManager from "./scripts/documents";



// get references to the DOM
const root = document.querySelector(':root');
const canvas = document.querySelector("#canvas1");
const updateAddform = document.querySelector("#update-density");
const add = document.querySelector("#add");
const showButton = document.querySelector(".show");
const toggleShow = document.querySelector("#toggle-show");
const documents = document.querySelector("#documents");
const draw = document.querySelector("#draw");
const canvasDraw = document.querySelector("#canvas-draw");
const type = document.querySelector("#type");
const restartButton = document.querySelector("#restart");
const pauseButton = document.querySelector("#pause");
const stepButton = document.querySelector("#step");
const slider = document.querySelector(".slider input");
const sliderInfo = document.querySelector(".slider div");

// create the instances
const canvasmanager = new canvasManager(canvas, root);
const generator = new randomGenerator();
const loader = new canvasLoader(canvasmanager);
const pathfinder = new pathFinder(canvasmanager);




/////to do
// update the document
//delete a document
// the ui bar in the document doesnt resize properly on diferent window dimensions
//suites
//ui




// init some variables
// find automatically the shortest path or not
let autoFind = toggleShow.show.checked;

// instances who takes these variables
// a few settings
let found = false;
let reset = false;
let pause = false;
let step = false;
let delay = 10;    // delay between each water movement

// generate the instances who depends on the previous variables
const documentmanager = new documentManager(updateAddform, documents, canvasmanager, generator);

//generate a random grid
documentmanager.addDocument(25);
// set it to the current grid
documentmanager.currentGrid = documentmanager.grids[documents.children[0].children[0].getAttribute("grid")];

// load the grid in the window
loader.load(documentmanager.currentGrid);

// init the pathfinder
pathfinder.init();

// function a=that will call itself over and over until finished
function find() {
    if (reset) {
        reset = false;
        return;
    }
    if (!pause) {
        found = pathfinder.step();
    } else {
        if (pause && step) {
            found = pathfinder.step();
        }
    }
    step = false;
    if (!found){
        setTimeout(find, delay);
    } else if (autoFind){
        pathfinder.findShortestPath();
    }
}
setTimeout(find, delay);





////////////////////////////////////Extra User Input//////////////////

// sets the delay depending on the slider
slider.oninput = () => {
    sliderInfo.textContent = slider.value;
    delay = slider.value;
}

// does one step at the time
stepButton.addEventListener("click", event => {
    step = true;
})



// pause/play button
pauseButton.addEventListener("click", event => {
    if (pause) {
        event.target.textContent = "pause";
        pause = false;
    } else {
        pause = true;
        event.target.textContent = "play";
    }
})


// restart button
restartButton.addEventListener("click", event => {
    // load the grid in the window
    loader.load(documentmanager.currentGrid); // passing a pointer
    // reset the algorithm 
    if (!found){
        reset = true;
    } else {
        found = false;
    }
    pathfinder.reset();
    // restart the algo
    pathfinder.init();
    setTimeout(find, delay);
})





// toggle autoShow button
toggleShow.addEventListener("click", event => {
    if (event.target.checked) {
        autoFind = true;
    } else {
        autoFind = false;
    }
})

// show the shortest path
showButton.addEventListener("click", () => {
    if (pathfinder.running === false) {
        pathfinder.findShortestPath();
    }
})





//////////////////////////////DRAWING MANAGEMENT//////////////////////////////


// saves the changes
function modify(x, y) {
    console.log(canvasmanager)
    if (!removeBlock) {
            
        canvasmanager.DomArrayPointer[y][x].style.backgroundColor = "black";
        canvasmanager.grid[y][x] = 1;
    } else {
        canvasmanager.DomArrayPointer[y][x].style.backgroundColor = "gray";
        canvasmanager.grid[y][x] = 0;
    }

}

// mouse move
function mousemove(event){
    event.stopPropagation();
    if (event.buttons === 1){
        modify(Math.floor(event.offsetX/(event.target.clientWidth / 100)), Math.floor(event.offsetY/(event.target.clientHeight / 50)))
    }
}
//mouse down
function mousedown(event){
    event.stopPropagation();
    modify(Math.floor(event.offsetX/(event.target.clientWidth / 100)), Math.floor(event.offsetY/(event.target.clientHeight / 50)))
}



/////////////// if undo or add button
let removeBlock = false;

// click on the block
type.addEventListener("click", event => {
    if (!removeBlock) {
        event.target.textContent = "add pixel";
        removeBlock = true;
    } else {
        event.target.textContent = "remove pixel";
        removeBlock = false;
    }
})



/////////////////// drawing button
let allowDraw = false;

// ad event listener on button draw
draw.addEventListener("click", event => {
    if (allowDraw) {
        event.target.textContent = "draw";
        canvasDraw.removeEventListener("mousemove", mousemove);
        canvasDraw.removeEventListener("mousedown", mousedown);
        pathfinder.reset();
        // restart the algo
        pathfinder.init();
        setTimeout(find, delay);

    } else {
        event.target.textContent = "save";
        canvasDraw.addEventListener("mousemove", mousemove);
        canvasDraw.addEventListener("mousedown", mousedown);
        // load the grid in the window
        loader.load(documentmanager.currentGrid); // passing a pointer
        // reset the algorithm 
        if (!found){
            reset = true;
        } else {
            found = false;
        }
        pathfinder.reset();
    }
    allowDraw = !allowDraw; 
})














//////////////////////////////DOCUMENTS MANAGEMENT/////////////////



// add event listener when update grid
updateAddform.addEventListener("submit", event => {
    // prevent default
    event.preventDefault();
    //generate a random grid
    documentmanager.currentGrid = documentmanager.getGrid(documentmanager.addGrid())
    // load the grid in the window
    loader.load(documentmanager.currentGrid);
    // reset the algorithm 
    if (!found){
        reset = true;
    } else {
        found = false;
    }
    pathfinder.reset();
    // restart the algo
    pathfinder.init();
    setTimeout(find, delay);
    // clear input
    event.target.reset();
})

// add event listener to the documents when reset of deleted
documents.addEventListener("click", event => {
    if (event.target.getAttribute("grid")){    
        // load the grid in the window
        console.log(event.target.getAttribute("grid"), documentmanager.grids)
        console.log(documentmanager.grids[event.target.getAttribute("grid")])
        documentmanager.currentGrid = documentmanager.grids[event.target.getAttribute("grid")]; // get the uuuid
        loader.load(documentmanager.currentGrid); // passing a pointer
        // reset the algorithm 
        if (!found){
            reset = true;
        } else {
            found = false;
        }
        pathfinder.reset();
        // restart the algo
        pathfinder.init();
        setTimeout(find, delay);
    } else if (event.target.parentElement.classList.contains("delete")){
        event.target.parentElement.parentElement.remove();
        console.log("item deleted")
    } else if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
        console.log("item deleted")
    }
});

// add event listener when add grid
add.addEventListener("click", event => {
    if (updateAddform.density.value){
        let uuid = documentmanager.addGrid(updateAddform.density.value);
        documents.innerHTML += `
            <div>
                <div grid="${uuid}" class="name">density : ${updateAddform.density.value}</div>
                <div class="delete"><i class="fa-solid fa-trash-can"></i></div>
            </div>
        `;
        updateAddform.reset();
    }
})