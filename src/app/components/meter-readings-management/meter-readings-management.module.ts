import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterReadingsManagementRoutingModule } from './meter-readings-management-routing.module';
import { MeterReadingsManagementComponent } from './meter-readings-management.component';
import { ListingMeterReadingsManagementComponent } from './listing-meter-readings-management/listing-meter-readings-management.component';


@NgModule({
  declarations: [
    MeterReadingsManagementComponent,
    ListingMeterReadingsManagementComponent
  ],
  imports: [
    CommonModule,
    MeterReadingsManagementRoutingModule
  ]
})
export class MeterReadingsManagementModule { }
