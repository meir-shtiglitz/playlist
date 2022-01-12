import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IslogedRouteGuardService } from './routes-guard/isloged-route-guard.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserExampleComponent } from './user-example/user-example.component';
import { IsLogedOutService } from './routes-guard/is-loged-out.service';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate:[IslogedRouteGuardService], children: [
    {path: 'playlist/:_id', component: PlaylistComponent},
  ]},
  {path: 'login', component: LoginComponent, canActivate:[IsLogedOutService]},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: SignupComponent},
  {path: 'user/example', component: UserExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
