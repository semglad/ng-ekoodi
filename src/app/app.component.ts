import { Component } from '@angular/core';
import {User} from './user/user';
import {Router} from '@angular/router';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedUserName: string;

  constructor(private router: Router) {
    this.selectedUserName = 'ekoodi';
  }

  changeName(): void {
    this.selectedUserName = 'kooEedi';
  }

  onUserSelected(user: User) {
    this.selectedUserName = user.firstName + ' ' + user.lastName;
  }

  showUserList () {
    this.router.navigate(['/user-list']);
  }

  showAddUser () {
    this.router.navigate(['/add-user']);
  }
}
