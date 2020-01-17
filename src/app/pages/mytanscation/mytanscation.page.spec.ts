import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MytanscationPage } from './mytanscation.page';

describe('MytanscationPage', () => {
  let component: MytanscationPage;
  let fixture: ComponentFixture<MytanscationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytanscationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MytanscationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
