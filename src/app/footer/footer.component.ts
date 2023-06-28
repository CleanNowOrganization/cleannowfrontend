import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  projectName: string = 'Clean Now';
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
