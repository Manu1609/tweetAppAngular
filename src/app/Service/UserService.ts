import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "../entity/UserRequest/user";
import { UserResponse } from "../response/userResponse";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    constructor(private http: HttpClient){}

    private apiServer = "http://localhost:9090/api/v1.0/tweets";

    public getAllUsers():Observable<User>{
        return this.http.get<User>(`${this.apiServer}/get`);
    }

    public userLogin(username: string,password:string):Observable<Boolean>{
      return this.http.get<Boolean>(`${this.apiServer}/login/${username}/${password}`
      ).pipe(map(User =>{
        localStorage.setItem("currentUser",JSON.stringify(username));
        return User;
      })
      );
  }

  public userCreate(user: User):Observable<User>{
    return this.http.post<User>(`${this.apiServer}/register`,user);
}
}