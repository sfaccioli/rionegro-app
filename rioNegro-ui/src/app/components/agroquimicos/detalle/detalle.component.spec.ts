import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroquimicoDetalleComponent } from './detalle.component';

describe('AgroquimicoDetalleComponent', () => {
  let component: AgroquimicoDetalleComponent;
  let fixture: ComponentFixture<AgroquimicoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroquimicoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroquimicoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
