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
  username: any;
  
    constructor(private http: HttpClient){}

    private apiServer = "http://localhost:9090";
  
    public getAllUsers():Observable<User>{
        return this.http.get<User>(`${this.apiServer}/api/v1.0/tweets/get`);
    }

    public userLogin(username: string,password:string):Observable<Boolean>{
      return this.http.get<Boolean>(`${this.apiServer}/api/v1.0/tweets/login/${username}/${password}`);
  }

  public userCreate(user: User):Observable<User>{
    return this.http.post<User>(`${this.apiServer}/api/v1.0/tweets/register`,user);
}

public changePassword(username: string,password:string){
  return this.http.post<Boolean>(`${this.apiServer}/api/v1.0/tweets/changePassword/${username}/${password}`,this.username,this.password)
}
}