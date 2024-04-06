import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Result } from '../../models/result';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultViewerComponent {
  @Input()
  get results(): Result[] {
    return this._results;
  }
  set results(value: Result[]) {
    if (value !== this._results) {
      this._results = value;
      this.average = this._calcResultAverage(this._results);
      this._changeDetectorRef.markForCheck();
    }
  }
  private _results: Result[] = [];

  average = 0;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  private _calcResultAverage(results: Result[]): number {
    const num = Math.max(this.results.length, 1);
    const value = results.reduce((pre, curr) => { return pre + curr.score }, 0);
    return Math.floor(value / num);
  }
}
