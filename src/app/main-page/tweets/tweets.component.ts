import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entity/TweetRequest/post';
import { PostService } from 'src/app/Service/PostService';



@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent  implements OnInit {

  username :string = localStorage.getItem('currentUser');
  localuser = this.username.replace('"','').replace('"','');
  tweetPost: Post[];


  tweetForm = new FormGroup({
    tweetText: new FormControl("", Validators.required),
  });
    constructor(private postService: PostService,private router:Router) { }

  ngOnInit()  {
    this.getAllTweetsOfUserName(this.localuser);
  }

  public getAllTweetsOfUserName(localuser){
    this.postService.getAllTweetsOfUsername(this.localuser).subscribe(
      (response: Post[]) => {
        this.tweetPost = response;
        console.log(this.tweetPost);
      },   
    )
  }
  
  createPost(){
   
    let newtweet = new Post();{
    newtweet.tweet = this.tweetForm.value.tweetText;
    newtweet.userName = localStorage.getItem('currentUser');
    newtweet.likeCount = 0;
    console.log(newtweet)
    }

    this.postService.postCreate(newtweet).subscribe(
      (response: Post) => {
        newtweet = response;
        console.log(newtweet);
        if(newtweet !== null){
          alert("Post Successfull")
          // this.router.navigate(['']);
        }
      
      }
    )
  }

 



}
