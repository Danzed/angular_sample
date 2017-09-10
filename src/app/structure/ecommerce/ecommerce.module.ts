import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { EcommerceCartCheckout } from './cart-checkout.page';
import { EcommerceDashboard } from './dashboard.page';
import { EcommerceOrders } from './orders.page';
import { EcommerceProductDetails } from './product-details.page';
import { EcommerceProductEdit } from './product-edit.page';
import { EcommerceProductsCatalog } from './products-catalog.page';
import { EcommerceProductsList } from './products-list.page';

export const routes: Routes = [
  { path: 'ecommerce/cart-checkout', component: EcommerceCartCheckout },
  { path: 'ecommerce/dashboard', component: EcommerceDashboard },
  { path: 'ecommerce/orders', component: EcommerceOrders },
  { path: 'ecommerce/product-details', component: EcommerceProductDetails },
  { path: 'ecommerce/product-edit', component: EcommerceProductEdit },
  { path: 'ecommerce/products-catalog', component: EcommerceProductsCatalog },
  { path: 'ecommerce/products-list', component: EcommerceProductsList }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EcommerceCartCheckout,
    EcommerceDashboard,
    EcommerceOrders,
    EcommerceProductDetails,
    EcommerceProductEdit,
    EcommerceProductsCatalog,
    EcommerceProductsList
  ]

})

export class EcommerceModule { }
