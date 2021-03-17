import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MunapprovePage } from './munapprove.page';

describe('MunapprovePage', () => {
  let component: MunapprovePage;
  let fixture: ComponentFixture<MunapprovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunapprovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MunapprovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
