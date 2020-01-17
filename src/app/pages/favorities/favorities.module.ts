import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritiesPageRoutingModule } from './favorities-routing.module';

import { FavoritiesPage } from './favorities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritiesPageRoutingModule
  ],
  declarations: [FavoritiesPage]
})
export class FavoritiesPageModule {}
