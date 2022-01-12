import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @HostListener('document:click', ['$event.target'])
  onClick(element: HTMLElement) {
    console.log("element", element)
    if (!element.classList.contains('dropdown-toggle')) {
      this.showDropUser = false;
    }
  }
 

  username: string;

  constructor(private US: UserService) { }

  userSubscribe = this.US.userDynamic;
  ngOnInit(): void {
    this.userSubscribe.subscribe(user => {
      console.log("user from username", user);
      if (!user) return;
      this.username = user.user.username
    });
  }
  showDropUser: boolean = false;

  logOut() {
    this.US.logOut();
  }

  ngOnDestroy() {
    this.userSubscribe.subscribe()
  }
}
