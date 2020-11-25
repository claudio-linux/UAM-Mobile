import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarPage } from './editar.page';

describe('EditarPage', () => {
  let component: EditarPage;
  let fixture: ComponentFixture<EditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
