import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminRouteGuardService {

  constructor(private userService: UserService, private router: Router) {}

  isAdmin(checkID:string){
    this.userService.userDynamic.subscribe(user => {
      console.log("user._id from isAdmin", user.user._id)
      console.log("checkID from isAdmin",checkID)
      if(user.user._id !== checkID){
        alert("Just the admin of this playlist can access it");
        this.router.navigate([""]);
      } else{
      
      }
    });
  }
  
}
