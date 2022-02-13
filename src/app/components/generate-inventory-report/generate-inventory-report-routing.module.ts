import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenerateInventoryReportComponent } from './generate-inventory-report.component';
import { ListingGenerateInventoryReportComponent } from './listing-generate-inventory-report/listing-generate-inventory-report.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateInventoryReportComponent,
    children: [
      {
        path: '',
        component: ListingGenerateInventoryReportComponent
      },
      {
        path: 'listing-generate-inventory-report',
        component: ListingGenerateInventoryReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateInventoryReportRoutingModule { }
