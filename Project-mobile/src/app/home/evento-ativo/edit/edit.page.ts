import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../evento-ativo.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  private itens: Item[] = [
    {name: 'Cerveja', valor: 'R$ 200', quantidade: '1'},
    {name: 'Bolo', valor: 'R$ 150', quantidade: '2'},
  ];

  public item: Item;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.item = this.itens.find(i => i.name == name);
  }

  public handleSave(){
    console.log(this.item);
  }

}
