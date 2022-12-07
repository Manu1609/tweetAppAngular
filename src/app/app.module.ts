import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Service/UserService';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderBarComponent } from './main-page/header-bar/header-bar.component';
import { LikesComponent } from './main-page/likes/likes.component';
import { TweetsComponent } from './main-page/tweets/tweets.component';
import { RetweetsComponent } from './main-page/retweets/retweets.component';
import { UsersComponent } from './main-page/users/users.component';
import { TweetComponent } from './tweet/tweet.component';
import { ChangePasswordComponent } from './main-page/change-password/change-password.component';
import { PostService } from './Service/PostService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule ,FaIconLibrary } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    MainPageComponent,
    HeaderBarComponent,
    LikesComponent,
    TweetsComponent,
    RetweetsComponent,
    UsersComponent,
    TweetComponent,
    ChangePasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    FontAwesomeModule,
    
   
    
  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
