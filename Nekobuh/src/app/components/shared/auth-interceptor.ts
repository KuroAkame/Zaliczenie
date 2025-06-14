import {HttpInterceptor, HttpEvent,HttpHandler,HttpRequest} from '@angular/common/http';
import {AuthService} from '../../_service/auth.service';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService:AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    if(!token){
      return next.handle(req);
    }const authRequest = req.clone({
      headers:req.headers.set('authorization',token)
    })
    return next.handle(authRequest);
  }
}
