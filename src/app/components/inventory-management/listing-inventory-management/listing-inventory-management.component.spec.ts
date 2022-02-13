import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInventoryManagementComponent } from './listing-inventory-management.component';

describe('ListingInventoryManagementComponent', () => {
  let component: ListingInventoryManagementComponent;
  let fixture: ComponentFixture<ListingInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingInventoryManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
