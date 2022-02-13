import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTankersManagementComponent } from './listing-tankers-management.component';

describe('ListingTankersManagementComponent', () => {
  let component: ListingTankersManagementComponent;
  let fixture: ComponentFixture<ListingTankersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingTankersManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTankersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
