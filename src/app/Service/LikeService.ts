import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LikeRequest } from "../entity/Like/likeRequest";
import { LikeResponse } from "../entity/Like/likeResponse";

@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private http: HttpClient) { }

    private apiServer = "http://localhost:9090";
    private localUser = localStorage.getItem('currentUser');

    private username = this.localUser.replace('"','').replace('"','');

    public getLike(tweetid: string): Observable<boolean> {
        return this.http.get<boolean>(`${this.apiServer}/api/v1.0/tweets/${this.username}/getlike/${tweetid}`);
    }
    public likeUpdate(likeUpdateBoolean: LikeRequest,tweetid: string):Observable<LikeRequest>{
        return this.http.post<LikeRequest>(`${this.apiServer}/api/v1.0/tweets/${this.username}/likeupdate/${tweetid}`,likeUpdateBoolean);
    }
}
