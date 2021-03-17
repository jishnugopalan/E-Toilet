import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewreviewPage } from './viewreview.page';

describe('ViewreviewPage', () => {
  let component: ViewreviewPage;
  let fixture: ComponentFixture<ViewreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
