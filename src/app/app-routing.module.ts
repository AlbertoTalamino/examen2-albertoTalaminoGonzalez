import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPorteroComponent } from './lista-portero/lista-portero.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioPorteroComponent } from './formulario-portero/formulario-portero.component';
import { ListaPorterosActivosComponent } from './lista-porteros-activos/lista-porteros-activos.component';



const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'portero', component: ListaPorteroComponent},
  {path: 'porteroActivos', component: ListaPorterosActivosComponent},
  {path: "detalleportero/:documentId", component: FormularioPorteroComponent},
  { 
    path: 'porteros', 
    loadChildren: () => import('./porteros/porteros.module').then(m => m.PorterosModule) 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
