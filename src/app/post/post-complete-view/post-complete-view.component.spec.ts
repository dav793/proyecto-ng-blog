import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompleteViewComponent } from './post-complete-view.component';

describe('PostCompleteViewComponent', () => {
  let component: PostCompleteViewComponent;
  let fixture: ComponentFixture<PostCompleteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCompleteViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCompleteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
