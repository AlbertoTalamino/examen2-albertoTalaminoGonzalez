import { Component, OnInit } from '@angular/core';
import { PorteroService } from '../model/portero.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-lista-portero',
  templateUrl: './lista-portero.component.html',
  styleUrls: ['./lista-portero.component.css']
})
export class ListaPorteroComponent implements OnInit {

  listaPorteros: any[] = [];

  constructor(
    private porteroService: PorteroService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){ 
    this.porteroService.getAllPorteros().subscribe((porteroSnapshot: any) => {
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
