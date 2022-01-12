import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthHeaderService {
  // token:string;
  // constructor() {
  //   this.token = localStorage.getItem("token");
  //   console.log("token from header class", this.token);
  //   if(this.token) this.addAuth();
  // }

  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token");
    console.log("token from header class", token);
    if(!token) return next.handle(request);;
    request = request.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next.handle(request);
  }
}



