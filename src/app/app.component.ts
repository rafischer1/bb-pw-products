import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  productList: Product[];
  clicked: boolean;

  constructor(private productService: ProductService) {}

  getPhoto() {
    return `https://i.warbycdn.com/s/l/25b2081c508fd8bb413a3bfbc6c1657b7de1c6df/2000x1000.jpg?quality=80`;
  }

  ngOnInit() {
    this.getProducts();
    this.clicked = false;
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.productList = products as Product[];
    });
    return this.productList;
  }

  togglePrice = function() {
    return this.clicked === true
      ? (this.clicked = false)
      : (this.clicked = true);
  };

  formatPrice(price: number) {
    if (price.toString().length === 4) {
      return `$${price}0`;
    }
    if (price.toString().length === 5) {
      return `$${price}`;
    }
    return `$${price}.00`;
  }

  formatDate(date: number) {
    var d = new Date(date * 1000);
    var monthArr = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    var year = d.getFullYear();
    var month = monthArr[d.getMonth()];
    var date = d.getDate();
    var time = `${month} ${date}, ${year}`;
    return time;
  }

  changePrice(id: number, e: string) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList[i].price = +e;
        this.productList[i].last_modified = Math.round(
          new Date().getTime() / 1000
        );
      }
    }
    this.togglePrice();
    return this.productList;
  }

  delete(product: Product) {
    if (confirm(`Delete '${product.name}',  Code: ${product.code}?`)) {
      // this.productService.deleteProduct(+product.id);
      this.productList = this.productList.filter(i => i.id !== product.id);
      return this.productList;
    } else {
      return null;
    }
  }
}
