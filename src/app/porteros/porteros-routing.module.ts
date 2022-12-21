import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorterosComponent } from './lista-porteros/lista-porteros.component';

const routes: Routes = [
  {path: 'listaPorteros', component: ListaPorterosComponent}
  //{path: '**' , redirectTo: '/listaPorteros', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorterosRoutingModule { }
