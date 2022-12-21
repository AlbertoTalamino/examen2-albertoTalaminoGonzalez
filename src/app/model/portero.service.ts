import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Portero } from './portero-interface';

@Injectable({
  providedIn: 'root'
})
export class PorteroService {

  

  private miColeccion = "porteros";
  constructor(private firebase: AngularFirestore) { }

  //CRUD

  //Read a single one
  getPortero(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).snapshotChanges();
  }

  //Read all
  getAllPorteros(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }
 
  //Create
  newPortero(mascota: Portero){
    return this.firebase.collection(this.miColeccion).add(mascota);
  }

  //Update
  updatePortero(documentId: string, mascota: Portero){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(mascota);
  }

  //Delete
  deletePortero(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

  //Where
  activePorteros(activo: boolean){
    return this.firebase.collection(this.miColeccion, ref => ref.where('activo', '==', activo)).snapshotChanges();
  }
}
