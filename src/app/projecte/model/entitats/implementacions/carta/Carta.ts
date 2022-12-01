import { ICarta } from "../../interficies/carta/ICarta";

export class Carta implements ICarta{
    id: number;
    img: string;
    status: string
    baralla:number;
    constructor(id: number, img: string, baralla:number) {
        this.id = id;
        this.img = img;
        this.status = "shown";
        this.baralla = baralla;
    }
}