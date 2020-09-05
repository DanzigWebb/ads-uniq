import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersCheckComponent } from './folders-check.component';

describe('FoldersCheckComponent', () => {
  let component: FoldersCheckComponent;
  let fixture: ComponentFixture<FoldersCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
