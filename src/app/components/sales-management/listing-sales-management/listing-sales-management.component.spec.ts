import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSalesManagementComponent } from './listing-sales-management.component';

describe('ListingSalesManagementComponent', () => {
  let component: ListingSalesManagementComponent;
  let fixture: ComponentFixture<ListingSalesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSalesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSalesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
