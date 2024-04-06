import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultResumeComponent } from './components/result-resume/result-resume.component';
import { ResultSummaryComponent } from './components/result-summary/result-summary.component';
import { ResultViewerComponent } from './components/result-viewer/result-viewer.component';
import { ResultComponent } from './components/result/result.component';
import { ResultApiService } from './services/result-api.service';

const MODULE_COMPONENTS = [
  ResultComponent,
  ResultResumeComponent,
  ResultSummaryComponent,
  ResultViewerComponent
];

@NgModule({
  declarations: MODULE_COMPONENTS,
  exports: MODULE_COMPONENTS,
  imports: [
    CommonModule
  ],
  providers: [ResultApiService]
})
export class ResultModule { }
