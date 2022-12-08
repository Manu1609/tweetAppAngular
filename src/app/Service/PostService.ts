import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../entity/TweetRequest/post";
import { ReTweetPost } from "../entity/TweetRequest/retweetPost";
import { TweetResponse } from "../entity/TweetRequest/tweetResponse";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    private apiServer = "http://localhost:9090/api/v1.0/tweets";
    private localUser = localStorage.getItem('currentUser');

    localuser = this.localUser.replace('"','').replace('"','');

    public getAllTweets(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiServer}/all`);
    }

    public getAllTweetsOfUsername(username:string): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiServer}/${username}`);
    }
    public postCreate(post: Post):Observable<Post>{
        return this.http.post<Post>(`${this.apiServer}/${this.localuser}/add`,post);
    }

    public getAllReTweets(tweetid: number): Observable<ReTweetPost> {
        return this.http.get<ReTweetPost>(`${this.apiServer}/allRetweets/${tweetid}`);
    }

    public getLikeCount(tweetid: number): Observable<ReTweetPost> {
        return this.http.get<ReTweetPost>(`${this.apiServer}/likeCount//${tweetid}`);
    }

    public getTweetsOfTweetId(tweetid: number): Observable<TweetResponse> {
        return this.http.get<TweetResponse>(`${this.apiServer}/getTweet/${tweetid}`);
    }

}