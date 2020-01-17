import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeListingPage } from './free-listing.page';

const routes: Routes = [
  {
    path: '',
    component: FreeListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeListingPageRoutingModule {}
