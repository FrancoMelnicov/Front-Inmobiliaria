import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../modelos/propiedad';
import { ServicioPropiedad } from '../../servicios/servicioPropiedad';
import { Global} from '../../servicios/global';
import {Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [ServicioPropiedad]
})
export class DetalleComponent implements OnInit {
  public url: String;
  public propiedad: Propiedad;

  constructor(
    private _propiedadServicio: ServicioPropiedad,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getPropiedad(id);
    });
  }

  getPropiedad(id){
    this._propiedadServicio.getPropiedad(id).subscribe(
      response => {
        if(response.propiedad) {
          this.propiedad = response.propiedad;
        }
      },
      error => {
        console.log(<any>error);
      });
  }
}
