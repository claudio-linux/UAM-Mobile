import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarFestaPage } from './criar-festa.page';

describe('CriarFestaPage', () => {
  let component: CriarFestaPage;
  let fixture: ComponentFixture<CriarFestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarFestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarFestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
