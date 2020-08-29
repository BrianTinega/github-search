import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGithubSearchComponent } from './form-github-search.component';

describe('FormGithubSearchComponent', () => {
  let component: FormGithubSearchComponent;
  let fixture: ComponentFixture<FormGithubSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGithubSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGithubSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
