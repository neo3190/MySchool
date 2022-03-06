import { Component, OnInit } from '@angular/core';
import { MyschoolserviceService } from 'src/app/myschoolservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  msg:string | undefined;
  role:any;
  username: string = '';
  password: string = '';
  constructor(private myschoolservice:MyschoolserviceService) { }

  ngOnInit(): void {
  }
  clickEvent(Username:string, Password:string){
    this.msg='Button is Clicked';
    this.userAuthentication(Username,Password);
    return this.role;

  }

  userAuthentication( Username:string, Password:string)
  {
    this.myschoolservice.userAuthentication().subscribe(data=>{
      this.role=data;
    });


  }
}
