import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/services/itens.service';


@Component({
  selector: 'app-ite-form',
  templateUrl: './ite-form.component.html',
  styleUrls: ['./ite-form.component.scss'],
})
export class ItemFormComponent implements OnInit {

  @Input() item: Item;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}

