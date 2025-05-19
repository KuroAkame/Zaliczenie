import { Routes } from '@angular/router';
import {BodyComponent} from './components/body/body.component';
import {ItemComponent} from './components/item/item.component';

export const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'item', component:ItemComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
