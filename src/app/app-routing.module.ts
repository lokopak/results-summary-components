import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'results', loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule) },
  { path: '', pathMatch: 'full', redirectTo: 'results' },
  { path: '**', redirectTo: 'results' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
