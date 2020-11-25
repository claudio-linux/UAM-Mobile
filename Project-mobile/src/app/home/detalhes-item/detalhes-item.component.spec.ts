import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesItemComponent } from './detalhes-item.component';

describe('DetalhesItemComponent', () => {
  let component: DetalhesItemComponent;
  let fixture: ComponentFixture<DetalhesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
