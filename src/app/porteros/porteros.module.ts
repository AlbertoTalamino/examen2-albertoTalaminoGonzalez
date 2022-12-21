import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorterosRoutingModule } from './porteros-routing.module';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';
import { FormularioPorterosComponent } from './formulario-porteros/formulario-porteros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    ListaPorterosComponent,
    FormularioPorterosComponent
  ],
  imports: [
    CommonModule,
    PorterosRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class PorterosModule { }
