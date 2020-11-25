import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Item {
  name: string;
  preco: string;
  quantidade: string;
}

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private itens: Item[] = [];
  private itens$ = new BehaviorSubject<Item[]>([]);

  constructor(private storage: Storage) {
    this.storage.get('itens')
      .then(storedItens => {
        this.itens.push(...storedItens);
        this.itens$.next([...this.itens]);
      })
  }

  private saveUpdates() {
    this.storage.set('itens', this.itens);
    this.itens$.next([...this.itens]);
  }

  public all() {
    return this.itens$.asObservable();
  }

  public get(name: string) {
    return this.itens.find(i => i.name === name);
  }

  public create(item: Item) {
    this.itens.push({ ...item });
    this.saveUpdates();
  }

  public update(item: Item, name: string) {
    const idx = this.itens.findIndex(i => i.name === name);
    this.itens[idx] = { ...item };
    this.saveUpdates();
  }

  public add() {
    const newItem: Item = {
      name: '',
      preco: '',
      quantidade: ''
    };
    this.itens.push(newItem);
    this.itens$.next([...this.itens]);
  }
}
