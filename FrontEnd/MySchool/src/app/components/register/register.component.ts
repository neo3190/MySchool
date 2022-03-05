import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  User: any = ['UserAdmin', 'Admin'];



  constructor() {

   }

  ngOnInit(): void {
  }

}
