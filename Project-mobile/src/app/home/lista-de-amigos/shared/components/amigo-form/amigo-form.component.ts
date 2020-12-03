import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreatePage } from '../../../create/create.page';


@Component({
  selector: 'app-amigo-form',
  templateUrl: './amigo-form.component.html',
  styleUrls: ['./amigo-form.component.scss'],
})
export class AmigoFormComponent  {

  @Input() amigo = CreatePage;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
