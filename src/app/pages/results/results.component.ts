import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Result, ResultApiService } from '@app/modules/result';
import { first } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {

  results: Result[] =  [];

  constructor(private _resultsApiService: ResultApiService) {}

  ngOnInit(): void {
    this._resultsApiService.get().pipe(first()).subscribe(results => this.results = results);
  }

}
