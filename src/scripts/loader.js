
class canvasLoader {
    constructor(canvasManager, color){
        this.canvasManager = canvasManager;
        this.color = color;
    }
    load(grid){
        this.canvasManager.grid = grid;
        for (let y=0; y < grid.length; y++) {
            for (let x=0; x < grid[y].length; x++) {
                if (grid[y][x] == 1){
                    this.canvasManager.DomArrayPointer[y][x].style.backgroundColor = "black";
                } else {
                    this.canvasManager.DomArrayPointer[y][x].style.backgroundColor = this.color;
                }
            }
        }
    }
}

export {canvasLoader as default };