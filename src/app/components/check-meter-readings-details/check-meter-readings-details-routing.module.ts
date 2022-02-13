import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckMeterReadingsDetailsComponent } from './check-meter-readings-details.component';
import { LisitngCheckMeterReadingsDetailsComponent } from './lisitng-check-meter-readings-details/lisitng-check-meter-readings-details.component';

const routes: Routes = [
  {
    path: "",
    component: CheckMeterReadingsDetailsComponent,
    children: [
      {
        path: "",
        component: LisitngCheckMeterReadingsDetailsComponent
      },
      {
        path: "listing-check-meter-readings-details",
        component: LisitngCheckMeterReadingsDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckMeterReadingsDetailsRoutingModule { }
