import { Component } from '@angular/core';
import { Venta } from '../models/venta.interface';
import { CommonModule } from '@angular/common';
import { VentaService } from '../services/venta.service';
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  pedidosPendientes: Venta[] = [];
  pedidosEnCoccion: Venta[] = [];

  constructor(private ventaService: VentaService) {
    this.pedidosPendientes = this.ventaService.obtenerVentas();
  }

  cocinarPedido(id: number) {
    if(this.pedidosEnCoccion.length > 0){
      return;
    }
    const pedido = this.pedidosPendientes.find(p => p.id === id);
    if (pedido){
      this.pedidosEnCoccion.push(pedido);
      this.pedidosPendientes = this.pedidosPendientes.filter(p => p.id !== id);
    }
  }
}
