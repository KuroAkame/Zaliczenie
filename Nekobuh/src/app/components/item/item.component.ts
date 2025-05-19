import {Component, AfterViewInit} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [ RouterLink ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const quanity = document.getElementById('itemQuanity') as HTMLInputElement;
    const minuser = document.getElementById('minus') as HTMLElement;
    const adder = document.getElementById('plus') as HTMLElement;
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
        }
      });
    }
  }
}

