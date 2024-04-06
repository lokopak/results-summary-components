import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultResumeComponent } from './result-resume.component';

describe('ResultResumeComponent', () => {
  let component: ResultResumeComponent;
  let fixture: ComponentFixture<ResultResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultResumeComponent]
    });
    fixture = TestBed.createComponent(ResultResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
