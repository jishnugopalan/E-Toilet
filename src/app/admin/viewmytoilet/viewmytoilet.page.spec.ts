import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewmytoiletPage } from './viewmytoilet.page';

describe('ViewmytoiletPage', () => {
  let component: ViewmytoiletPage;
  let fixture: ComponentFixture<ViewmytoiletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmytoiletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewmytoiletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
