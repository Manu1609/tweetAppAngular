import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../entity/TweetRequest/post';
import { PostService } from '../Service/PostService';

import { ReTweetPost } from '../entity/TweetRequest/retweetPost';
import { RetweetRequest } from '../entity/TweetRequest/reTweetRequest';
import { ReTweetService } from '../Service/ReTweetService';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  userName: string = localStorage.getItem('currentUser');
  username = this.userName.replace('"', '').replace('"', '');
  tweet: Post[] | undefined;
  
  tweetPost: Post;

  tweetForm = new FormGroup({
    tweetText: new FormControl("", Validators.required),
  });

  reTweetForm = new FormGroup({
    retweet: new FormControl("", Validators.required),
  });
  reTweets: ReTweetPost[];


  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router,private retweetService: ReTweetService) {
  }

  ngOnInit(): void {
    this.getAllTweets()
  }

  public getAllTweets() {
    this.postService.getAllTweets().subscribe(
      (response: Post[]) => {
        this.tweet = response;
        console.log(this.tweet);
        if (this.tweet) {
          for (let index = 0; index < this.tweet.length; index++) {
            let datevalue = this.tweet[index].tweetDate;
            this.tweet[index].localDate = new Date(datevalue).toLocaleDateString();
          }
        }
      },
    )
  }
  createPost() {
    this.tweetPost = new Post(); {
      this.tweetPost.tweet = this.tweetForm.value.tweetText;
      this.tweetPost.userName = localStorage.getItem('currentUser');
      this.tweetPost.likeCount = 0;
      console.log(this.tweetPost.tweet)
    }

    this.postService.postCreate(this.tweetPost).subscribe(
      (response: Post) => {
        this.tweetPost = response;
        console.log(this.tweetPost);
        if (this.tweetPost !== null) {
          alert("Post Successfull")
        }
      })
  }

  createRetweet(tweetid){
   
    let newRetweet = new RetweetRequest();{
      newRetweet.retweet = this.reTweetForm.value.retweet;
    console.log(newRetweet)
    console.log(tweetid)
    }

    this.retweetService.reTweetCreate(tweetid,newRetweet).subscribe(
      (response: RetweetRequest) => {
        newRetweet = response;
        console.log(newRetweet);
        if(newRetweet !== null){
          alert("ReTweet Successfull")
        }
      }
    )
  }
 
}
