import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarritoService } from 'src/app/services/carrito.service';
import { Producto } from 'src/app/model/Producto';
@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  productos: any;

  constructor(private carritoService: CarritoService,
    public dialogRef: MatDialogRef<AddProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {

    this.carritoService.getProductos().subscribe((listado: Producto[]) => {
      this.productos = listado;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agregarProducto(producto: Producto, index) {
    let datos: Producto[] = this.data.productos;
    if (datos.length == 0) {
      datos.push(producto);
      this.dialogRef.close(datos);
    }
    else {
      datos.forEach(p => {
        if (producto.id == p.id) {
          this.dialogRef.close(datos);
        } else {
          datos.push(producto);
          this.dialogRef.close(datos);
        }
      });
    }
  }
}
