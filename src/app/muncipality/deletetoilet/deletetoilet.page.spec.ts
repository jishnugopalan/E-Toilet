import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletetoiletPage } from './deletetoilet.page';

describe('DeletetoiletPage', () => {
  let component: DeletetoiletPage;
  let fixture: ComponentFixture<DeletetoiletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetoiletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletetoiletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
