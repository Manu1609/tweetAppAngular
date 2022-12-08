import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReTweetPost } from 'src/app/entity/TweetRequest/retweetPost';
import { PostService } from 'src/app/Service/PostService';

@Component({
  selector: 'app-retweets',
  templateUrl: './retweets.component.html',
  styleUrls: ['./retweets.component.css']
})
export class RetweetsComponent implements OnInit {
  @Input() tweetid = '';
  reTweet: ReTweetPost;

  constructor(private postService: PostService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllReTweets(this.tweetid)
  }

  public getAllReTweets(tweetid){
    this.postService.getAllReTweets(tweetid).subscribe(
      (response: ReTweetPost) => {
        this.reTweet = response;
        console.log(this.reTweet);
      },   
    )
  }

}
