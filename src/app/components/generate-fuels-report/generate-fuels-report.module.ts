import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateFuelsReportRoutingModule } from './generate-fuels-report-routing.module';
import { GenerateFuelsReportComponent } from './generate-fuels-report.component';
import { ListingGenerateFuelsReportComponent } from './listing-generate-fuels-report/listing-generate-fuels-report.component';


@NgModule({
  declarations: [
    GenerateFuelsReportComponent,
    ListingGenerateFuelsReportComponent
  ],
  imports: [
    CommonModule,
    GenerateFuelsReportRoutingModule
  ]
})
export class GenerateFuelsReportModule { }
