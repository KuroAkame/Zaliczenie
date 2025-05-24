import { Component } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {RouterLink} from '@angular/router';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {routes} from './app.routes';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BodyComponent,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'neko-buh';
}
