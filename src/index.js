import "./styles.css";
import canvasManager from "./scripts/canvas";
import randomGenerator from "./scripts/generator";
import canvasLoader from "./scripts/loader";
import pathFinder from "./scripts/pathFinder2";
import documentManager from "./scripts/documents";

//slim loading
import "./scripts/slimLoading";

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
const lines = document.querySelector("#lines");
const showStep = document.querySelector("#show-step");
const toolTipActivateButton = document.querySelector("#reactivate");
const pressure = document.querySelector("#pressure");

// create the instances
// color of the empty blocks
let color = "rgb(184, 184, 184)";
let coloredLines = {state: false};
const canvasmanager = new canvasManager(canvas, root);
const generator = new randomGenerator();
const loader = new canvasLoader(canvasmanager);
const pathfinder = new pathFinder(canvasmanager, coloredLines, color);




/////to do
//ui




// init some variables
// find automatically the shortest path or not
let autoFind = toggleShow.show.checked;

// instances who takes these variables
// a few settings
let found = false;
let at = 0;
let reset = false;
let pause = false;
let step = false;
let delay = 10;    // delay between each water movement

// generate the instances who depends on the previous variables
const documentmanager = new documentManager(updateAddform, documents, canvasmanager, generator);

//generate a random grid
documentmanager.addDocument(25);
// set it to the current grid
documentmanager.setGrid(documents.children[0].children[0].getAttribute("grid"));

// load the grid in the window
loader.load(documentmanager.currentGrid);

// init the pathfinder
pathfinder.init();

// function a=that will call itself over and over until finished
function find() {
    if (reset) {
        at = 0;
        showStep.textContent = `step : ${at}`;
        reset = false;
        return;
    }
    if (!pause) {
        at ++;
        showStep.textContent = `step : ${at}`;
        found = pathfinder.step();
    } else {
        if (pause && step) {
            at ++;
            showStep.textContent = `step : ${at}`;
            found = pathfinder.step();
        }
    }
    step = false;
    if (!found){
        setTimeout(find, delay);
    } else if (autoFind){
        let points = pathfinder.findShortestPath();
        pressure.textContent = `Pressure : ${Number(points.bottom.length / points.top.length).toFixed(2)}`;
    }
}
setTimeout(find, delay);





////////////////////////////////////Extra User Input//////////////////

toolTipActivateButton.addEventListener("click", event => {
    localStorage.setItem("loaded", 0);
})

lines.addEventListener("click", event => {
    if (coloredLines.state) {
        coloredLines.state = false;
        event.target.textContent = "lines : normal";
    } else {
        coloredLines.state = true;
        event.target.textContent = "lines : colored";
    }
})

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
        at = 0;
        showStep.textContent = `step : ${at}`;
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
        let points = pathfinder.findShortestPath();
        pressure.textContent = `Pressure : ${Number(points.bottom.length / points.top.length).toFixed(2)}`;
    }
})





//////////////////////////////DRAWING MANAGEMENT//////////////////////////////


// saves the changes
function modify(x, y) {
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
            at = 0;
            showStep.textContent = `step : ${at}`;
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
    documentmanager.regenerateCurrentGrid(updateAddform.density.value);
    // reset the document density label
    Array.from(documents.children)[documentmanager.selectedDocument].children[0].textContent = `density : ${updateAddform.density.value}`;
    // load the grid in the window
    loader.load(documentmanager.currentGrid);
    // reset the algorithm 
    if (!found){
        reset = true;
    } else {
        at = 0;
        showStep.textContent = `step : ${at}`;
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
        documentmanager.setGrid(event.target.getAttribute("grid")); // get the uuuid
        documentmanager.selectedDocument = Number(event.target.parentElement.getAttribute("document"));
        loader.load(documentmanager.currentGrid); // passing a pointer
        // reset the algorithm 
        if (!found){
            reset = true;
        } else {
            at = 0;
            showStep.textContent = `step : ${at}`;
            found = false;
        }
        pathfinder.reset();
        // restart the algo
        pathfinder.init();
        setTimeout(find, delay);
    } else if (documents.children.length > 1) {
        if (event.target.parentElement.classList.contains("delete")){
            // remove it technically
            let currentUuid = event.target.parentElement.parentElement.children[0].getAttribute("grid");
            let to_show = event.target.parentElement.parentElement.parentElement.children[0].children[0].getAttribute("grid");
            if (currentUuid != to_show)
            {
                documentmanager.deleteDocument(
                    currentUuid,
                    to_show
                ) 
                documentmanager.selectedDocument = 0;
            } else {
                documentmanager.deleteDocument(
                    currentUuid,
                    event.target.parentElement.parentElement.parentElement.children[1].children[0].getAttribute("grid")
                ) 
                documentmanager.selectedDocument = 1;
            }
            
            // remove it visually
            event.target.parentElement.parentElement.remove();
            ////////////////////////////////////////////////////
            // load the first document as default 
            loader.load(documentmanager.currentGrid); // passing a pointer
            // reset the algorithm 
            if (!found){
                reset = true;
            } else {
                at = 0;
                showStep.textContent = `step : ${at}`;
                found = false;
            }
            pathfinder.reset();
            // restart the algo
            pathfinder.init();
            setTimeout(find, delay);
            //////////////////////////////////////////////////
        } else if (event.target.classList.contains("delete")) {
            // remove it technically
            let currentUuid = event.targett.parentElement.children[0].getAttribute("grid");
            let to_show = event.target.parentElement.parentElement.children[0].children[0].getAttribute("grid");
            if (currentUuid != to_show)
            {
                documentmanager.deleteDocument(
                    currentUuid,
                    to_show
                ) 
                documentmanager.selectedDocument = 0;
            } else {
                documentmanager.deleteDocument(
                    currentUuid,
                    event.target.parentElement.parentElement.children[1].children[0].getAttribute("grid")
                ) 
                documentmanager.selectedDocument = 1;
            }
            // remove it visually
            event.target.parentElement.remove();
            ////////////////////////////////////////////////////
            // load the first document as default 
            loader.load(documentmanager.currentGrid); // passing a pointer
            // reset the algorithm 
            if (!found){
                reset = true;
            } else {
                at = 0;
                showStep.textContent = `step : ${at}`;
                found = false;
            }
            pathfinder.reset();
            // restart the algo
            pathfinder.init();
            setTimeout(find, delay);
            //////////////////////////////////////////////////
        }
    }
});

// add event listener when add grid
add.addEventListener("click", event => {
    if (updateAddform.density.value){
        // generate and add a new grid
        let uuid = documentmanager.addDocument(updateAddform.density.value);
        updateAddform.reset();
    }
})