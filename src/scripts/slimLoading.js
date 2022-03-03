const body = document.querySelector("body");

let loadAll = true;
if (localStorage.getItem("loaded")) {
    let times = localStorage.getItem("loaded");
    if (times < 10) {
        // increase the number of times
        times ++;
        localStorage.setItem("loaded", times);
        //
    } else {
        // experienced user
        loadAll = false;
    }
} else {
    localStorage.setItem("loaded", 1)
}

// load the html

if (loadAll) {
    body.innerHTML = `<div>
    <div class="generate">
        <div class="seperator">
            <form id="update-density">
                <label for="density">Enter the density</label>
                <input type="text" name="density">
                <button id="update" class="tooltip"><span class="tooltiptext">updates the current selected grid</span>update</button>
            </form>
            <button id="add" class="tooltip"><span class="tooltiptext">add a new grid</span>add</button>
        </div>
        <button id="draw" class="tooltip"><span class="tooltiptext">modify the current selected grid</span>draw</button>
        <button id="type" class="tooltip"><span class="tooltiptext">when drawing right click removes/adds a pixel</span>remove pixel</button>
        <button id="restart"> restart </button>
        <button id="pause">pause</button>
        <button id="step" class="tooltip"><span class="tooltiptext">each click is one step (first pause)</span>step</button>
        <div id="show-step"> step : 0 </div>
        <button id="lines" class="tooltip"><span class="tooltiptext">colored shows each tread</span>lines: normal</button>
        <div class="slider">
            <input type="range", min="5", max="1000" value="10">
            <div>10</div>
            <div>ms delay</div>
        </div>
        <div class="reveal seperator">
            <form id="toggle-show">
                <label for="show" class="tooltip"><span class="tooltiptext">auto-show the shortest path when completed</span>Auto Show</label>
                <input type="checkbox" name="show" checked>
            </form>
            <button class="show">show</button>
        </div>
        <div id="pressure"></div>
        <button id="reactivate" class="tooltip"><span class="tooltiptext">I am a tooltip, click me and refresh the page to show all of them. ps: after 10 times it will again deactivate</span>show tooltips</button>
    </div>
    </div>
    <section class="main">
    <div id="documents">
    </div>
    <div class="container">
        <div id="canvas1"></div>
        <div id="canvas-draw"></div>
    </div>
    </section`;
} else {
    body.innerHTML = `<div>
    <div class="generate">
        <div class="seperator">
            <form id="update-density">
                <label for="density">Enter the density</label>
                <input type="text" name="density">
                <button id="update">update</button>
            </form>
            <button id="add">add</button>
        </div>
        <button id="draw">draw</button>
        <button id="type">remove pixel</button>
        <button id="restart"> restart </button> 
        <button id="pause">pause</button>
        <button id="step">step</button>
        <div id="show-step">step : 0 </div>
        <button id="lines">lines: normal</button>
        <div class="slider">
            <input type="range", min="5", max="1000" value="10">
            <div>10</div>
            <div>ms delay</div>
        </div>
        <div class="reveal seperator">
            <form id="toggle-show">
                <label for="show">Auto Show</label>
                <input type="checkbox" name="show" checked>
            </form>
            <button class="show">show</button>
        </div>
        <div id="pressure"></div>
        <button id="reactivate" class="tooltip"><span class="tooltiptext">I am a tooltip, click me and refresh the page to show all of them. ps: after 10 times it will again deactivate</span>show tooltips</button>
    </div>
    </div>
    <section class="main">
    <div id="documents">
    </div>
    <div class="container">
        <div id="canvas1"></div>
        <div id="canvas-draw"></div>
    </div>
    </section`;
}
