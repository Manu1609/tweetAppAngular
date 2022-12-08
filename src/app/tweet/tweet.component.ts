import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetInput } from '../response/tweetInput';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent extends TweetInput implements OnInit {


  constructor(private router: Router) { 
    super();
  }

  ngOnInit(): void {
  }

 
}
