import { Component, OnInit } from '@angular/core';
import { MyschoolserviceService } from 'src/app/myschoolservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  msg:string | undefined;
  role:String | undefined;
  constructor(private myschoolservice:MyschoolserviceService) { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.msg='Button is Clicked';
    return this.msg;
    this.userAuthentication();
  }

  userAuthentication()
  {
    this.myschoolservice.userAuthentication().subscribe(data=>{
      this.role
    });
  }
}
