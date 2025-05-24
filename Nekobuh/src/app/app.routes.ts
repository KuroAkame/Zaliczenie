import { Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {BodyComponent} from './components/body/body.component';
import {ItemComponent} from './components/item/item.component';
import {RegisterComponent} from './components/register/register.component';
import {KoszykComponent} from './components/koszyk/koszyk.component';
import {RegistersentComponent} from './components/registersent/registersent.component';


export const routes: Routes = [
  {path:'',component:BodyComponent},
  {path: 'login', component: LoginComponent},
  {path:'item', component:ItemComponent},
  {path:'register', component:RegisterComponent},
  {path:'registerSent',component:RegistersentComponent},
  {path:'koszyk',component:KoszykComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
