import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../entity/TweetRequest/post';
import { PostService } from '../Service/PostService';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';
import { ReTweetPost } from '../entity/TweetRequest/retweetPost';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  

  userName :string = localStorage.getItem('currentUser');
  username = this.userName.replace('"','').replace('"','');
  tweet: Post[] | undefined;
  reTweet: ReTweetPost;
  faIcon: any;
  faSolidIcon: any;

  tweetPost : Post;

  tweetForm = new FormGroup({
    tweetText: new FormControl("", Validators.required),
  });
  
  
  constructor(private postService: PostService, private route: ActivatedRoute,private router:Router) { 
     legacyLibrary.add(faHeart, faSolidHeart);
  }

  ngOnInit(): void {
    this.getAllTweets()
   // this.getAllReTweets()
  }

  public getAllTweets(){
    this.postService.getAllTweets().subscribe(
      (response: Post[]) => {
        this.tweet = response;
        console.log(this.tweet);
        if(this.tweet)
        {
          for (let index = 0; index < this.tweet.length; index++) {
            let datevalue=this.tweet[index].tweetDate;
            this.tweet[index].localDate=new Date(datevalue).toLocaleDateString();
            
          }
        }
        this.tweet=this.tweet.sort((this.tweet))
      },   
    ),
    ()=>{
    for (let index = 0; index < this.tweet.length; index++) {
      let datevalue=this.tweet[index].tweetDate;
      this.tweet[index].localDate=new Date(datevalue).toLocaleDateString();
      alert(this.tweet[index].localDate);
    }
      
    }
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
        }})}

   public getAllReTweets(){
          this.postService.getAllReTweets(70).subscribe(
            (response: ReTweetPost) => {
              this.reTweet = response;
              console.log(this.reTweet);
            },   
          )
        }
  
}
