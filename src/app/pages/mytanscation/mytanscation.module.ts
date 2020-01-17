import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MytanscationPageRoutingModule } from './mytanscation-routing.module';

import { MytanscationPage } from './mytanscation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MytanscationPageRoutingModule
  ],
  declarations: [MytanscationPage]
})
export class MytanscationPageModule {}
