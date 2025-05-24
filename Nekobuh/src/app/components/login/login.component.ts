import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';
import {AuthService} from '../../_service/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  protected readonly onsubmit = onsubmit;
  loginForm!: FormGroup;
  constructor(private authService:AuthService) {
  }

  ngOnInit():void{
    this.loginForm = new FormGroup({
      'name': new FormControl('',[Validators.required]),
      'password':new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    this.authService.loginUser(this.loginForm.value.name, this.loginForm.value.password)
  }
}

