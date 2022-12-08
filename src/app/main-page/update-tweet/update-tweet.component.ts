import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entity/TweetRequest/post';
import { TweetResponse } from 'src/app/entity/TweetRequest/tweetResponse';
import { PostService } from 'src/app/Service/PostService';
@Component({
  selector: 'app-update-tweet',
  templateUrl: './update-tweet.component.html',
  styleUrls: ['./update-tweet.component.css']
})
export class UpdateTweetComponent {

  // tweetForm: Post

  tweetForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    userName: new FormControl("", {
      validators: [Validators.required],
      updateOn: "blur"
    }),
    password: new FormControl("", Validators.required),
    contactNumber: new FormControl("", Validators.required)
  });
  tweetid: number;
  tweets:Post;
  tweetMessage: string;

  constructor(private postService: PostService,private route: ActivatedRoute){

  }

  ngOnInit(){
    this.route.queryParams.subscribe(
      params => {
        this.tweetid =  params['tweetid'];
      }
    )

      this.getTweetById()
  }

  public getTweetById(){
    this.postService.getTweetsOfTweetId(this.tweetid).subscribe(
      (response: Post) => {
        this.tweetMessage = response.tweet;
        console.log(this.tweets);
      },   
    )
  }

  Update(){

  }
}
