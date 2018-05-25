import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinStrDirComponent } from './builtin-str-dir.component';

describe('BuiltinStrDirComponent', () => {
  let component: BuiltinStrDirComponent;
  let fixture: ComponentFixture<BuiltinStrDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinStrDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
