import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelsManagementRoutingModule } from './fuels-management-routing.module';
import { FuelsManagementComponent } from './fuels-management.component';
import { ListingFuelsManagementComponent } from './listing-fuels-management/listing-fuels-management.component';


@NgModule({
  declarations: [
    FuelsManagementComponent,
    ListingFuelsManagementComponent
  ],
  imports: [
    CommonModule,
    FuelsManagementRoutingModule
  ]
})
export class FuelsManagementModule { }
