import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CidadesPage } from './cidades.page';

describe('CidadesPage', () => {
  let component: CidadesPage;
  let fixture: ComponentFixture<CidadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CidadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
