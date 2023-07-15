import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userData = new BehaviorSubject<any>(this.getLocalUserData());

  setUserData(data: any) {
    localStorage.setItem('userData', JSON.stringify(data));
    this.userData.next(data);
  }

  getUserData() {
    return this.userData.asObservable();
  }

  private getLocalUserData() {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
}