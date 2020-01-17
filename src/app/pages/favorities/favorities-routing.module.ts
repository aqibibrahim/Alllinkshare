import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritiesPage } from './favorities.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritiesPageRoutingModule {}
