import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
aaaaaaaaa
  public perguntaAtual = 0;
  public perguntas = [
    {
    text: 'Qual jogo melhor?',
    options: ['RPG', 'FPS']
    },    
    {
    text: 'Qual ADC melhor?',
    options: ['MF', 'Jinx']
    }
  ]


}
