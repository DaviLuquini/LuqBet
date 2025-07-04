import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },

  {
    path: 'games/crash',
    loadChildren: () =>
      import('./games/crash/crash.module').then((m) => m.CrashModule)
  },
  // {
  //   path: 'games/mines',
  //   loadChildren: () =>
  //     import('./games/mines/mines.module').then((m) => m.MinesModule)
  // },

  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
