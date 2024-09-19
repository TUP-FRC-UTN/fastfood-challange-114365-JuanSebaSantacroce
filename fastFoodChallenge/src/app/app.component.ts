import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PointOfSaleComponent } from './point-of-sale/point-of-sale.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fastFoodChallenge';
}
