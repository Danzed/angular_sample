import { HomeComponent } from './../../secure/home';
import { CausasComponent } from './../../secure/causas/causas/causas.component';
import { ProyectosComponent } from './../../secure/proyectos/proyectos/proyectos.component';
import { ComentarioComponent } from './../../secure/comentario/comentario.component';
import { CrearCausaComponent } from './../../secure/causas/crear-causa/crear-causa.component';
import { PreguntasComponent } from './../../secure/pregunta/preguntas/preguntas.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../../../common/auth.guard';

export const SECURE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'causas', component: CausasComponent, canActivate: [AuthGuard] },
    { path: 'comentario/:id', component: ComentarioComponent, canActivate: [AuthGuard] },
    { path: 'causa/:id', component: CrearCausaComponent, canActivate: [AuthGuard] },
    { path: 'causa', component: CrearCausaComponent, canActivate: [AuthGuard] },
    { path: 'proyectos', component: ProyectosComponent, canActivate: [AuthGuard] },
    { path: 'preguntas', component: PreguntasComponent, canActivate: [AuthGuard] },
    //{ path: '', redirectTo: 'dashboards/alpha', pathMatch: 'full' }
];