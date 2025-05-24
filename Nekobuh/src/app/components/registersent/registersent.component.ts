import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../_service/auth.service';
@Component({
  selector: 'app-registersent',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registersent.component.html',
  styleUrl: './registersent.component.css'
})
export class RegistersentComponent implements OnInit {
  registerForm!: FormGroup;
  private authService: AuthService = inject(AuthService);

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
