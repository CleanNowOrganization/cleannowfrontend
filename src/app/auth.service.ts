import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, getIdToken} from 'firebase/auth';
import { from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = getAuth();

  constructor() {}

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  getToken() {
    if (this.auth.currentUser) {
      return getIdToken(this.auth.currentUser);
    } else {
      // Puedes lanzar un error o simplemente devolver una promesa rechazada.
      return Promise.reject('No user is currently signed in');
    }
  }

  getTokenSync(): Observable<string> {
    return from(this.getToken());
  }
}