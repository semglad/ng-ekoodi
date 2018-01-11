import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('Semppa', 'Glad'),
      new User('Joku', 'Muu'),
      new User('Ja', 'Kolmas')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user) {
    this.users.unshift(Object.assign({}, user));
    user.firstName = '';
    user.lastName = '';
  }

  deleteUser(user) {
    for (let i = 0; i < this.users.length; i++) {
      if (user === this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
}

