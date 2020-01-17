import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeListingPage } from './free-listing.page';

describe('FreeListingPage', () => {
  let component: FreeListingPage;
  let fixture: ComponentFixture<FreeListingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
