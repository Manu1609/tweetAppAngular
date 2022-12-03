import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/entity/TweetRequest/post';
import { PostService } from 'src/app/Service/PostService';
import { SignInComponent } from 'src/app/user/sign-in/sign-in.component';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

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
