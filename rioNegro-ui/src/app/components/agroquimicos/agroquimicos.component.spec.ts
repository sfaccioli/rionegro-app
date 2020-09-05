import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { AgroquimicosComponent } from './agroquimicos.component';

describe('AgroquimicosComponent', () => {
  let component: AgroquimicosComponent;
  let fixture: ComponentFixture<AgroquimicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroquimicosComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroquimicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
