import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreatePage } from '../../../create/create.page';
<<<<<<< HEAD

=======
>>>>>>> origin/teste

@Component({
  selector: 'app-amigo-form',
  templateUrl: './amigo-form.component.html',
  styleUrls: ['./amigo-form.component.scss'],
})
export class AmigoFormComponent implements OnInit {

<<<<<<< HEAD
  @Input() amigo = CreatePage;
=======
  @Input() amigo: CreatePage;
>>>>>>> origin/teste
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
