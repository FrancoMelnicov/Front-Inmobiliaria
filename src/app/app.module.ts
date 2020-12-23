//todos los modulos deben importarse aqui
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders} from './app-routing';

//todos los componentes creados deben importarse aqui
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { AlquileresComponent } from './componentes/alquileres/alquileres.component';
import { Error404Component } from './componentes/error404/error404.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  //los componentes importados deben nombrarse aqui
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    VentasComponent,
    AlquileresComponent,
    Error404Component,
    DetalleComponent
  ],
  //los modulos importados tambien tienen que ser nombrados aqui
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
