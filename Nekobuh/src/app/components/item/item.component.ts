import {Component, AfterViewInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CartService} from '../../_service/cart.service';
@Component({
  selector: 'app-item',
  imports: [ RouterLink ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements AfterViewInit {
  constructor(private cartService: CartService) {
  }

  product = {id: 1, name: 'Cute cat paws', price: 18, quantity: 1};
  quantity: number = 1;

  ngAfterViewInit(): void {
    const quanity = document.getElementById('itemQuanity') as HTMLInputElement;
    const minuser = document.getElementById('minus') as HTMLElement;
    const adder = document.getElementById('plus') as HTMLElement;
    const shoppingCart = document.getElementById('shopping') as HTMLElement;

    let value: number = 1; // Use `let` to allow re-assignment

    // Initialize the input field with the default value
    if (quanity) {
      quanity.value = `${value}`;
    }

    // Decrease button functionality
    if (minuser) {
      minuser.addEventListener('click', () => {
        if (value > 1) { // Prevent going below 1
          value--; // Decrement the value
          console.log(value);
          if (quanity) {
            quanity.value = `${value}`; // Update the input field
            this.quantity = value;
          }
        }
      });
    }

    // Increase button functionality
    if (adder) {
      adder.addEventListener('click', () => {
        value++; // Increment the value
        console.log(value);
        if (quanity) {
          quanity.value = `${value}`; // Update the input field
          this.quantity = value;
        }
      });
    }

  }
  addToCart(product: {  id: number; name: string; price: number; quantity:number}, quantity: number) {
    this.cartService.addToCart(product, quantity);
    console.log(this.cartService);
  }
}


