import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { DocumentationIndex } from './index.page';

export const routes: Routes = [
  { path: 'documentation/index', component: DocumentationIndex },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DocumentationIndex
  ]

})

export class DocumentationModule { }
