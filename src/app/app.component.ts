import { Component } from '@angular/core';
import {User} from './user/user';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedUserName: string;

  constructor() {
    this.selectedUserName = 'ekoodi';
  }

  changeName(): void {
    this.selectedUserName = 'kooEedi';
  }

  onUserSelected(user: User) {
    this.selectedUserName = user.firstName + ' ' + user.lastName;
  }
}
