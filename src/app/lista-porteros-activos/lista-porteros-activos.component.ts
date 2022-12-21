import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PorteroService } from '../model/portero.service';
import { Location } from "@angular/common";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-lista-porteros-activos',
  templateUrl: './lista-porteros-activos.component.html',
  styleUrls: ['./lista-porteros-activos.component.css']
})
export class ListaPorterosActivosComponent implements OnInit {

  //Propiedades
  listaPorteros: any[] = [];

  constructor(
    private porterosService: PorteroService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.porterosService.activePorteros(true).subscribe((porteroSnapshot: any) => {
      porteroSnapshot.forEach((porteroData:any) => {

        this.listaPorteros.push({
          id: porteroData.payload.doc.id, 
          data: porteroData.payload.doc.data()
        });
        
      });
    })
  }

  goBack(): void {
    this.location.back();
  }

}
