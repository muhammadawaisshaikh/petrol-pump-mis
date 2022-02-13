import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGenerateSalesReportComponent } from './listing-generate-sales-report.component';

describe('ListingGenerateSalesReportComponent', () => {
  let component: ListingGenerateSalesReportComponent;
  let fixture: ComponentFixture<ListingGenerateSalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGenerateSalesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGenerateSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
