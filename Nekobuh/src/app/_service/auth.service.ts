import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthModel} from '../components/shared/auth-model';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedSub = new Subject<boolean>();
  private token!:string;
  getToken(){
    return this.token;
  }
  getAuthenticatedSub(){
    return this.authenticatedSub.asObservable();

  }
  constructor(private http: HttpClient, private router:Router) {
  }
  register(name:string,password:string){
    const authData: AuthModel = {name:name, password:password};
    this.http.post('http://localhost:3000/register/', authData).subscribe((res =>console.log(res)));
  }
  loginUser(name:string,password:string){
    const authData: AuthModel = {name:name,password:password};
    this.http.post<{token:string}>('http://localhost:3000/login',authData)
      .subscribe(res =>{
        this.token = res.token;
        if(this.token){
          this.authenticatedSub.next(true);
          this.router.navigate(['/']);
        }
      })
  }
  logout(){
    this.token = '';
    this.authenticatedSub.next(false);
    this.router.navigate(['/']);
  }
}
