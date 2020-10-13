import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusEventosPage } from './meus-eventos.page';

describe('MeusEventosPage', () => {
  let component: MeusEventosPage;
  let fixture: ComponentFixture<MeusEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusEventosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
