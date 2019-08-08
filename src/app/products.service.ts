import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`/products`);
  }

  deleteProduct(id: Number) {
    this.http.delete(`/products/${id}`).subscribe(
      data => {
        console.log('Delete Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
