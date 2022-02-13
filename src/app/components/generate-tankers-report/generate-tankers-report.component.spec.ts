import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTankersReportComponent } from './generate-tankers-report.component';

describe('GenerateTankersReportComponent', () => {
  let component: GenerateTankersReportComponent;
  let fixture: ComponentFixture<GenerateTankersReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTankersReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTankersReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
