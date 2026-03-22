import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

const routes: Routes = [{ path: ':id', component: ProductDetailComponent }];

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductDetailModule {}
