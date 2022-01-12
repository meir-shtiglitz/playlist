import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-example',
  templateUrl: './user-example.component.html',
  styleUrls: ['./user-example.component.css']
})
export class UserExampleComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.login({email:'user@example.com',password:"123456"});
    setTimeout( () => this.userService.logOut(), 3000000 );
  }

}
