import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateStockReportComponent } from './generate-stock-report.component';

describe('GenerateStockReportComponent', () => {
  let component: GenerateStockReportComponent;
  let fixture: ComponentFixture<GenerateStockReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateStockReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateStockReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
