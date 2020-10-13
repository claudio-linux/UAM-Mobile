import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoAtivoPage } from './evento-ativo.page';

describe('EventoAtivoPage', () => {
  let component: EventoAtivoPage;
  let fixture: ComponentFixture<EventoAtivoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoAtivoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoAtivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
