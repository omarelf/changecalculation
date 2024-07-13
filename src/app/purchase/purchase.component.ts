import { Component } from '@angular/core';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  prices: number[] = [];
  total: number = 0;
  paid: number = 0;
  change: { tens: number, fives: number, ones: number } = { tens: 0, fives: 0, ones: 0 };

  constructor(private purchaseService: PurchaseService) {}

  addPrice(price: number): void {
    this.prices.push(price);
    this.total = this.prices.reduce((acc, cur) => acc + cur, 0);
  }

  calculateChange(): void {
    this.change = this.purchaseService.calculateChange(this.total, this.paid);
  }
}
