import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    data: any; 

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUserData().subscribe(data => {
            // Ahora tienes los datos del usuario en 'data'
            this.data = data;
            console.log("Home page data: "+data);
          });
    }
}
