import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { InventoryManagementComponent } from './inventory-management.component';
import { ListingInventoryManagementComponent } from './listing-inventory-management/listing-inventory-management.component';


@NgModule({
  declarations: [
    InventoryManagementComponent,
    ListingInventoryManagementComponent
  ],
  imports: [
    CommonModule,
    InventoryManagementRoutingModule
  ]
})
export class InventoryManagementModule { }
