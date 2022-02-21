import print from "./print";
class randomGenerator{
    generate(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    generateGrid(width, height, percentage){
        let total = width * height;
        let blacks = (total / 100) * percentage;
        let grid = [];
        let temp = [];
        for (let y=0; y < height; y++) {
            for (let x=0; x < width; x++) {
                temp.push(0)
            }
            grid.push(temp);
            temp = [];
        }
        let actual = 0;
        while (actual != blacks){
            let x = this.generate(0, width-1);
            let y = this.generate(0, height-1);
            if (grid[y][x] == 0){
                grid[y][x] = 1;
                actual ++;
            }
        }
        return grid;
    }
}


export { randomGenerator as default };