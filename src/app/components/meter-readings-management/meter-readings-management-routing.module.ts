import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeterReadingsManagementComponent } from './meter-readings-management.component';
import { ListingMeterReadingsManagementComponent } from './listing-meter-readings-management/listing-meter-readings-management.component';

const routes: Routes = [
  {
    path: '',
    component: MeterReadingsManagementComponent,
    children: [
      {
        path: '',
        component: ListingMeterReadingsManagementComponent
      },
      {
        path: 'listing-meter-readings-management',
        component: ListingMeterReadingsManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterReadingsManagementRoutingModule { }
