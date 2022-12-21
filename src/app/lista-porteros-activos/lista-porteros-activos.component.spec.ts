import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorterosActivosComponent } from './lista-porteros-activos.component';

describe('ListaPorterosActivosComponent', () => {
  let component: ListaPorterosActivosComponent;
  let fixture: ComponentFixture<ListaPorterosActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPorterosActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPorterosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
