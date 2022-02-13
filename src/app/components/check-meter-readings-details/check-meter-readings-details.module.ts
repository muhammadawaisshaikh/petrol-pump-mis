import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckMeterReadingsDetailsRoutingModule } from './check-meter-readings-details-routing.module';
import { CheckMeterReadingsDetailsComponent } from './check-meter-readings-details.component';
import { LisitngCheckMeterReadingsDetailsComponent } from './lisitng-check-meter-readings-details/lisitng-check-meter-readings-details.component';


@NgModule({
  declarations: [
    CheckMeterReadingsDetailsComponent,
    LisitngCheckMeterReadingsDetailsComponent
  ],
  imports: [
    CommonModule,
    CheckMeterReadingsDetailsRoutingModule
  ]
})
export class CheckMeterReadingsDetailsModule { }
