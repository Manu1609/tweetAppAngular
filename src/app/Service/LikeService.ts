import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LikeResponse } from "../entity/Like/likeResponse";

@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private http: HttpClient) { }

    private apiServer = "http://localhost:9090/api/v1.0/tweets";
    private localUser = localStorage.getItem('currentUser');

    private username = this.localUser.replace('"','').replace('"','');

    public getLike(tweetid: string): Observable<Boolean> {
        return this.http.get<Boolean>(`${this.apiServer}/${this.username}/getlike/${tweetid}`);
    }
    public postLike(likeUpdate: LikeResponse,tweetid: number):Observable<LikeResponse>{
        return this.http.post<LikeResponse>(`${this.apiServer}/${this.username}/likeupdate/${tweetid}/`,likeUpdate);
    }
}
