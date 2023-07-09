import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = getAuth();

  constructor() {}

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}