import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { TablesBasicTables } from './basic-tables.page';
import { TablesDataTables } from './datatables.page';
import { TablesEditableTables } from './editable-tables.page';

export const routes: Routes = [
  { path: 'tables/basic-tables', component: TablesBasicTables },
  { path: 'tables/datatables', component: TablesDataTables },
  { path: 'tables/editable-tables', component: TablesEditableTables }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TablesBasicTables,
    TablesDataTables,
    TablesEditableTables
  ]

})

export class TablesModule { }
