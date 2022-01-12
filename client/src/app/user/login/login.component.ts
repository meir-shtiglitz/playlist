import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userSrvice: UserService) { }

  formLogin: FormGroup;
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, Validators.required)
    })
  }

  loginSubmit(){
    console.log(this.formLogin.value);
    this.userSrvice.login(this.formLogin.value);
  }

}
