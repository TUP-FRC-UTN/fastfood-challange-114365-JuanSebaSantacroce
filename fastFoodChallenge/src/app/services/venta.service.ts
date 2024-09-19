import { Injectable } from '@angular/core';
import { Venta } from '../models/venta.interface';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private ventas: Venta[] = [];

  agregarVenta(venta: Venta) {
    this.ventas.push(venta);
  }

  obtenerVentas() {
    return this.ventas;
  }
}
