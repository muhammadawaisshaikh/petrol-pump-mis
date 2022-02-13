import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFuelsReportComponent } from './generate-fuels-report.component';

describe('GenerateFuelsReportComponent', () => {
  let component: GenerateFuelsReportComponent;
  let fixture: ComponentFixture<GenerateFuelsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFuelsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateFuelsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
