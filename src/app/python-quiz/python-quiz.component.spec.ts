import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonQuizComponent } from './python-quiz.component';

describe('PythonQuizComponent', () => {
  let component: PythonQuizComponent;
  let fixture: ComponentFixture<PythonQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
