import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorterosMesesComponent } from './lista-porteros-meses.component';

describe('ListaPorterosMesesComponent', () => {
  let component: ListaPorterosMesesComponent;
  let fixture: ComponentFixture<ListaPorterosMesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPorterosMesesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPorterosMesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
