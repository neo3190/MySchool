import { Component, OnInit } from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.items = [
      {
      label: 'Add User',
      icon:'pi pi-fw pi-file',
      id:'adduser',
      command: (onclick)=> {this.addUser(event)}
      },
      {
      label: 'Change Password',
      icon:'pi pi-fw pi-pencil',
      id:'changepass',
      command: (onclick)=> {this.changePass(event)}
      },
      {
      label: 'Deactivate User',
      icon:'pi pi-fw pi-user',
      id:'deactiveuser',
      command: (onclick)=> {this.deactiveUser(event)}
      }

  ]
}
  changePass(event: any) {
    alert("this is change password  ");
    throw new Error('Method not implemented.');
  }
  deactiveUser(event: any) {
    alert("this is deactiveUser  ");
    throw new Error('Method not implemented.');
  }
  addUser(event:any) {
    alert("this is add user    ");
    throw new Error('Method not implemented.');
  }
  }



