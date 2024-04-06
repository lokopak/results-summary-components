import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './results.component';

const RESULTS_ROUTES: Routes = [{path: '', component: ResultsComponent}];

@NgModule({
  imports: [RouterModule.forChild(RESULTS_ROUTES)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
