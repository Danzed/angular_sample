import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';

import { AppsCalendar } from './calendar.page';
import { AppsGallery } from './gallery.page';
import { AppsMail } from './mail.page';
import { AppsMessaging } from './messaging.page';
import { AppsProfile } from './profile.page';

export const routes: Routes = [
  { path: 'apps/calendar', component: AppsCalendar },
  { path: 'apps/gallery', component: AppsGallery },
  { path: 'apps/mail', component: AppsMail },
  { path: 'apps/messaging', component: AppsMessaging },
  { path: 'apps/profile', component: AppsProfile }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AppsCalendar,
    AppsGallery,
    AppsMail,
    AppsMessaging,
    AppsProfile
  ]

})

export class AppsModule { }
