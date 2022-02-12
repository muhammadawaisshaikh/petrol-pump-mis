import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFuelsManagementComponent } from './listing-fuels-management.component';

describe('ListingFuelsManagementComponent', () => {
  let component: ListingFuelsManagementComponent;
  let fixture: ComponentFixture<ListingFuelsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingFuelsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingFuelsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
