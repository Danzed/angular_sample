import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausasComponent } from './causas.component';

describe('CausasComponent', () => {
  let component: CausasComponent;
  let fixture: ComponentFixture<CausasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
