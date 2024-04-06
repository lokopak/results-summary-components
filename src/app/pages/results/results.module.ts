import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultModule } from '@app/modules/result';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';

@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ResultModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
