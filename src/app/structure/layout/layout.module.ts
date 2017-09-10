import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { LayoutCards } from './cards.page';
import { LayoutGrid } from './grid.page';
import { LayoutSidebars } from './sidebars.page';
import { LayoutTypography } from './typography.page';
import { LayoutUtilities } from './utilities.page';

export const routes: Routes = [
  { path: 'layout/cards', component:  LayoutCards},
  { path: 'layout/grid', component:  LayoutGrid},
  { path: 'layout/sidebars', component:  LayoutSidebars},
  { path: 'layout/typography', component:  LayoutTypography},
  { path: 'layout/utilities', component:  LayoutUtilities}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LayoutCards,
    LayoutGrid,
    LayoutSidebars,
    LayoutTypography,
    LayoutUtilities
  ]

})

export class LayoutModule { }
