import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGenerateStockReportComponent } from './listing-generate-stock-report.component';

describe('ListingGenerateStockReportComponent', () => {
  let component: ListingGenerateStockReportComponent;
  let fixture: ComponentFixture<ListingGenerateStockReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGenerateStockReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGenerateStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
