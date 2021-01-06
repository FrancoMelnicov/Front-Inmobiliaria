import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../modelos/propiedad';
import { ServicioPropiedad } from '../../servicios/servicioPropiedad';
import { Global} from '../../servicios/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServicioPropiedad]
})
export class HomeComponent implements OnInit {
  public propiedades: Propiedad[];
  public propiedadesFiltradas: Propiedad[];
  public url: string;
  
  constructor(
    private _servicioPropiedad: ServicioPropiedad
  ){
    this.url = Global.url;
  }

  //se inicia el componente cargando esas funciones
  ngOnInit(){
    this.getPropiedades();
  }

  getPropiedades() {
    this._servicioPropiedad.getPropiedades().subscribe(
      response => {
        if(response.propiedades) {
          this.propiedades = response.propiedades;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getPropiedadesFiltradas(){
    this._servicioPropiedad.getPropiedades().subscribe(
      response => {
        //recibe el array de objetos y los pasa al array propiedades
        if(response.propiedades) {
          this.propiedades = response.propiedades;

          if("La propiedad categoria" != null){
            this.propiedadesFiltradas = this.propiedades.filter(function(propiedad){
              return propiedad.categoria === 'La propiedad categoria';
            });
          }

          if("La propiedad localidad" != null){
            this.propiedadesFiltradas = this.propiedades.filter(function(propiedad){
              return propiedad.localidad === 'La propiedad localidad';
            });
          }

          if("La propiedad moneda" != null){
            this.propiedadesFiltradas = this.propiedades.filter(function(propiedad){
              return propiedad.moneda === 'La propiedad moneda';
            });
          }
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
