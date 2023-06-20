import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id: 1, name: 'iPhone X', price: '$200', color: 'Black', available: 'Available', image: '../../assets/products/1.jpg'},
    {id: 2, name: 'iPhone XS', price: '$200', color: 'Black', available: 'Available', image: '../../assets/products/1.jpg'},
    {id: 3, name: 'iPhone XS Max', price: '$250', color: 'Black', available: 'Available', image: '../../assets/products/3.jpg'},
    {id: 4, name: 'iPhone 10', price: '$200', color: 'White', available: 'Not Available', image: '../../assets/products/3.jpg'},
    {id: 5, name: 'iPhone 11', price: '$300', color: 'Gold', available: 'Available', image: '../../assets/products/2.png'},
    {id: 6, name: 'iPhone 14 Pro', price: '$500', color: 'Purple', available: 'Not Available', image: '../../assets/products/2.png'},
  ]
}
