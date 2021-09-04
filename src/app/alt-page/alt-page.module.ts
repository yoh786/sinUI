import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltPagePageRoutingModule } from './alt-page-routing.module';

import { AltPagePage } from './alt-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltPagePageRoutingModule
  ],
  declarations: [AltPagePage]
})
export class AltPagePageModule {}
