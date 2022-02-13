import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGenerateInventoryReportComponent } from './listing-generate-inventory-report.component';

describe('ListingGenerateInventoryReportComponent', () => {
  let component: ListingGenerateInventoryReportComponent;
  let fixture: ComponentFixture<ListingGenerateInventoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGenerateInventoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGenerateInventoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
