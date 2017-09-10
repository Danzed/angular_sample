import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { PagesInvoice } from './invoice.page';
import { PagesLockscreen } from './lockscreen.page';
import { PagesLoginAlpha } from './login-alpha.page';
import { PagesLoginBeta } from './login-beta.page';
import { PagesPage404 } from './page-404.page';
import { PagesPage500 } from './page-500.page';
import { PagesPricingTables } from './pricing-tables.page';
import { PagesRegister } from './register.page';

export const routes: Routes = [
  { path: 'pages/invoice', component: PagesInvoice },
  { path: 'pages/lockscreen', component: PagesLockscreen },
  { path: 'pages/login-alpha', component: PagesLoginAlpha },
  { path: 'pages/login-beta', component: PagesLoginBeta },
  { path: 'pages/page-404', component: PagesPage404 },
  { path: 'pages/page-500', component: PagesPage500 },
  { path: 'pages/pricing-tables', component: PagesPricingTables },
  { path: 'pages/register', component: PagesRegister }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PagesInvoice,
    PagesLockscreen,
    PagesLoginAlpha,
    PagesLoginBeta,
    PagesPage404,
    PagesPage500,
    PagesPricingTables,
    PagesRegister
  ]

})
export class PagesModule { }
