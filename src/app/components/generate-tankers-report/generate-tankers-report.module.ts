import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateTankersReportRoutingModule } from './generate-tankers-report-routing.module';
import { GenerateTankersReportComponent } from './generate-tankers-report.component';
import { ListingGenerateTankersReportComponent } from './listing-generate-tankers-report/listing-generate-tankers-report.component';


@NgModule({
  declarations: [
    GenerateTankersReportComponent,
    ListingGenerateTankersReportComponent
  ],
  imports: [
    CommonModule,
    GenerateTankersReportRoutingModule
  ]
})
export class GenerateTankersReportModule { }
