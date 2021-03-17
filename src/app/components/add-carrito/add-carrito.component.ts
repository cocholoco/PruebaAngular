import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/model/Carrito'
import { TipoCarrito } from 'src/app/model/TipoCarrito';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-add-carrito',
  templateUrl: './add-carrito.component.html',
  styleUrls: ['./add-carrito.component.css']
})
export class AddCarritoComponent implements OnInit {

  carrito: Carrito;

  submitted = false;

  clientes: Cliente[];

  currentIndex = -1;

  carritos: Carrito[];

  constructor(private carritoService: CarritoService) {
    this.inicializarCarrito();
    this.carritoService.getCarritos().subscribe((x: Carrito[]) => {
      this.carritos = x;
    });
  }

  inicializarCarrito() {
    let tipoC = new TipoCarrito()
    tipoC.id = 1
    tipoC.descripcion = 'COMUN'
    this.carrito = new Carrito();
    this.carrito.fechaCreacion = new Date();
    this.carrito.tipoCarrito = tipoC;
  }
  ngOnInit() {
    this.carritoService.getClientes().subscribe((x: Cliente[]) => {
      this.clientes = x;
    })
  }

  saveCarrito() {

    const data = this.carrito;
    this.carritoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCarrito() {
    this.submitted = false;
    this.inicializarCarrito();
  }

  setActiveCliente(cliente, index) {
    this.carrito.cliente = cliente;
    this.currentIndex = index;

    let total: number = 0;
    let comproEsteMes = false;
    this.carritos.forEach(c => {
      if (c.cliente.id == cliente.id && c.fechaCompra) {
        total = total + c.total;
        let fechaCompra = new Date(c.fechaCompra)
        if (fechaCompra.getMonth() == new Date().getMonth()) {
          comproEsteMes = true;
        }
      }
    });
 
  }
}
