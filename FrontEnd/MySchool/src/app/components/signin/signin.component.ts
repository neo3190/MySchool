import { Component, OnInit } from '@angular/core';
import { MyschoolserviceService } from 'src/app/myschoolservice.service';
import { Router } from '@angular/router';

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
  constructor(private myschoolservice:MyschoolserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  clickEvent(Username:string, Password:string){

    this.userAuthentication(Username,Password);

  }

  userAuthentication( Username:string, Password:string)
  {
    this.myschoolservice.userAuthentication(Username,Password).subscribe(data=>{
      this.role=data;
      if(this.role=='1')
      {

        this.router.navigateByUrl('/adminuser');
      }
      else if(this.role=='2')
      {

        this.router.navigateByUrl('/user');
      }
      else{
        this.router.navigateByUrl('/');
        this.msg='No roles';
      }

    });



  }
}
