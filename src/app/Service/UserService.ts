import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "../entity/UserRequest/user";
import { UserResponse } from "../response/userResponse";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  password: { headers?: HttpHeaders | { [header: string]: string | string[]; }; observe: "events"; context?: HttpContext; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; }; reportProgress?: boolean; responseType?: "json"; withCredentials?: boolean; };
  
    constructor(private http: HttpClient){}

    private apiServer = "http://localhost:9090/api/v1.0/tweets";
    private localUser = localStorage.getItem('currentUser');

    localuser = this.localUser.replace('"','').replace('"','');

    public getAllUsers():Observable<User>{
        return this.http.get<User>(`${this.apiServer}/get`);
    }

    public userLogin(username: string,password:string):Observable<Boolean>{
      return this.http.get<Boolean>(`${this.apiServer}/login/${username}/${password}`
      ).pipe(map(User =>{
        localStorage.setItem("currentUser",JSON.stringify(username));
        localStorage.setItem("currentPassword",JSON.stringify(password));
        return User;
      })
      );
  }

  public userCreate(user: User):Observable<User>{
    return this.http.post<User>(`${this.apiServer}/register`,user);
}

public changePassword(password:string){
  console.log(this.localuser)
  return this.http.post<Boolean>(`${this.apiServer}/changePassword/${this.localuser}/${password}`,this.localUser,this.password)
}
}