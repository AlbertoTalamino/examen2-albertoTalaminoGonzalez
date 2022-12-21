import { Component, OnInit } from '@angular/core';
import { PorteroService } from '../model/portero.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  selector: 'app-formulario-portero',
  templateUrl: './formulario-portero.component.html',
  styleUrls: ['./formulario-portero.component.css']
})
export class FormularioPorteroComponent implements OnInit {

  //Propiedades
  documentId?: any;
  datosPortero: any;

  //Formulario reactivo
  dataPortero = this.fb.group({
    idPortero: [""],
    nombre: [""],
    apellidos: [""],
    ciudad: [""],
    telefono: [""],
    mail: [""],
    mesDisponible: [""],
    activo: [""],
  });

  constructor(
    private porteroService: PorteroService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.documentId = this.route.snapshot.paramMap.get("documentId");
    console.log(this.documentId);
    this.porteroService.getPortero(this.documentId).subscribe((resp) => {
      this.datosPortero = resp.payload.data();
      this.dataPortero.setValue(this.datosPortero);
    })
  }

  onSubmit() {
    this.datosPortero = this.dataPortero.value;
    this.porteroService.updatePortero(this.documentId, this.datosPortero);
  }

  eliminaPortero() {
    this.porteroService.deletePortero(this.documentId).then(
      () => {
        alert("¡PORTERO ELIMINADA!");
      },
      (error) => {
        alert("A ocurrido un error");
      }
    );
  }

  creaPortero() { 
      this.datosPortero = this.dataPortero.value;
      this.porteroService.newPortero(this.datosPortero).then(
        () => {
          alert("¡PORTERO CREADO!");
        },
        (error) => {
          alert("A ocurrido un error");
        }
      ); 
  }

  goBack(): void {
    this.location.back();
  }

}
