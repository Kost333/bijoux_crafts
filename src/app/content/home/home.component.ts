import {Component} from '@angular/core';

interface Product  {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [
    {id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10.99,quantity: 0},
    {id: 2, name: 'Product 2', description: 'Description of Product 2', price: 19.99,quantity: 0},
    {id: 3, name: 'Product 3', description: 'Description of Product 3', price: 23.99,quantity: 0},
    {id: 4, name: 'Product 4', description: 'Description of Product 4', price: 14.59,quantity: 0},
    {id: 5, name: 'Product 5', description: 'Description of Product 5', price: 16.39,quantity: 0},
    {id: 6, name: 'Product 6', description: 'Description of Product 6', price: 51.9,quantity: 0},
    {id: 7, name: 'Product 7', description: 'Description of Product 7', price: 21.23,quantity: 0},
    {id: 8, name: 'Product 8', description: 'Description of Product 8', price: 12.12,quantity: 0},
    {id: 9, name: 'Product 9', description: 'Description of Product 9', price: 21.39,quantity: 0},
    {id: 10, name: 'Product 10', description: 'Description of Product 10', price: 12.93,quantity: 0},
    {id: 11, name: 'Product 11', description: 'Description of Product 11', price: 18.94,quantity: 0},
    {id: 12, name: 'Product 12', description: 'Description of Product 12', price: 11.39,quantity: 0},
    {id: 13, name: 'Product 13', description: 'Description of Product 13', price: 7.99,quantity: 0}
  ];

  cart: Product[] = [];

  addToBasket(product: Product) {
    const existingProductIndex = this.cart.findIndex(p => p.id === product.id);

    if (existingProductIndex !== -1) {
      this.cart[existingProductIndex].quantity++;
    } else {
      const productToAdd = { ...product, quantity: 1 };
      this.cart.push(productToAdd);
    }
  }
}
