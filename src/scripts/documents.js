
import {v4 as uuidv4} from 'uuid';

class documentManager {
    constructor(updateAddform, documents, canvasManager, generator) {
        // canvas manager pointer
        this.canvasManager = canvasManager;
        // generator pointer
        this.generator = generator;

        //selectors
        this.updateAddform = updateAddform;
        this.documents = documents;

        // the actual grid-document system
        this.grids = {};
        this.currentGrid = [];
    }

    addGrid(percentage=25) {
        // add a randomely generated grid to the grids with an unique id
        let uuid = uuidv4();
        this.grids[uuid] = this.generator.generateGrid(this.canvasManager.width, this.canvasManager.height, percentage);
        // update current grid
        return uuid;
    }
    getGrid(uuid) {
        return this.grids[uuid];
    }

    addDocument(percentage) {
        let uuid = this.addGrid(percentage);
        this.documents.innerHTML += `
            <div>
                <div grid="${uuid}" class="name">density : ${percentage}</div>
                <div class="delete"><i class="fa-solid fa-trash-can"></i></div>
            </div>
        `;
    }

}





export { documentManager as default };