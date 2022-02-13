import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateTankersReportComponent } from './generate-tankers-report.component';
import { ListingGenerateTankersReportComponent } from './listing-generate-tankers-report/listing-generate-tankers-report.component';

const routes: Routes = [
  {
    path: "",
    component: GenerateTankersReportComponent,
    children: [
      {
        path: "",
        component: ListingGenerateTankersReportComponent
      },
      {
        path: "listing-generate-tankers-report",
        component: ListingGenerateTankersReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateTankersReportRoutingModule { }
