import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InventoryManagementComponent } from './inventory-management.component';
import { ListingInventoryManagementComponent } from './listing-inventory-management/listing-inventory-management.component';

const routes: Routes = [
  {
    path: "",
    component: InventoryManagementComponent,
    children: [
      {
        path: "",
        component: ListingInventoryManagementComponent
      },
      {
        path: "listing-inventory-management",
        component: ListingInventoryManagementComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryManagementRoutingModule { }
