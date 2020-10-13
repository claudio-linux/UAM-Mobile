import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-ativo',
  templateUrl: './evento-ativo.page.html',
  styleUrls: ['./evento-ativo.page.scss'],
})
export class EventoAtivoPage implements OnInit {
  
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }
  public itens = [
    { name: 'Cerveja'},
    { name: 'Churrasco'},
  ];
  
  public newItem = '';
  
  public addToList() {
    this.itens.push({
      name: this.newItem,
    });
    this.newItem = '';
  }
}
