import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { AppsModule } from './apps/apps.module';
import { ChartsModule } from './charts/charts.module';
import { ComponentsModule } from './components/components.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { DocumentationModule } from './documentation/documentation.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { FormsModule } from './forms/forms.module';
import { IconsModule } from './icons/icons.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
  imports: [
    CommonModule,
    AppsModule,
    ChartsModule,
    ComponentsModule,
    DashboardsModule,
    DocumentationModule,
    EcommerceModule,
    FormsModule,
    IconsModule,
    LayoutModule,
    PagesModule,
    TablesModule
  ]
})
export class StructureModule { }
