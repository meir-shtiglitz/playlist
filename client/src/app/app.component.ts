import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader/loader.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  title = 'playlist';

  constructor(private userService: UserService, private LoaderService: LoaderService){};
  
  loader:boolean = this.LoaderService.loading.value;
  // loaderSubscribe = this.LoaderService.loading;
  ngOnInit(){
    // this.loader = this.LoaderService.loading.value;
    this.userService.signinByToken();
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.LoaderService.loading.subscribe(status => {
      this.loader = status;
    })
    },0)
  }

  logOut(){
    this.userService.logOut();
  }

  ngOnDestroy(): void {
      
  }

}
