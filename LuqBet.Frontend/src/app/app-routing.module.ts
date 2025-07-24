import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LandingLayoutComponent } from './components/layouts/landing-layout/landing-layout.component';
import { GameLayoutComponent } from './components/layouts/game-layout/game-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: LandingComponent }
    ]
  },
  {
    path: 'games',
    component: GameLayoutComponent,
    children: [
      {
        path: 'crash',
        loadChildren: () =>
          import('./games/crash/crash.module').then((m) => m.CrashModule)
      },
    ]
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
