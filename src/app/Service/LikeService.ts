import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LikeRequest } from "../entity/Like/likeRequest";

@Injectable({
    providedIn: 'root'
})
export class LikeService {

    constructor(private http: HttpClient) { }

    private apiServer = "http://tweetapplicationebs-env-2.eba-mmikn2n4.ap-south-1.elasticbeanstalk.com";
    private localUser = localStorage.getItem('currentUser');

    private username = this.localUser.replace('"','').replace('"','');

    public getLike(tweetid: string): Observable<boolean> {
        return this.http.get<boolean>(`${this.apiServer}/api/v1.0/tweets/${this.username}/getlike/${tweetid}`);
    }
    public likeUpdate(likeUpdateBoolean: LikeRequest,tweetid: string):Observable<LikeRequest>{
        return this.http.post<LikeRequest>(`${this.apiServer}/api/v1.0/tweets/${this.username}/likeupdate/${tweetid}`,likeUpdateBoolean);
    }
}
