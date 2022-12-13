import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LikeRequest } from 'src/app/entity/Like/likeRequest';
import { Post } from 'src/app/entity/TweetRequest/post';
import { LikeService } from 'src/app/Service/LikeService';
import { PostService } from 'src/app/Service/PostService';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() tweetid = '';
  @Output() refresh = new EventEmitter<boolean>();
  pageRefresh:boolean;
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
      }
    )
  }

  like() {
    if (!this.isActive) {
       this.likeUpdateBoolean = new LikeRequest(); {
        this.likeUpdateBoolean.tweetBoolean = true;
        this.isActive =true;
        this.likeService.likeUpdate(this.likeUpdateBoolean, this.tweetid).subscribe(
          (response: LikeRequest) => {
            this.likeUpdateBoolean = response;
            let newtweet = new Post();{
              newtweet.userName = localStorage.getItem('currentUser');
              newtweet.likeCount = this.tweetPost.likeCount +1;
              }
          
              this.postService.postUpdate(newtweet,this.tweetid).subscribe(
                (response: Post) => {
                  newtweet = response;
                   this.getLikesCount();
                }
              )
          }
        )
      }
    }
    else if (this.isActive) {
      (this.isActive)  
        this.likeUpdateBoolean = new LikeRequest(); {
          this.likeUpdateBoolean.tweetBoolean = false;
          this.isActive =false;
          this.likeService.likeUpdate(this.likeUpdateBoolean, this.tweetid).subscribe(
            (response: LikeRequest) => {
              this.likeUpdateBoolean = response;
              let newtweet = new Post();{
                newtweet.userName = localStorage.getItem('currentUser');
                newtweet.likeCount = this.tweetPost.likeCount - 1;
                }
                this.postService.postUpdate(newtweet,this.tweetid).subscribe(
                  (response: Post) => {
                    newtweet = response;
                      this.getLikesCount();
                  }
                )
              
            }
          )
      }
    }

  }
}
