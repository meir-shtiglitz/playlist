import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  user: {token:string, user:{_id:string,email:string,username:string}};

  userDynamic = new BehaviorSubject<any>(null);

  getUser(){
    return {...this.user};
  }

  signup(newUser:{username: string, email: string, password: string}){
    this.http.post(`${environment.apiUrl}/user/signup`, newUser).subscribe(result =>{
      this.user = {token:result['token'], user: result['user']};
      console.log("this.user",this.user);
      
      this.userDynamic.next({token:result['token'], user: result['user']});
      
      localStorage.setItem("token",this.user.token);
      this.router.navigateByUrl('/');
    })
  }
  
  login(data:{email: string, password: string}){

    console.log("data from login service", data);
    this.http.post(`${environment.apiUrl}/user/signin`, data).subscribe(result =>{
      console.log(result);
      if(!result) return;
      this.user = {token:result['token'], user: result['user']};

      this.userDynamic.next({token:result['token'], user: result['user']});

      console.log("this.user",this.user);
      localStorage.setItem("token",this.user.token);
      this.router.navigateByUrl('/');
    })
  }
  
  signinByToken(){
    const token = localStorage.getItem("token");
    console.log("token from signin by token", token);
    if(!token || this.user) return;
    this.http.get(`${environment.apiUrl}/user/token`).subscribe(result =>{
      this.user = {token:result['token'], user: result['user']};
      
      this.userDynamic.next({token:result['token'], user: result['user']});
      
      console.log("this.user from token",this.user);
      localStorage.setItem("token",this.user.token);
    })
  }

  updateUser(newUser:{username: string, email: string, password: string}){
    console.log("newUser from update service",newUser);
    if(!newUser.password) delete newUser.password;
    this.http.put(`${environment.apiUrl}/user/update`, newUser).subscribe(result =>{
      console.log(result);
      this.user = {...this.user, user:{_id:result['_id'],username: result['username'], email: result['email']}};
      console.log("this.user",this.user);
      this.userDynamic.next(this.user);
      
      // localStorage.setItem("token",this.user.token);
      this.router.navigateByUrl('/');
    })
  }

  logOut(){
    console.log("userDynamic",this.userDynamic);
    this.user = null;
    
    this.userDynamic.next(false);
    console.log("userDynamic",this.userDynamic);
    this.router.navigate(["/login"]);
      
    localStorage.removeItem('token');
  }
}
