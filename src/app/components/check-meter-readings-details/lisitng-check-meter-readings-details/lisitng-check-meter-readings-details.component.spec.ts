import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisitngCheckMeterReadingsDetailsComponent } from './lisitng-check-meter-readings-details.component';

describe('LisitngCheckMeterReadingsDetailsComponent', () => {
  let component: LisitngCheckMeterReadingsDetailsComponent;
  let fixture: ComponentFixture<LisitngCheckMeterReadingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisitngCheckMeterReadingsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisitngCheckMeterReadingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
