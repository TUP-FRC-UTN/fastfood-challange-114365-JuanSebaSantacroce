import { Component } from '@angular/core';
import { Venta } from '../models/venta.interface';
import { VentaService } from '../services/venta.service';
@Component({
  selector: 'app-point-of-sale',
  standalone: true,
  imports: [],
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.css'
})
export class PointOfSaleComponent {
    ventas: Venta[]= [];

    constructor(private VentaService: VentaService) {
        this.ventas = this.VentaService.obtenerVentas();
    }

    agregarVenta(nombre: string, pedido: string) {
        var venta: Venta = {
            id: Math.floor(Math.random() * 1000),
            nombre: nombre,
            pedido: pedido
        };
        this.VentaService.agregarVenta(venta);
    }


}
