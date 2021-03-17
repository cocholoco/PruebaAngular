import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoListComponent } from './components/carrito-list/carrito-list.component';
import { CarritoDetailsComponent } from './components/carrito-details/carrito-details.component';
import { AddCarritoComponent } from './components/add-carrito/add-carrito.component';


const routes: Routes = [
  { path: '', redirectTo: 'carrito', pathMatch: 'full' },
  { path: 'carrito', component: CarritoListComponent },
  { path: 'carrito/:id', component: CarritoDetailsComponent },
  { path: 'add', component: AddCarritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
