import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entity/UserRequest/user';
import { UserService } from 'src/app/Service/UserService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
