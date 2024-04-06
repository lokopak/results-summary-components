import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Category, Result } from '../../models/result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'result'
  }
})
export class ResultComponent {
  @Input() result?: Result;

  @HostBinding('class.reaction')
  get isReaction(): boolean {
    return this.result?.category === Category.REACTION;
  }

  @HostBinding('class.memory')
  get isMemory(): boolean {
    return this.result?.category === Category.MEMORY;
  }

  @HostBinding('class.verbal')
  get isVerbal(): boolean {
    return this.result?.category === Category.VERBAL;
  }

  @HostBinding('class.visual')
  get isVisual(): boolean {
    return this.result?.category === Category.VISUAL;
  }

  get icon(): SafeUrl | null {
    return this.result ? this._sanitizer.bypassSecurityTrustStyle(`url(${this.result.icon})`) : null;
  }

  constructor(private _sanitizer: DomSanitizer) {}

}
