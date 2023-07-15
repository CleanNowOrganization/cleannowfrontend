import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { UserService } from '../../../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    email: string;
    password: string;
    private url = 'http://localhost:8090/auth/login/consumidores';

    constructor(private authService: AuthService, private http: HttpClient, private router: Router, private userService: UserService) {}

    ngOnInit() {}

    signIn(event: Event) {
        event.preventDefault();
        this.authService.signIn(this.email, this.password)
          .then((userCredential) => {
            const body = { email: this.email, password: this.password };
            const token = userCredential.user['accessToken'];
            console.log(token);
            const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
            headers.set('Content-Type', 'application/json');
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('mode', 'cors');
            const response = this.http.post(this.url, body, { headers: headers });
            response.toPromise().then((data) => {
                console.log(data);
                this.userService.setUserData(data);
                // Redirigir a /home
                this.router.navigate(['/home']);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
}
