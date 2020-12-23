import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//para la librería rxjs se la tiene que utilizar por problemas de compativbilidad
import { Observable } from 'rxjs/Observable';
import { Propiedad } from '../modelos/propiedad';
import { Global } from './global';
import { JsonPipe } from '@angular/common';

@Injectable()
export class ServicioPropiedad {
    public url: String;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    testService() {
        return "Probando el servicio de angular"
    }

    //todavia no utilizadoi
    saveProject (propiedad: Propiedad): Observable<any>{
        let params = JSON.stringify(propiedad);
        let headers= new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-propiedad', params, {headers: headers});
    }

    getPropiedades(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'propiedades', {headers: headers});
    }

    getPropiedad(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'propiedad/' + id, {headers: headers});
    }
}