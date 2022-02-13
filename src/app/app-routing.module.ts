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
  {
    path: 'inventory-management',
    loadChildren: () => import('./components/inventory-management/inventory-management.module').then(m => m.InventoryManagementModule)
  },
  {
    path: 'generate-fuels-report',
    loadChildren: () => import('./components/generate-fuels-report/generate-fuels-report.module').then(m => m.GenerateFuelsReportModule)
  },
  {
    path: 'meter-readings-management',
    loadChildren: () => import('./components/meter-readings-management/meter-readings-management.module').then(m => m.MeterReadingsManagementModule)
  },
  {
    path: 'stock-management',
    loadChildren: () => import('./components/stock-management/stock-management.module').then(m => m.StockManagementModule)
  },
  {
    path: 'tankers-management',
    loadChildren: () => import('./components/tankers-management/tankers-management.module').then(m => m.TankersManagementModule)
  },
  {
    path: 'generate-sales-report',
    loadChildren: () => import('./components/generate-sales-report/generate-sales-report.module').then(m => m.GenerateSalesReportModule)
  },
  {
    path: 'generate-stock-report',
    loadChildren: () => import('./components/generate-stock-report/generate-stock-report.module').then(m => m.GenerateStockReportModule)
  },
  {
    path: 'generate-tankers-report',
    loadChildren: () => import('./components/generate-tankers-report/generate-tankers-report.module').then(m => m.GenerateTankersReportModule)
  },
  {
    path: 'check-meter-readings-details',
    loadChildren: () => import('./components/check-meter-readings-details/check-meter-readings-details.module').then(m => m.CheckMeterReadingsDetailsModule)
  },
  {
    path: 'generate-inventory-report',
    loadChildren: () => import('./components/generate-inventory-report/generate-inventory-report.module').then(m => m.GenerateInventoryReportModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
