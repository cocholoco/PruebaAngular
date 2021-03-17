import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarritoComponent } from './components/add-carrito/add-carrito.component';
import { CarritoDetailsComponent } from './components/carrito-details/carrito-details.component';
import { CarritoListComponent } from './components/carrito-list/carrito-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AddCarritoComponent,
    CarritoDetailsComponent,
    CarritoListComponent,
    AddProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddProductoComponent
  ]
})
export class AppModule { }
