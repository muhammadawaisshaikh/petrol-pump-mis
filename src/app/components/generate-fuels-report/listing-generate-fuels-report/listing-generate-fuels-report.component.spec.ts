import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGenerateFuelsReportComponent } from './listing-generate-fuels-report.component';

describe('ListingGenerateFuelsReportComponent', () => {
  let component: ListingGenerateFuelsReportComponent;
  let fixture: ComponentFixture<ListingGenerateFuelsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGenerateFuelsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGenerateFuelsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
