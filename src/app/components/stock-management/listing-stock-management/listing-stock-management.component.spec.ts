import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingStockManagementComponent } from './listing-stock-management.component';

describe('ListingStockManagementComponent', () => {
  let component: ListingStockManagementComponent;
  let fixture: ComponentFixture<ListingStockManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingStockManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingStockManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
