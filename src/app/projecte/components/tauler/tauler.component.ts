import { Component, Input, OnInit } from '@angular/core';
import { Tauler } from '../../model/entitats/implementacions/tauler/tauler';
import { TaulerService } from '../../model/services/tauler/tauler.service';

@Component({
  selector: 'app-tauler',
  templateUrl: './tauler.component.html',
  styleUrls: ['./tauler.component.css']
})
export class TaulerComponent implements OnInit {
  @Input() tauler = new Tauler();
  errors:number = 0;
  constructor(private taulerService: TaulerService) { }

  ngOnInit(): void {
    this.shuffleCards();
    setTimeout(() => {this.hideAllCards()},6000);
  }
  getTauler():Tauler {return this.taulerService.getTauler();}
  getErrors():number {return this.taulerService.getErrors();}

  shuffleCards():void{
    let tauler = this.getTauler();
    for (let i = 0; i < tauler.files.length; i++) {
      for (let j = 0; j < tauler.files[i].cartes.length; j++){
        let newPosition = Math.floor(Math.random() * 4);
        [tauler.files[i].cartes[j],tauler.files[i].cartes[newPosition]] = [tauler.files[i].cartes[newPosition],tauler.files[i].cartes[j]]
      }
    }
  }
  hideAllCards():void{
    let tauler:Tauler = this.taulerService.getTauler();
    tauler.files.forEach(baralla => {
      baralla.cartes.forEach(carta=>{
        carta.status="hidden";
      })
    });
  }
}
