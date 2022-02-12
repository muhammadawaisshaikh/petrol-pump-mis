import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/fuels-management/fuels-management.module').then(m => m.FuelsManagementModule)
  },
  {
    path: 'fuels-management',
    loadChildren: () => import('./components/fuels-management/fuels-management.module').then(m => m.FuelsManagementModule)
  },
  {
    path: 'sales-management',
    loadChildren: () => import('./components/sales-management/sales-management.module').then(m => m.SalesManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
