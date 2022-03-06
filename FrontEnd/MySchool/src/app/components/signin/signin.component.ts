import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post/post.service';
import { Post } from '../../post/post';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  msg:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.msg='Button is Clicked';
    return this.msg;
  }
}
