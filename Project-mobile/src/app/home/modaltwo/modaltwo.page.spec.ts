import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaltwoPage } from './modaltwo.page';

describe('ModaltwoPage', () => {
  let component: ModaltwoPage;
  let fixture: ComponentFixture<ModaltwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaltwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
