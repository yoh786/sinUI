import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltPagePage } from './alt-page.page';

const routes: Routes = [
  {
    path: '',
    component: AltPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltPagePageRoutingModule {}
