import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userData = new BehaviorSubject<any>(null);

  constructor() { }

  setUserData(data: any) {
    this.userData.next(data);
  }

  getUserData() {
    return this.userData.asObservable();
  }
}
