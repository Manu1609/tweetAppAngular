import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../entity/TweetRequest/post';
import { PostService } from '../Service/PostService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  username :string = localStorage.getItem('currentUser');
  tweetPost : Post;

  tweetForm = new FormGroup({
    tweetText: new FormControl("", Validators.required),
  });
    constructor(private postService: PostService,private router:Router) { }

  ngOnInit()  {
  }
  
  createPost(){
    this.tweetPost = new Post();{
    this.tweetPost.tweet = this.tweetForm.value.tweetText;
    this.tweetPost.userName = localStorage.getItem('currentUser');
    this.tweetPost.likeCount = 0;
    console.log(this.tweetPost.tweet)
    }

    this.postService.postCreate(this.tweetPost).subscribe(
      (response: Post) => {
        this.tweetPost = response;
        console.log(this.tweetPost);
        if(this.tweetPost !== null){
          alert("Post Successfull")
          // this.router.navigate(['']);
        }
      
      }
    )
  }
}
