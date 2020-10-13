import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-eventos',
  templateUrl: './meus-eventos.page.html',
  styleUrls: ['./meus-eventos.page.scss'],
})
export class MeusEventosPage implements OnInit {
  
  public contribuicoes=[
    {id: 1, name: 'Cerveja', preco:50},
    {id: 2, name: 'Churrasco', preco:100},
    {id: 3, name: 'Doce', preco:20}
  ]
  constructor() { }

  ngOnInit() {
  }

}
