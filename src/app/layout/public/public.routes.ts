import { LoginComponent } from './../../public/login';
import { Routes, RouterModule } from '@angular/router';


export const PUBLIC_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
    //{ path: '', redirectTo: 'dashboards/alpha', pathMatch: 'full' }
];