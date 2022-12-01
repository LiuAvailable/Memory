import { Injectable, Input } from '@angular/core';
import { Tauler } from '../../entitats/implementacions/tauler/tauler';

@Injectable({
  providedIn: 'root'
})
export class TaulerService {
  tauler:Tauler = new Tauler();
  errors:number = 0;
  constructor() { }

  getTauler(): Tauler {return this.tauler;}
  getErrors():number {return this.errors;}
  sumError():void{this.errors ++;}
}
