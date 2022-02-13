import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingGenerateTankersReportComponent } from './listing-generate-tankers-report.component';

describe('ListingGenerateTankersReportComponent', () => {
  let component: ListingGenerateTankersReportComponent;
  let fixture: ComponentFixture<ListingGenerateTankersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingGenerateTankersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingGenerateTankersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
