import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue:string = '';
  changeSearchValue(event: Event) {
    this.searchValue = (<HTMLInputElement>event.target).value;
    console.log("search value: " + this.searchValue);
  }
}
