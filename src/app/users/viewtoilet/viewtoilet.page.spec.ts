import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewtoiletPage } from './viewtoilet.page';

describe('ViewtoiletPage', () => {
  let component: ViewtoiletPage;
  let fixture: ComponentFixture<ViewtoiletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtoiletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewtoiletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
