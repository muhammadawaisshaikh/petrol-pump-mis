import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesManagementComponent } from './sales-management.component';
import { ListingSalesManagementComponent } from './listing-sales-management/listing-sales-management.component';

const routes: Routes = [
  {
    path: '',
    component: SalesManagementComponent,
    children: [
      {
        path: '',
        component: ListingSalesManagementComponent
      },
      {
        path: 'listing-sales-management',
        component: ListingSalesManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesManagementRoutingModule { }
