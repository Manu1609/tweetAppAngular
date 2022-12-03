import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/entity/UserRequest/user';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  //form: FormGroup;
  user: User;
  userName: any;

  form = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    userName: new FormControl("", {
      validators: [Validators.required],
      updateOn: "blur"
    }),
    password: new FormControl("", Validators.required),
    contactNumber: new FormControl("", Validators.required)
  });


  constructor( private router: Router,private userService: UserService,private fb:FormBuilder) {

  }

  ngOnInit(): void {
  }

  signUp() {
    this.user = new User();{
    this.user.firstName = this.form.value.firstName;
    this.user.lastName = this.form.value.lastName;
    this.user.userName = this.form.value.userName;
    //this.user.dob = this.formvalue;
    this.user.password = this.form.value.password;
    this.user.contactNumber = this.form.value.contactNumber;
    console.log(this.user);
    };

  this.userService.userCreate(this.user).subscribe(
    (response: User) => {
      this.user = response;
      console.log(this.user);
      if(this.user !== null){
        alert("User SignUp Successfull")
        this.router.navigate(['sign-in']);
      }
    
    }
  )
  }

  // get username() {
  //   return this.form.controls['username'];
  // }

}

