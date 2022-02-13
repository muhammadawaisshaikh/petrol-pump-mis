import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankersManagementComponent } from './tankers-management.component';

describe('TankersManagementComponent', () => {
  let component: TankersManagementComponent;
  let fixture: ComponentFixture<TankersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankersManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TankersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
