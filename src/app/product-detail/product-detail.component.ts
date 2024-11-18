import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  products: Product[] = [];
  productId: string | null = '';
  selectedProduct: Product | undefined;
  isFetching = true;
  searchQuery = '';

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.productsService.isFetching$.subscribe(isFetching => this.isFetching = isFetching);
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.productId = this.route.snapshot.paramMap.get('id');
      console.log('this.productId: ', this.productId);
      this.selectedProduct = this.products.find((product) => product.id === this.productId);
      this.isFetching = false;
    });
  }

  hasCustomFieldItem(product: Product, fieldId: string): boolean {
    console.log('product: ', product.customFieldItems);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return product.customFieldItems?.some((item: any) => item.idCustomField === fieldId) || false;
  }

  getCustomFieldValue(product: Product, fieldId: string): string {
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      product.customFieldItems?.find((item: any) => item.idCustomField === fieldId)?.value?.text ||
      ''
    );
  }
}
