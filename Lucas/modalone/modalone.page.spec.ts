import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalonePage } from './modalone.page';

describe('ModalonePage', () => {
  let component: ModalonePage;
  let fixture: ComponentFixture<ModalonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
