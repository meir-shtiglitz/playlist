import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formRegister: FormGroup;
  update:boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    var user:{username: string, email:string, password:string} = {username:null,email:null,password:null};
    const logedUser = this.userService.getUser();
    if(logedUser.user){
      this.update = true;
      user = {...user,...logedUser.user}; 
    }
    this.formRegister = new FormGroup({
      "username": new FormControl(user.username, Validators.required),
      "email": new FormControl(user.email, [Validators.required,Validators.email]),
      "password": new FormControl(user.password,[this.passwordValidation]),
      "confirmPassword": new FormControl(user.password, [this.confirmValidation]),
    })
  }

  passwordValidation: ValidatorFn = (control: AbstractControl):  ValidationErrors | null => { 
    console.log("pass input",control.value);
    if (!this.formRegister) return
    const cval = control.value;
    if((!this.update || cval) && (!cval || cval.length < 6)){
      console.log('invalid');
      return {'confirmInvalid': true};
    } else{
      console.log('valid');
      return null
    }
  }

  confirmValidation: ValidatorFn = (control: AbstractControl):  ValidationErrors | null => { 
    console.log(control.value);
    if (!this.formRegister) return
    console.log("password", this.formRegister.get("password").value);
    if(this.formRegister.get("password").value !== control.value){
      console.log('invalid');
      return {'confirmInvalid': true};
    } else{
      console.log('valid');
      return null
    }
  }

  resetConfirm(){
    this.formRegister.patchValue({"confirmPassword": ''})
  }

  submitRegister(){
    console.log(this.formRegister.value)
    delete this.formRegister.value.confirmPassword;
    console.log(this.formRegister.value);
    if(!this.update) this.userService.signup(this.formRegister.value);
    this.userService.updateUser(this.formRegister.value);
  }

}
