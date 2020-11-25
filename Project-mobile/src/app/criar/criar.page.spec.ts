import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarPage } from './criar.page';

describe('CriarPage', () => {
  let component: CriarPage;
  let fixture: ComponentFixture<CriarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
