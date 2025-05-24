import { Injectable } from '@angular/core';

export interface CartItem {
  productId: number;
  quantity: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: { id: number; name: string; price: number; quantity:number}, quantity:number): void {
    const existing = this.cart.find(item => item.productId === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({
        productId: product.id, name: product.name,
        price: product.price, quantity
      });
    }
  }
}
