import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSalesReportComponent } from './generate-sales-report.component';

describe('GenerateSalesReportComponent', () => {
  let component: GenerateSalesReportComponent;
  let fixture: ComponentFixture<GenerateSalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateSalesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
