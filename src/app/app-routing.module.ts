import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './main-page/change-password/change-password.component';
import { HeaderBarComponent } from './main-page/header-bar/header-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TweetsComponent } from './main-page/tweets/tweets.component';
import { UsersComponent } from './main-page/users/users.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component: UserComponent},
  {path : "sign-in" , component: SignInComponent},
  {path : "sign-up" , component: SignUpComponent},
  {path : "mainPage" , component: MainPageComponent},
  {path : "app-header-bar" , component: HeaderBarComponent},
  {path : "home" , component: MainPageComponent},
  {path : "tweets" , component: TweetsComponent},
  {path : "users" , component: UsersComponent},
  {path : "changePassword" , component: ChangePasswordComponent},
  {path : "logout" , component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
