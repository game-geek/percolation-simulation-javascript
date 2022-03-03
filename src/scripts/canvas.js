
class canvasManager {
    constructor(canvas, root, size={width: 100, height: 50}){
        this.canvas = canvas;
        this.root = root;
        this.width = size.width;
        this.height = size.height;

        // init the grid...
        this.init();
    }
    init(){
        //generate the html grid
        this.generate_grid();
        // set the size of the squares in the canvas
        this.resizeCanvas();
        // create the dom array pointer of the grid element
        this.generateDomPointerGrid();
    }
    generateDomPointerGrid(){
        let bigArray = [];
        let parents = Array.from(this.canvas.children);
        for (let y=0; y < this.height; y++) {
            bigArray.push(Array.from(parents[y].children));
        }
        this.DomArrayPointer = bigArray;
    }
    resizeCanvas(){
        this.root.style.setProperty('--height', `${this.canvas.clientHeight/(50)}px`);
        this.root.style.setProperty('--width', `${this.canvas.clientWidth/(100)}px`);
    }
    generate_grid(){
        let html = "";
        for (let y=0; y < 50; y++) {
            html += '<div class="holder">';
            for (let x=0; x < 100; x++) {
                html += '<div class="white block"></div>';
            }
            html += '</div>';
        }
        this.canvas.innerHTML = html;
    }
};

export { canvasManager as default };