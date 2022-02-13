import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateStockReportComponent } from './generate-stock-report.component';
import { ListingGenerateStockReportComponent } from './listing-generate-stock-report/listing-generate-stock-report.component';

const routes: Routes = [
  {
    path: "",
    component: GenerateStockReportComponent,
    children: [
      {
        path: "",
        component: ListingGenerateStockReportComponent
      },
      {
        path: "listing-generate-stock-report",
        component: ListingGenerateStockReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateStockReportRoutingModule { }
