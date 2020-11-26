import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  name: string;
  valor: string;
  quantidade: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens: Item[] = [];

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
}