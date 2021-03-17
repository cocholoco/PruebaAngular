import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductoComponent } from '../add-producto/add-producto.component';

@Component({
  selector: 'app-carrito-details',
  templateUrl: './carrito-details.component.html',
  styleUrls: ['./carrito-details.component.css']
})
export class CarritoDetailsComponent implements OnInit {

  currentCarrito = null;
  message = '';

  constructor(private carritoService: CarritoService, private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.message = '';
    this.getCarrito(this.route.snapshot.paramMap.get('id'));
  }

  getCarrito(id) {
    this.carritoService.get(id)
      .subscribe(
        data => {
          this.currentCarrito = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCarrito() {
    this.carritoService.update(this.currentCarrito.id, this.currentCarrito)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El carrito se actualizo!';
        },
        error => {
          console.log(error);
        });
  }


  borrarProducto(producto, index) {
    this.currentCarrito.productos.splice(index, 1);
    this.carritoService.update(this.route.snapshot.paramMap.get('id'), this.currentCarrito).subscribe(x => {
      this.getCarrito(this.route.snapshot.paramMap.get('id'));
    })
  }

  agregarProducto() {
    const dialogRef = this.dialog.open(AddProductoComponent, {
      width: '500px',
      data: { productos: this.currentCarrito.productos }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.currentCarrito.productos = result;
      this.carritoService.update(this.route.snapshot.paramMap.get('id'), this.currentCarrito).subscribe(x => {
        this.getCarrito(this.route.snapshot.paramMap.get('id'));
        console.log("Se actualizo el carrito")
      });
    });

  }

}
