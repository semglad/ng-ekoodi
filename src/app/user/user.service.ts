import { Injectable } from '@angular/core';
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
}

