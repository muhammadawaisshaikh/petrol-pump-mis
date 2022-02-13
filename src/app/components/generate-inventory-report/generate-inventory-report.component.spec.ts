import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateInventoryReportComponent } from './generate-inventory-report.component';

describe('GenerateInventoryReportComponent', () => {
  let component: GenerateInventoryReportComponent;
  let fixture: ComponentFixture<GenerateInventoryReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateInventoryReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateInventoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
