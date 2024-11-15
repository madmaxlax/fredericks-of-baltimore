import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products?: Product[];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
