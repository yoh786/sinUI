import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alt-page',
    loadChildren: () => import('./alt-page/alt-page.module').then( m => m.AltPagePageModule)
  },
  {
    path: 'full-firebase-page',
    loadChildren: () => import('./full-firebase-page/full-firebase-page.module').then( m => m.FullFirebasePagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
