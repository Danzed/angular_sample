import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCausaComponent } from './crear-causa.component';

describe('CrearCausaComponent', () => {
  let component: CrearCausaComponent;
  let fixture: ComponentFixture<CrearCausaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCausaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
