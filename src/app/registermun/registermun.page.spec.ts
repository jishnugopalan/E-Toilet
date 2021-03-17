import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistermunPage } from './registermun.page';

describe('RegistermunPage', () => {
  let component: RegistermunPage;
  let fixture: ComponentFixture<RegistermunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistermunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
