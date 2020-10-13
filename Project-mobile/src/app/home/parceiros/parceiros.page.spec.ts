import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParceirosPage } from './parceiros.page';

describe('ParceirosPage', () => {
  let component: ParceirosPage;
  let fixture: ComponentFixture<ParceirosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceirosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParceirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
