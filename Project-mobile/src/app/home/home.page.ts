import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item, ItemService } from '../services/itens.service';
import { debounceTime, map, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { DetalhesItemComponent } from './detalhes-item/detalhes-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private search$ = new BehaviorSubject('');
  public itens: Observable<Item[]> =
    combineLatest([this.itemService.all(), this.search$]).pipe(
      debounceTime(200),
      map(([cs, str]) => cs.filter(i => i.name.startsWith(str))),
      map(cs => [...cs].sort((a, b) => a.name.localeCompare(b.name))),
    )

  constructor(
    private modalController: ModalController,
    private itemService: ItemService
  ) { }

  public updateSearch(str: string) {
    this.search$.next(str);
  }

  async showDetails(itens: Item) {
    const modal = await this.modalController.create({
      component: DetalhesItemComponent,
      componentProps: {
        itens
      }
    });

    await modal.present();
  }

  public doRefresh(event) {
    this.itemService.add();
    event.target.complete();
  }

}
