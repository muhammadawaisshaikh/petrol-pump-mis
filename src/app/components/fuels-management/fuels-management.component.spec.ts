import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelsManagementComponent } from './fuels-management.component';

describe('FuelsManagementComponent', () => {
  let component: FuelsManagementComponent;
  let fixture: ComponentFixture<FuelsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
