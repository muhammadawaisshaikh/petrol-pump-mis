import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuelsManagementComponent } from './fuels-management.component';
import { ListingFuelsManagementComponent } from './listing-fuels-management/listing-fuels-management.component';

const routes: Routes = [
  {
    path: '',
    component: FuelsManagementComponent,
    children: [
      {
        path: '',
        component: ListingFuelsManagementComponent
      },
      {
        path: 'listing-fuels-management',
        component: ListingFuelsManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuelsManagementRoutingModule { }
