import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAgroquimicoComponent } from './nuevo-agroquimico.component';

describe('NuevoAgroquimicoComponent', () => {
  let component: NuevoAgroquimicoComponent;
  let fixture: ComponentFixture<NuevoAgroquimicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAgroquimicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAgroquimicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
