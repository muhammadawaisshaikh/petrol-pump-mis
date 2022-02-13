import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateStockReportRoutingModule } from './generate-stock-report-routing.module';
import { GenerateStockReportComponent } from './generate-stock-report.component';
import { ListingGenerateStockReportComponent } from './listing-generate-stock-report/listing-generate-stock-report.component';


@NgModule({
  declarations: [
    GenerateStockReportComponent,
    ListingGenerateStockReportComponent
  ],
  imports: [
    CommonModule,
    GenerateStockReportRoutingModule
  ]
})
export class GenerateStockReportModule { }
