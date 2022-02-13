import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TankersManagementRoutingModule } from './tankers-management-routing.module';
import { TankersManagementComponent } from './tankers-management.component';
import { ListingTankersManagementComponent } from './listing-tankers-management/listing-tankers-management.component';


@NgModule({
  declarations: [
    TankersManagementComponent,
    ListingTankersManagementComponent
  ],
  imports: [
    CommonModule,
    TankersManagementRoutingModule
  ]
})
export class TankersManagementModule { }
