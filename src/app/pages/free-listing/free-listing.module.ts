import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeListingPageRoutingModule } from './free-listing-routing.module';

import { FreeListingPage } from './free-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeListingPageRoutingModule
  ],
  declarations: [FreeListingPage]
})
export class FreeListingPageModule {}
