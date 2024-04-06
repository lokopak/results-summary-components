import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import data from '../data/data.json';
import { Result } from '../models/result';

@Injectable()
export class ResultApiService {

  get(): Observable<Result[]> {
    return of(data.map(result => new Result(result)));
  }

}
