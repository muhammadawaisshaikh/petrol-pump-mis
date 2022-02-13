import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMeterReadingsManagementComponent } from './listing-meter-readings-management.component';

describe('ListingMeterReadingsManagementComponent', () => {
  let component: ListingMeterReadingsManagementComponent;
  let fixture: ComponentFixture<ListingMeterReadingsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingMeterReadingsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingMeterReadingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
