import logicTread from "./logicTread";
import findShortestPath from "./findShortestPath";

class pathFinder {
    constructor(canvasManager, coloredLines, color) {
        this.canvasManager = canvasManager;
        this.treads = [];
        this.shortest = new findShortestPath(canvasManager, coloredLines, color);
        this.running = false;
        this.coloredLines = coloredLines;
        this.color = color;
    }
    init() {
        this.running = true;
        // 2 = water
        // 1 = earth
        // 0 = void
        
        // set up the 100 top treads
        for (let i=0; i < 100; i++){
            this.addTread(i, -1);
        }

    }
    reset(){
        // clear
        for (let y=0; y < this.canvasManager.height; y++){
            for (let x=0; x < this.canvasManager.width; x++){
                if (this.canvasManager.grid[y][x] !== 1) {
                    this.canvasManager.grid[y][x] = 0;
                    this.canvasManager.DomArrayPointer[y][x].style.backgroundColor = this.color;
                }
            }
        }
        // other
        this.running = false;
        this.treads = [];
    }
    addTread(x, y, first=true, fromTread=undefined, fromTreadAt=undefined, addFirst=false, init=true){
        this.treads.push(new logicTread(
            x, y, 
            this.canvasManager.grid, 
            this.canvasManager.DomArrayPointer,
            {width: this.canvasManager.width, height: this.canvasManager.height},
            first,
            fromTread,
            fromTreadAt,
            addFirst,
            init,
            this.coloredLines
        ));
    }
    step() {
        let found = false;
        let length = this.treads.length;
        for (let i=0; i < length; i++) {
            if (!this.treads[i].blocked) {
                let answer = this.treads[i].step()

                if (answer.found != undefined) {
                    if (answer.found === true){
                        // delete tread
                        // this.treads.splice(i, 1);
                        // i -= 1;
                        found = true;
                    } else if (answer.found === false){ 
                        // delete tread
                        // this.treads.splice(i, 1);
                        // i -= 1;
                    }
                }
                if (answer.right != undefined) {
                    this.addTread(answer.right.x, answer.right.y, false, this.treads[i], answer.at, true, false);
                }
                if (answer.left != undefined) {
                    this.addTread(answer.left.x, answer.left.y, false, this.treads[i], answer.at, true, false);
                }
                if (answer.top != undefined) {
                    this.addTread(answer.top.x, answer.top.y, false, this.treads[i], answer.at, true, false);
                }
            }
        }
        if (found) {
            this.running = false;
        }
        return found;
    }
    findShortestPath(){
        return this.shortest.find(this.treads);
    }
}

export { pathFinder as default };