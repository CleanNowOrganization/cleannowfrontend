import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    email: string;
    password: string;

    constructor(private authService: AuthService) {}

    ngOnInit() {}

    signIn(event: Event) {
        event.preventDefault();
        this.authService.signIn(this.email, this.password)
          .then((userCredential) => {
            console.log(userCredential);
            console.log(userCredential.user);
            console.log(userCredential.user.getIdToken);
          })
          .catch((error) => {
            console.log(error);
          });
      }
}
