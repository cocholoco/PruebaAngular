import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/model/Carrito';
import { FechaPromocional } from 'src/app/model/FechaPromocional';
import { TipoCarrito } from 'src/app/model/TipoCarrito';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent implements OnInit {

  carritos: any;
  currentCarrito = null;
  currentIndex = -1;
  title = '';
  fechasPromocionales: FechaPromocional[] = new Array<FechaPromocional>();
  porcentaje:number;
  valorobtenido:any;
  valornuevo:any;

  constructor(private carritoService: CarritoService) {

    let f1 = new FechaPromocional();
    f1.desde = new Date('December 1, 2019 00:00:00');
    f1.hasta = new Date('July 1, 2021 23:59:00');
    let f2 = new FechaPromocional();
    f2.desde = new Date('June 15, 2019 00:00:00');
    f2.hasta = new Date('July 1, 2021 23:59:00');

    this.fechasPromocionales.push(f1);
    this.fechasPromocionales.push(f2);

  }

  ngOnInit(): void {
    this.retrieveCarritos();
  }

  retrieveCarritos() {
    this.carritoService.getCarritos()
      .subscribe(
        (data: Carrito[]) => {
          data.forEach(c => {
            this.fechasPromocionales.forEach(f => {
              if ((c.fechaCreacion <= f.hasta && c.fechaCreacion >= f.desde)) {
                let tipoCarrito = new TipoCarrito();
                tipoCarrito.id = 2;
                tipoCarrito.descripcion = 'FECHA ESPECIAL';
                c.tipoCarrito = tipoCarrito;
              }
            });
            let fechaC = new Date(c.fechaCreacion);
            if ((fechaC.getFullYear() != new Date().getFullYear() || fechaC.getMonth() != new Date().getMonth() || fechaC.getDay() != new Date().getDay()) && !c.fechaCompra)
            {
              this.carritoService.delete(c.id).subscribe(x => {
              });
            }
            c.productos.forEach(p => {
              c.total = c.total + p.precio;
            });
            if (c.productos.length > 5) {
             
               this.porcentaje=c.total * 5 / 100
               c.total=c.total - this.porcentaje;
            } else if (c.productos.length > 10) {
              
              if (c.tipoCarrito.id = 1) {
             
               
               this.porcentaje=c.total * 10 / 100  
               c.total=c.total - this.porcentaje;
              } else if (c.tipoCarrito.id = 2) {
             
                // aca hacer la bonificacion  del mes anterior
     
                this.valorobtenido=this.carritoService.getTotal;
                this.valornuevo=this.valorobtenido * 5 /100
                c.total=c.total - this.valornuevo;  
              
             
                let m = c.productos[0]
                c.productos.forEach(prdto => {
                  if (prdto.precio < m.precio) {
                    m = prdto;
                  }
                });
               c.total = c.total - m.precio;
              }
            }
          });
          this.carritos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCarritos();
    this.currentCarrito = null;
    this.currentIndex = -1;
  }

  setActiveCarrito(carrito, index) {
    this.currentCarrito = carrito;

    this.currentIndex = index;
  }

  borrarCarrito(carrito, index) {
    this.carritoService.delete(carrito.id).subscribe(x => {
      this.refreshList();
    });
  }

  finalizarCompra(carrito: Carrito) {
    carrito.fechaCompra = new Date();
    this.carritoService.update(carrito.id, carrito).subscribe(x => {
      this.refreshList();
    })
  }
}