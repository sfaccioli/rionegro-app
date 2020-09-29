import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEliminacionComponent } from './dialogo-eliminacion.component';

describe('DialogoEliminacionComponent', () => {
  let component: DialogoEliminacionComponent;
  let fixture: ComponentFixture<DialogoEliminacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoEliminacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEliminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
