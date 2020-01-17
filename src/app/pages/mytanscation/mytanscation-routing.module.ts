import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytanscationPage } from './mytanscation.page';

const routes: Routes = [
  {
    path: '',
    component: MytanscationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MytanscationPageRoutingModule {}
