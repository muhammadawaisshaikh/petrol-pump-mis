import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateSalesReportComponent } from './generate-sales-report.component';
import { ListingGenerateSalesReportComponent } from './listing-generate-sales-report/listing-generate-sales-report.component';

const routes: Routes = [
  {
    path: "",
    component: GenerateSalesReportComponent,
    children: [
      {
        path: "",
        component: ListingGenerateSalesReportComponent
      },
      {
        path: "listing-generate-sales-report",
        component: ListingGenerateSalesReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateSalesReportRoutingModule { }
