import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: number;
  name: string;
  valor: string;
  quantidade: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens: Item[] = [
    { id: 1, name: 'Carne', valor: 'R$ 320', quantidade: '8' }
  ];

  constructor(private storage: Storage) {
    this.storage.get('itens')
      .then(storedItens => this.itens.push(...storedItens))
  }

  public all() {
    return this.itens;
  }

  public get(name: string) {
    return this.itens.find(i => i.name === name);
  }

  public create(item: Item) {
    this.itens.push({ ...item });
    this.storage.set('itens', this.itens);
  }

  public update(item: Item, name: string) {
    const idx = this.itens.findIndex(i => i.name === name);
    this.itens[idx] = { ...item };
    this.storage.set('itens', this.itens);
  }

  public empty(): Item {
    return {
      id: null,
      name: '',
      valor: '',
      quantidade: ''
    }
  }
///////////////////////////
  public allItens(): Readonly<Array<Readonly<Item>>> {
    return this.itens;
  }

  public find(name: string): Item {
    return {
      ...this.itens.find(i => i.name === name)
    };
  }

  public updated(updatedItem: Item): void{
    const itemIndex = this.itens.findIndex(i => i.name === updatedItem.name);
    this.itens[itemIndex] = updatedItem;
    this.storage.set('itens', this.itens);
  }

  public created(newItem: Item){
    const maxItem = Math.max(...this.itens.map(i => i.id));
    this.itens.push({
      ...newItem, id: maxItem + 1
    });
    this.storage.set('itens', this.itens);
  }

}
