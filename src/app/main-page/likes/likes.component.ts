import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LikeRequest } from 'src/app/entity/Like/likeRequest';
import { Post } from 'src/app/entity/TweetRequest/post';
import { LikeService } from 'src/app/Service/LikeService';
import { PostService } from 'src/app/Service/PostService';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() tweetid = '';
  isActive: Boolean;
  getLike: Boolean;
  likeBoolean: Boolean;
  tweetPost: Post;
  likeUpdateBoolean: LikeRequest;
  constructor(private router: Router, private likeService: LikeService, private postService: PostService) {

  }
  ngOnInit(): void {
    this.likeService.getLike(this.tweetid).subscribe(response => this.isActive = response)
    this.getLikesCount();
  }

  getLikesCount() {
    this.postService.getLikeCount(this.tweetid).subscribe(
      (response: Post) => {
        this.tweetPost = response;
        console.log(this.tweetPost);
      }
    )
  }

  like() {
    if (!this.isActive) {
       this.likeUpdateBoolean = new LikeRequest(); {
        this.likeUpdateBoolean.tweetBoolean = true;
        console.log(this.likeUpdateBoolean);
        console.log(this.tweetPost.likeCount);
        console.log(this.tweetid);
        this.likeService.likeUpdate(this.likeUpdateBoolean, this.tweetid).subscribe(
          (response: LikeRequest) => {
            this.likeUpdateBoolean = response;
            console.log(this.likeUpdateBoolean);
            let newtweet = new Post();{
              newtweet.userName = localStorage.getItem('currentUser');
              newtweet.likeCount = this.tweetPost.likeCount +1;
              console.log(newtweet)
              }
          
              this.postService.postUpdate(newtweet,this.tweetid).subscribe(
                (response: Post) => {
                  newtweet = response;
                  console.log(newtweet);
                  if(newtweet !== null){
                  }
                }
              ),
            (data:any)=>{
              this.likeService.getLike(this.tweetid).subscribe(response => this.isActive = response)
              this.getLikesCount();             }
          }
        )
      }
    }
    else if (this.isActive) {
      (this.isActive)  
        this.likeUpdateBoolean = new LikeRequest(); {
          this.likeUpdateBoolean.tweetBoolean = false;
          console.log(this.likeUpdateBoolean);
          this.likeService.likeUpdate(this.likeUpdateBoolean, this.tweetid).subscribe(
            (response: LikeRequest) => {
              this.likeUpdateBoolean = response;
              console.log(this.likeUpdateBoolean);
              let newtweet = new Post();{
                newtweet.userName = localStorage.getItem('currentUser');
                newtweet.likeCount = this.tweetPost.likeCount - 1;
                console.log(newtweet)
                }
            
                this.postService.postUpdate(newtweet,this.tweetid).subscribe(
                  (response: Post) => {
                    newtweet = response;
                    console.log(newtweet);
                    if(newtweet !== null){
                    }
                  }
                ),
              (data:any)=>{
                this.likeService.getLike(this.tweetid).subscribe(response => this.isActive = response)
                this.getLikesCount();               }
            }
          )
      }
    }
  }
}
