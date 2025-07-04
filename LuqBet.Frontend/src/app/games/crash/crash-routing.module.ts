import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrashComponent } from './components/crash/crash.component';

const routes: Routes = [
  { path: '', component: CrashComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrashRoutingModule {}
