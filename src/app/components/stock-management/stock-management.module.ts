import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockManagementRoutingModule } from './stock-management-routing.module';
import { StockManagementComponent } from './stock-management.component';
import { ListingStockManagementComponent } from './listing-stock-management/listing-stock-management.component';


@NgModule({
  declarations: [
    StockManagementComponent,
    ListingStockManagementComponent
  ],
  imports: [
    CommonModule,
    StockManagementRoutingModule
  ]
})
export class StockManagementModule { }
