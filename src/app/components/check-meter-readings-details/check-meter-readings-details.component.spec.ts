import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeterReadingsDetailsComponent } from './check-meter-readings-details.component';

describe('CheckMeterReadingsDetailsComponent', () => {
  let component: CheckMeterReadingsDetailsComponent;
  let fixture: ComponentFixture<CheckMeterReadingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeterReadingsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMeterReadingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
