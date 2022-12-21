import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PorteroService } from '../model/portero.service';

@Component({
  selector: 'app-lista-porteros',
  templateUrl: './lista-porteros.component.html',
  styleUrls: ['./lista-porteros.component.css']
})
export class ListaPorterosComponent implements OnInit {

  constructor(
    private porteroService: PorteroService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
