import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterReadingsManagementComponent } from './meter-readings-management.component';

describe('MeterReadingsManagementComponent', () => {
  let component: MeterReadingsManagementComponent;
  let fixture: ComponentFixture<MeterReadingsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterReadingsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterReadingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
