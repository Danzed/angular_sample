import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { DashboardsAlpha } from './alpha.page';
import { DashboardsBeta } from './beta.page';

export const routes: Routes = [
  { path: 'dashboards/alpha', component: DashboardsAlpha },
  { path: 'dashboards/beta', component: DashboardsBeta },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardsAlpha,
    DashboardsBeta
  ]

})

export class DashboardsModule { }
