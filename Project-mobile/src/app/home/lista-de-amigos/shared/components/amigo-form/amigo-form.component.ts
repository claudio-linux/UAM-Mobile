import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreatePage } from '../../../create/create.page';


@Component({
  selector: 'app-amigo-form',
  templateUrl: './amigo-form.component.html',
  styleUrls: ['./amigo-form.component.scss'],
})
export class AmigoFormComponent implements OnInit {

  @Input() amigo: CreatePage;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
