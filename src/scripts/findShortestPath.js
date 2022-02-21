
class findShortestPath {
    constructor(canvasManager){
        this.canvasManager = canvasManager;
    }
    find(treads){
        console.log("finding ...");
        let points = this.getBottomPoints(treads);
        
        let paths = this.resolvePaths(points);
        console.log(paths)
        this.clearAndWrite(paths);
    }
    clearAndWrite(paths){
        // clear
        for (let y=0; y < this.canvasManager.height; y++){
            for (let x=0; x < this.canvasManager.width; x++){
                if (this.canvasManager.grid[y][x] !== 1) {
                    this.canvasManager.grid[y][x] = 0;
                    this.canvasManager.DomArrayPointer[y][x].style.backgroundColor = "gray";
                }
            }
        }

        // write
        console.log(paths);
        paths.forEach(path => {
            let color = this.getRandomColor();
            path.forEach(dot => {
                this.canvasManager.DomArrayPointer[dot.y][dot.x].style.backgroundColor = color;
            })
        })
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    resolvePaths(points){
        let paths = [];
        points.forEach(point => {
            let path = [];
            let end = false;
            let tr = point;
            let at = 0;
            
            path.push(...tr.history);
            console.log(point.first)
            if (!point.first){
                at = tr.fromTreadAt;
                tr = tr.fromTread;
                while (!end) {
                    console.log(tr.history.slice(0, at));
                    for (let i=0; i< at; i++) {
                        path.push(tr.history[i]);
                    }
                    if (tr.history.length == 1){
                        console.log("uwu")
                    }
                    if (tr.first){
                        end = true;
                    } else {
                        at = tr.fromTreadAt;
                        tr = tr.fromTread;
                    }
                }
            }
            paths.push(path);
        })
        return paths;
    }
    getBottomPoints(treads){
        let points = [];
        treads.forEach(tread => {
            if (tread.history.length > 0) {
                if (tread.history[tread.history.length-1].y == this.canvasManager.height-1) {
                    points.push(tread);
                }
            }
        })
        return points;
    }
}

export { findShortestPath as default };