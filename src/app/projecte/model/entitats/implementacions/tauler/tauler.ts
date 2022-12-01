import { IBaralla } from "../../interficies/baralla/IBaralla";
import { ITauler } from "../../interficies/tauler/ITauler";
import { Baralla } from "../baralla/Baralla";

export class Tauler implements ITauler{
    files:Array<Baralla>=[];
    constructor(){
        this.createRows();
    }
    createRows(){
        let rows = 4;
        for (let i = 0; i < rows; i++){
            this.files.push(new Baralla(i));
        }
    }
}