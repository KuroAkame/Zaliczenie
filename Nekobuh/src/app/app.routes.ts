import { Routes } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {ItemComponent} from './components/item/item.component';
import {LoginComponent} from './components/login/login.component';
import {RegistersentComponent} from './components/registersent/registersent.component';

export const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'item', component:ItemComponent},
  {path: 'login', component: LoginComponent},
  {path:'registersent', component: RegistersentComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
