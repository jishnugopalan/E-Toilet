import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewcomplaintPage } from './viewcomplaint.page';

describe('ViewcomplaintPage', () => {
  let component: ViewcomplaintPage;
  let fixture: ComponentFixture<ViewcomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcomplaintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewcomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
