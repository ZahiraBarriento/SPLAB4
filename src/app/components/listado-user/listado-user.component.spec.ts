import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUserComponent } from './listado-user.component';

describe('ListadoUserComponent', () => {
  let component: ListadoUserComponent;
  let fixture: ComponentFixture<ListadoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
