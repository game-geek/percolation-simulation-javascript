
class findShortestPath {
    constructor(canvasManager, coloredLines, color){
        this.canvasManager = canvasManager;
        this.coloredLines = coloredLines;
        this.color = color;
    }
    find(treads){
        let bottomPoints = this.getBottomPoints(treads);
        
        let topPoints = this.getTopPoints(treads);

        let paths = this.resolvePaths(bottomPoints);
        this.clearAndWrite(paths);

        return {top: topPoints, bottom: bottomPoints};
    }
    clearAndWrite(paths){
        // clear
        for (let y=0; y < this.canvasManager.height; y++){
            for (let x=0; x < this.canvasManager.width; x++){
                if (this.canvasManager.grid[y][x] !== 1) {
                    this.canvasManager.grid[y][x] = 0;
                    this.canvasManager.DomArrayPointer[y][x].style.backgroundColor = this.color;
                }
            }
        }

        // write
        paths.forEach(path => {
            let color = this.getRandomColor();
            path.forEach(dot => {
                this.canvasManager.DomArrayPointer[dot.y][dot.x].style.backgroundColor = color;
            })
        })
    }
    getRandomColor() {
        if (this.coloredLines.state) {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
        } else {
            var color = "blue";
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
            if (!point.first){
                at = tr.fromTreadAt;
                tr = tr.fromTread;
                while (!end) {
                    for (let i=0; i< at; i++) {
                        path.push(tr.history[i]);
                    }
                    if (tr.history.length == 1){
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
    getTopPoints(treads) {
        let points = [];
        treads.forEach(tread => {
            if (tread.history.length > 0) {
                if (tread.history[tread.history.length-1].y == 0) {
                    points.push(tread);
                }
            }
        })
        return points;
    }
}

export { findShortestPath as default };