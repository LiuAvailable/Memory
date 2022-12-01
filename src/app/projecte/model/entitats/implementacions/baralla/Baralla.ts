import { Carta } from "../carta/Carta";
import { IBaralla } from "../../interficies/baralla/IBaralla";
import { ICarta } from "../../interficies/carta/ICarta";

export class Baralla implements IBaralla{
    cartes: Array<ICarta> = [];
    status: string = 'default';
    id:number;

    constructor(id:number){
        this.id = id;
        this.generateCards();
    }

    generateCards(){
        let cartes = [1,2,3,4];
        let img = ['../../../../../../assets/img/ES.png','../../../../../../assets/img/VNZ.jpg','../../../../../../assets/img/ARG.jpg','../../../../../../assets/img/ITA.png']
        let i = 0;
        cartes.forEach(element => {
            this.cartes[i]= new Carta(element,img[i],this.id);
            i++;
        });
    }
}