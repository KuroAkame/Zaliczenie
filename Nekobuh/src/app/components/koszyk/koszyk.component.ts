import { Component, OnInit } from '@angular/core';  // dodaj OnInit
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../_service/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-koszyk',
  imports: [RouterLink, CommonModule],
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']  // poprawione na styleUrls
})
export class KoszykComponent implements OnInit {  // dodaj implementację OnInit
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();  // pobierz aktualny koszyk
  }
  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
