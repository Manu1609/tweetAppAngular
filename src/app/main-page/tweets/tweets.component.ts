import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entity/TweetRequest/post';
import { PostService } from 'src/app/Service/PostService';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent  implements OnInit {

  userName :string = localStorage.getItem('currentUser');
  username = this.userName.replace('"','').replace('"','');
  tweet: Post | undefined;
  faIcon: any;
  faSolidIcon: any;
  
  constructor(private postService: PostService, private route: ActivatedRoute,private router:Router) { 
     legacyLibrary.add(faHeart, faSolidHeart);
  }

  ngOnInit(): void {
    this.getAllTweets()
  }

  public getAllTweets(){
    this.postService.getAllTweets().subscribe(
      (response: Post) => {
        this.tweet = response;
        console.log(this.tweet);
      },   
    )
  }
  

 



}
