import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule,FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [RouterLink, ReactiveFormsModule],
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  constructor(private authService:AuthService) {
  }
  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'password':new FormControl('', Validators.required)
    })
  }
  onSubmit(){
    this.authService.register(this.registerForm.value.name, this.registerForm.value.password);
  }
}
