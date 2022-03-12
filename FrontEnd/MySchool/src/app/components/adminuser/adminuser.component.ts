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
      command: (event) => { this.addUser(); }
      },
      {
      label: 'Change Password',
      icon:'pi pi-fw pi-pencil',

      },
      {
      label: 'Deactivate User',
      icon:'pi pi-fw pi-user',

      }

  ]
}
  addUser() {
    alert("this is add user")
    throw new Error('Method not implemented.');
  }
  }



