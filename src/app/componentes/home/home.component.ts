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
  public url: string;
  
  constructor(
    private _servicioPropiedad: ServicioPropiedad
  ){
    this.url = Global.url;
  }

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

}
