import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'; 
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from '../environments/environment'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

import { ListaPorteroComponent } from './lista-portero/lista-portero.component';
import { FormularioPorteroComponent } from './formulario-portero/formulario-portero.component';
import { ListaPorterosActivosComponent } from './lista-porteros-activos/lista-porteros-activos.component';
import { ListaPorterosMesesComponent } from './lista-porteros-meses/lista-porteros-meses.component';
@NgModule({ 
  declarations: [ 
    AppComponent,
     MenuComponent,
     ListaPorteroComponent,
     FormularioPorteroComponent,
     ListaPorterosActivosComponent,
     ListaPorterosMesesComponent 
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    NgbModule,
    ReactiveFormsModule,
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(environment.firebase),
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     NgbModule,
//     provideFirebaseApp(() => initializeApp(environment.firebase)),
//     provideFirestore(() => getFirestore())
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
