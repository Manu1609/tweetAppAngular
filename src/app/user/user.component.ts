import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../entity/UserRequest/user';
import { UserService } from '../Service/UserService';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User | undefined;
  constructor(private userService: UserService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  public getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user);
      },   
    )
  }

}
