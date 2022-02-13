import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateFuelsReportComponent } from './generate-fuels-report.component';
import { ListingGenerateFuelsReportComponent } from './listing-generate-fuels-report/listing-generate-fuels-report.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateFuelsReportComponent,
    children: [
      {
        path: '',
        component: ListingGenerateFuelsReportComponent
      },
      {
        path: 'listing-generate-fuels-report',
        component: ListingGenerateFuelsReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateFuelsReportRoutingModule { }
