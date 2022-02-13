import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateSalesReportRoutingModule } from './generate-sales-report-routing.module';
import { GenerateSalesReportComponent } from './generate-sales-report.component';
import { ListingGenerateSalesReportComponent } from './listing-generate-sales-report/listing-generate-sales-report.component';


@NgModule({
  declarations: [
    GenerateSalesReportComponent,
    ListingGenerateSalesReportComponent
  ],
  imports: [
    CommonModule,
    GenerateSalesReportRoutingModule
  ]
})
export class GenerateSalesReportModule { }
