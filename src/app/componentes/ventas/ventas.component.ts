import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../modelos/propiedad';
import { ServicioPropiedad } from '../../servicios/servicioPropiedad';
import { Global} from '../../servicios/global';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers: [ServicioPropiedad]
})
export class VentasComponent implements OnInit {
  public propiedades: Propiedad[];
  public propiedadesFiltradas: Propiedad[];
  public url: string;

  constructor(
    private _servicioPropiedad: ServicioPropiedad
  ) {
    this.url = Global.url;
   }

  ngOnInit(){
    this.getPropiedades();
  }

  getPropiedades(){
    this._servicioPropiedad.getPropiedades().subscribe(
      response => {
        if(response.propiedades) {
          this.propiedades = response.propiedades;
          this.propiedadesFiltradas = this.propiedades.filter(function(propiedad){
            return propiedad.categoria === 'VENTA';
          });
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
