import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateInventoryReportRoutingModule } from './generate-inventory-report-routing.module';
import { GenerateInventoryReportComponent } from './generate-inventory-report.component';
import { ListingGenerateInventoryReportComponent } from './listing-generate-inventory-report/listing-generate-inventory-report.component';


@NgModule({
  declarations: [
    GenerateInventoryReportComponent,
    ListingGenerateInventoryReportComponent
  ],
  imports: [
    CommonModule,
    GenerateInventoryReportRoutingModule
  ]
})
export class GenerateInventoryReportModule { }
