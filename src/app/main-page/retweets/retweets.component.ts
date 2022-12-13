import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReTweetPost } from 'src/app/entity/TweetRequest/retweetPost';
import { RetweetRequest } from 'src/app/entity/TweetRequest/reTweetRequest';
import { PostService } from 'src/app/Service/PostService';
import { ReTweetService } from 'src/app/Service/ReTweetService';

@Component({
  selector: 'app-retweets',
  templateUrl: './retweets.component.html',
  styleUrls: ['./retweets.component.css']
})
export class RetweetsComponent implements OnInit {
  @Input() tweetid = '';
  @Input() DeleteOptionEnable: boolean;
  reTweets: ReTweetPost[];

  constructor(private postService: PostService, private route: ActivatedRoute,private router:Router,private retweetService:ReTweetService) { }

  ngOnInit(): void {
    this.getAllReTweets(this.tweetid)
  }

  public getAllReTweets(tweetid){
    this.postService.getAllReTweets(tweetid).subscribe(
      (response: ReTweetPost[]) => {
        this.reTweets = response;
        if (this.reTweets) {
          
          for (let index = 0; index < this.reTweets.length; index++) {
            if(this.reTweets[index].retweettime !=undefined)
            {

            let datevalue = this.reTweets[index].retweettime;
            this.reTweets[index].localDate = new Date(datevalue).toLocaleDateString();
            }
          }
        }
      },   
    )
  }

  deleteReTweet(retweetid){
    this.retweetService.deleteReTweet(retweetid).subscribe( 
      (data:any)=>{
       this.getAllReTweets(this.tweetid);
      }
    );
  }
}
