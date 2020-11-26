import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreatePage } from '../../../create/create.page';
import { SharedModule } from '../../../../lista-de-amigos/shared/shared.module';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {

  @Input() item: CreatePage;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
