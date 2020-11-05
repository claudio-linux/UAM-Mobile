import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Amigo } from '../../../lista-de-amigos.page';

@Component({
  selector: 'app-amigo-form',
  templateUrl: './amigo-form.component.html',
  styleUrls: ['./amigo-form.component.scss'],
})
export class AmigoFormComponent implements OnInit {

  @Input() amigo: Amigo;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
