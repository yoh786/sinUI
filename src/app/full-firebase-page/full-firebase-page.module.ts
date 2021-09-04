import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullFirebasePagePageRoutingModule } from './full-firebase-page-routing.module';

import { FullFirebasePagePage } from './full-firebase-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullFirebasePagePageRoutingModule
  ],
  declarations: [FullFirebasePagePage]
})
export class FullFirebasePagePageModule {}
