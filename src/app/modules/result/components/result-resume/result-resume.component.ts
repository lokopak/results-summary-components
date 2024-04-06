import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-resume',
  templateUrl: './result-resume.component.html',
  styleUrls: ['./result-resume.component.scss']
})
export class ResultResumeComponent {
  @Input() score? : number;

}
