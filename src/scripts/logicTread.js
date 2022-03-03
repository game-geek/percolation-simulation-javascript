class logicTread {
    constructor(x, y, gridPointer, DomArrayPointer, size={width:100, height: 50}, first=false, fromTread, fromTreadAt, addFirst=false, init=true, coloredLines) {
        this.x = x;
        this.y = y;
        this.gridPointer = gridPointer;
        this.DomArrayPointer = DomArrayPointer;
        this.width = size.width;
        this.height = size.height;
        this.blocked = false;
        this.coloredLines = coloredLines;
        this.color = this.getRandomColor();
        this.first = first;
        if (!first){
            this.fromTread = fromTread;
            this.fromTreadAt = fromTreadAt;
        }
        this.history = [];
        this.at = 0;
        // see if we have to add the first dot
        if (!init){
            this.initialized = true;
        } else {
            this.initialized = false;
        }
        if (addFirst){
            //   that the place is taken for other treads
            this.gridPointer[this.y][this.x] = 2;
            // update the ui
            this.DomArrayPointer[this.y][this.x].style.backgroundColor = this.color;  
            // update the history
            this.history.push({x: this.x, y: this.y});
            this.at ++;
        }
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
    check_bottom(){
        if (this.snapshot.y < this.height-1){ // -1 because arrays start at 0-49 and no 1-50
            return this.gridPointer[this.snapshot.y + 1][this.snapshot.x] == 0 ?  true : false;
        } else {
            return false;
        }
    }
    check_right(){
        if (this.snapshot.x < this.width-1) {// -1 because arrays start at 0-49 and no 1-50
            return this.gridPointer[this.snapshot.y][this.snapshot.x + 1] == 0 ? true : false;
        } else {
            return false;
        }
    }
    check_left(){
        if (this.snapshot.x > 0) {
            return this.gridPointer[this.snapshot.y][this.snapshot.x - 1] == 0 ? true : false;
        } else {
            return false;
        }
    }
    check_top(){
        if (this.snapshot.y > 0) {
            return this.gridPointer[this.snapshot.y - 1][this.snapshot.x] == 0 ? true : false;
        } else {
            return false;
        }
    }
    update(){
        // show that the place is taken for other treads
        this.gridPointer[this.y][this.x] = 2;
        // update the ui
        this.DomArrayPointer[this.y][this.x].style.backgroundColor = this.color;
        // update the history
        this.at ++;
        this.history.push({x: this.x, y: this.y});
    }
    first_step(){
        if (this.check_bottom()){
            // update the water position
            this.y ++;
            this.update();
            return {};
        }
        this.blocked = true;
        return {found: false};
    }
    step(){
        let toReturn = {at: this.at};
        this.snapshot = {x: this.x, y: this.y};
        if (!this.initialized){
            this.initialized = true;
            return this.first_step();
        }
        
        let found = false;

        if (this.check_bottom()){
            found = true;
            // update the water position
            this.y ++; 
            // check if the water reached the end
            if (this.y === this.height-1) {
                this.update();
                // return traight away to not continue
                toReturn.found = true;
                return toReturn;
            }
        }
        
        if (this.check_right()) {
            if (!found) {
                found = true;
                // update the water position
                this.x ++; 
            } else {
                toReturn.right =  {x: this.snapshot.x + 1, y: this.snapshot.y};
            }
        }
        
        if (this.check_left()) {
            if (!found) {
                found = true;
                // update the water position
                this.x --;
            } else {
                toReturn.left =  {x: this.snapshot.x - 1, y: this.snapshot.y};
            }
        }
        
        if (this.check_top()) {
            if (!found) {
                found = true;
                // update the water position
                this.y --;
            } else {
                toReturn.top =  {x: this.snapshot.x, y: this.snapshot.y - 1};
            }
        }
        
        if (!found) { // check if the water id blocked
            this.blocked = true;
            toReturn.found = false;
        } else {
            this.update();
        }
        return toReturn;
    }
}

export { logicTread as default };