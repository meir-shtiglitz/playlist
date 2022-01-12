import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsLogedOutService {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.userService.userDynamic.pipe(take(1),map(user => {
      console.log("user from is loged out guard",user);
      if(!localStorage.getItem('token')){ 
         return true;
      } else{  
          return this.router.createUrlTree(['/']);
      }
    }))
  }
}
