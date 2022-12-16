import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/UserService';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class SignInComponent implements OnInit {

  logInStatus?: Boolean;
  
  loginUser = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required,
                  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]}),
      password: new FormControl('', {
      validators:  [Validators.required,Validators.minLength(8)]})
    });
 

  constructor( private http: HttpClient, private userService: UserService, private route: ActivatedRoute, private router: Router,private authService :AuthService) { 
  }
  ngOnInit(): void {
  }

  login() {
    this.userService.userLogin(this.loginUser.value.username, this.loginUser.value.password).subscribe(
      (response: Boolean) => {
        this.logInStatus = response;
        if(this.logInStatus){
          localStorage.setItem("currentUser",JSON.stringify(this.loginUser.value.username));

            this.router.navigate(['mainPage']);
        }
        else if(this.logInStatus === false){
            alert("Invalid LogIn Credentials"); 
        }
      }
    )
  }
}
