import { Component, Input, OnInit } from '@angular/core';
import { Baralla } from '../../model/entitats/implementacions/baralla/Baralla';

@Component({
  selector: 'app-baralla',
  templateUrl: './baralla.component.html',
  styleUrls: ['./baralla.component.css']
})
export class BarallaComponent implements OnInit {
  @Input() baralla!:Baralla;
  constructor() { }

  ngOnInit(): void {
  }

}
