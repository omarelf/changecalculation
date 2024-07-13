import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  constructor() { }

  calculateChange(total: number, paid: number): { tens: number, fives: number, ones: number } {
    let change = paid - total;
    const tens = Math.floor(change / 10);
    change %= 10;
    const fives = Math.floor(change / 5);
    change %= 5;
    const ones = change;
    return { tens, fives, ones };
  }
}
