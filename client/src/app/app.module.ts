import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UpdateComponent } from './user/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SearchSongComponent } from './search-song/search-song.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AllPlaylistComponent } from './all-playlist/all-playlist.component';
import { AuthHeaderService } from './auth-header.service';
import { AddCatComponent } from './all-playlist/add-cat/add-cat.component';
import { SafePipe } from './safe.pipe';
import { LoaderComponent } from './loader/loader.component';
import { IsAdminRouteGuardService } from './routes-guard/is-admin-route-guard.service';
import { ShortPipe } from './playlist/short.pipe';
import { UserExampleComponent } from './user-example/user-example.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    SignupComponent,
    UpdateComponent,
    HomeComponent,
    SearchSongComponent,
    PlaylistComponent,
    AllPlaylistComponent,
    AddCatComponent,
    SafePipe,
    LoaderComponent,
    AppComponent,
    ShortPipe,
    UserExampleComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    IsAdminRouteGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
