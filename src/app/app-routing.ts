//importamos los modulos para routear
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importamos los componentes
import { HomeComponent } from './componentes/home/home.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { AlquileresComponent } from './componentes/alquileres/alquileres.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { Error404Component } from './componentes/error404/error404.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

//array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ventas', component: VentasComponent},
    {path: 'alquileres', component: AlquileresComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'detalle-propiedad/:id', component: DetalleComponent},
    //esta ruta se coloca siempre para cuando una persona ingrese un ruta incorrecta esta muestre un erro 404
    {path: '**', component: Error404Component}
];

//exportamos el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);