
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
        this.currentUuid = null;
        this.selectedDocument = 0;
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
    regenerateCurrentGrid(percentage) {
        this.grids[this.currentUuid] = this.generator.generateGrid(this.canvasManager.width, this.canvasManager.height, percentage);;
        this.currentGrid = this.grids[this.currentUuid];
    }
    setGrid(uuid){
        this.currentGrid = this.grids[uuid];
        this.currentUuid = uuid;
    }

    addDocument(percentage) {
        let uuid = this.addGrid(percentage);
        this.documents.innerHTML += `
            <div>
                <div grid="${uuid}" class="name">density : ${percentage}</div>
                <div class="delete"><div class="blocker"></div><i class="fa-solid fa-trash-can"></i></div>
            </div>
        `;
        this.reloadDocuments();
        return uuid;
    }

    reloadDocuments() {
        let at = 0;
        let array = Array.from(this.documents.children);
        array.forEach( document => {
            document.setAttribute('document', at);
            at ++;
        })
    }

    deleteDocument(uuid, uuid_toShow){
        // delete documentmanager.grids[event.target.parentElement.children[0].getAttribute("grid")];
        this.currentGrid = this.grids[uuid_toShow];
    }

}





export { documentManager as default };