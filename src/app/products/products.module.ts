import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent }];

@NgModule({
  declarations: [ProductsComponent, FilterPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsModule {}
