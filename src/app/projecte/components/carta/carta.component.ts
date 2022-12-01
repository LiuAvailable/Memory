import { Component, Input, OnInit } from '@angular/core';
import { Carta } from '../../model/entitats/implementacions/carta/Carta';
import { Tauler } from '../../model/entitats/implementacions/tauler/tauler';
import { TaulerService } from '../../model/services/tauler/tauler.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!:Carta;
  constructor(private TaulerService:TaulerService) { }

  ngOnInit(): void {
  }
  seleccionar(carta:Carta):void{
    let tauler = this.TaulerService.getTauler();
    let fila = carta.baralla;
    if(tauler.files[fila].status != 'block' && carta.status != 'shown'){
      carta.status = "checked";
      this.blockLine(tauler, carta);
    }
    this.checkNumberCardsSelected(tauler);
  }

  blockLine(tauler:Tauler, carta:Carta):void{
    tauler.files[carta.baralla].status = "block";
  }

  checkNumberCardsSelected(tauler:Tauler) :void{
    let cartes:Array<Carta> = [];
    for(let i = 0; i < tauler.files.length; i++){
      for(let j = 0; j < tauler.files[i].cartes.length;j++){
        if(tauler.files[i].cartes[j].status=="checked")cartes.push(tauler.files[i].cartes[j]);
      }
    }
    if(cartes.length == 4) this.checkEqualCards(cartes);
  }

  checkEqualCards(cartes:Array<Carta>):void {
    let iguals:boolean = true;
    cartes.forEach(carta => {
      if(carta.id!=cartes[0].id){
        iguals = false;
      }
    });
    if(iguals)this.changeCardStatus(cartes,"shown");
    else{
      this.TaulerService.sumError()
      setTimeout( ()=> this.changeCardStatus(cartes,"hidden"),1000);
    }
  }

  changeCardStatus(cartes:Array<Carta>, status:string):void {
    cartes.forEach(carta => {
        carta.status = status;
      });
      let tauler:Tauler = this.TaulerService.getTauler();
      tauler.files.forEach(fila => {
        fila.status = 'default';
      })
  }
}
