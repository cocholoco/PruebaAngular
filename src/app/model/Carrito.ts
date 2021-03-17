import { Cliente } from './Cliente'
import { Producto } from './Producto'
import { TipoCarrito } from './TipoCarrito';

export class Carrito {
    id: number;
    cliente: Cliente;
    productos: Producto[];
    tipoCarrito: TipoCarrito;
    total: number;
    fechaCreacion: Date;
    fechaCompra: Date;
}