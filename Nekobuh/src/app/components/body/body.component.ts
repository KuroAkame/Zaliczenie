import { Component } from '@angular/core';
import {AppComponent} from '../../app.component';
import {HeaderComponent} from '../header/header.component';
import {RouterLink} from '@angular/router';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [HeaderComponent, RouterLink,RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  title = 'NekoBuh';
  itemTitle = 'Outee Cat Paw Keycaps'
  itemPrice = 18;
}
