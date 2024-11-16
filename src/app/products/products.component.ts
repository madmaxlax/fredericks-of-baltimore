import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isFetching = false;
  searchQuery = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.productsService.isFetching$.subscribe(isFetching => this.isFetching = isFetching);
    this.productsService.getProducts().subscribe((products) => (this.products = products));
  }
}
