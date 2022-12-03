import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../entity/TweetRequest/post";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    private apiServer = "http://localhost:9090/api/v1.0/tweets";
    private userName = localStorage.getItem('currentUser');

    public getAllTweets(): Observable<Post> {
        return this.http.get<Post>(`${this.apiServer}/all`);
    }
    public postCreate(post: Post):Observable<Post>{
        return this.http.post<Post>(`${this.apiServer}/${this.userName}/add`,post);
    }

}