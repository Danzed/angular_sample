import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { IconsFontawesome } from './fontawesome.page';
import { IconsIcomoonFree } from './icomoon-free.page';
import { IconsLinearIconsFree } from './linear-icons-free.page';

export const routes: Routes = [
  { path: 'icons/fontawesome', component: IconsFontawesome },
  { path: 'icons/icomoon-free', component: IconsIcomoonFree },
  { path: 'icons/linear-icons-free', component: IconsLinearIconsFree }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IconsFontawesome,
    IconsIcomoonFree,
    IconsLinearIconsFree
  ]

})

export class IconsModule { }
