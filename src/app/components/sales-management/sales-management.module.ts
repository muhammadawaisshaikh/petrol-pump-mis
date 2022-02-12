import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagementRoutingModule } from './sales-management-routing.module';
import { SalesManagementComponent } from './sales-management.component';
import { ListingSalesManagementComponent } from './listing-sales-management/listing-sales-management.component';


@NgModule({
  declarations: [
    SalesManagementComponent,
    ListingSalesManagementComponent
  ],
  imports: [
    CommonModule,
    SalesManagementRoutingModule
  ]
})
export class SalesManagementModule { }
