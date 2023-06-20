import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  source:string = '../../assets/google-smart-shopping-01.png'
  slogan: string = 'Your one stop shop for everything!'
}
