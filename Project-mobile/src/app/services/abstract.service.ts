import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export abstract class AbstractService<T extends{id: number}> {

  private itens: T[] = [];
  protected abstract getKey(): string;

  constructor(private storage: Storage) {
    this.storage.get(this.getKey()).then(loaded => {
      if(loaded){
        this.itens.push(...loaded);
      }
    })
   }

  public all (): T[]{
    return this.itens;
  }

  public remove (id: number){
    const idx  = this.itens.findIndex(i => i.id === id);
    this.itens.splice(idx,1);
    this.storage.set(this.getKey(), this.itens);
  }

  public find (id: number){
    return this.itens.find(i => i.id === id);
  }
  
  public create (item: T){
    this.itens.push({
      ...item
    })
    this.storage.set(this.getKey(), this.itens)
  }
}
