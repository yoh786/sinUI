import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullFirebasePagePage } from './full-firebase-page.page';

const routes: Routes = [
  {
    path: '',
    component: FullFirebasePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullFirebasePagePageRoutingModule {}
