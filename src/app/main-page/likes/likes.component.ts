import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { LikeResponse } from 'src/app/entity/Like/likeResponse';
import { LikeService } from 'src/app/Service/LikeService';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() tweetid ='';
  faIcon = faHeart;
  faSolidIcon = faSolidHeart;
  isActive: Boolean;
  getLike :Boolean;
  likeBoolean :Boolean;
  constructor( private router: Router,private likeService : LikeService) { 
  
  }
  ngOnInit(): void {
    this.likeService.getLike(this.tweetid).subscribe(response => this.isActive = response)
      console.log(this.isActive);
     //this.like(this.tweetid)
  }

  like(tweetid){
    //alert("working")
      
  }
  
}
