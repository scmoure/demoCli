import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGuardParentComponent } from './auth-guard-parent.component';

describe('AuthGuardParentComponent', () => {
  let component: AuthGuardParentComponent;
  let fixture: ComponentFixture<AuthGuardParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthGuardParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuardParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
