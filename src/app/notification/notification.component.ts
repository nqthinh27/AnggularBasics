import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class = "alert alert-success wrapper" [hidden]="displayNotification">
                <p>This website uses cookies to provide better user experience</p>
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
              </div>`,
  styles: ['p {font-weight: bold; font-size: 20px} .wrapper{display: flex; flex-direction: row}']
})
export class NotificationComponent {
  displayNotification:boolean = false;
  closeNotification() {
    this.displayNotification = true;
  }
}
