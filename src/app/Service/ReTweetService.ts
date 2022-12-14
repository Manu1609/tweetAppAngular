import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RetweetRequest } from "../entity/TweetRequest/reTweetRequest";

@Injectable({
    providedIn: 'root'
})
export class ReTweetService {

    constructor(private http: HttpClient) { }

    private apiServer = "http://localhost:9090";
    private localUser = localStorage.getItem('currentUser');

    localuser = this.localUser.replace('"','').replace('"','');


    public reTweetCreate(tweetid:string, retweetRequest: RetweetRequest):Observable<RetweetRequest>{
        return this.http.post<RetweetRequest>(`${this.apiServer}/api/v1.0/tweets/${this.localuser}/addRetweet/${tweetid}`,retweetRequest);
    }

    public deleteReTweet(reTweetid: number): Observable<any> {
        return this.http.delete<any>(`${this.apiServer}/api/v1.0/tweets/${this.localuser}/deleteRetweet/${reTweetid}`);
    }
}