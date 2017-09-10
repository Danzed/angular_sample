import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, NavigationStart, NavigationEnd, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TopBarComponent} from './components/top-bar/top-bar.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { MenuRightComponent } from './components/menu-right/menu-right.component';
import { FooterComponent } from './components/footer/footer.component';

import { StructureModule } from './structure/structure.module';


// Layout
import { SecureComponent } from './layout/secure';
import { PublicComponent } from './layout/public';

// Secure Component
import { HomeComponent } from './secure/home';

//Public Component
import { LoginComponent } from './public/login';

// Common
import { AuthGuard } from './../common/auth.guard';

//Services
import { LoginService } from './service/login/login.service';
import { CausasComponent } from './secure/causas/causas/causas.component';
import { ComentarioComponent } from './secure/comentario/comentario.component';
import { CrearCausaComponent } from './secure/causas/crear-causa/crear-causa.component';
import { ProyectosComponent } from './secure/proyectos/proyectos/proyectos.component';
import { PreguntasComponent } from './secure/pregunta/preguntas/preguntas.component';
import { OtroComponent } from './secure/otro/otro/otro.component';

declare var NProgress: any;

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        MenuLeftComponent,
        MenuRightComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        SecureComponent,
        PublicComponent,
        CausasComponent,
        ComentarioComponent,
        CrearCausaComponent,
        ProyectosComponent,
        PreguntasComponent,
        OtroComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        StructureModule,
        NgbModule.forRoot(),
        routing
    ],
    providers: [ AuthGuard ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(private router: Router) {
    router.events.subscribe((event) => {

      if(event instanceof NavigationStart) {
        NProgress.start();
      }

      if(event instanceof NavigationEnd) {
        setTimeout(function(){
          NProgress.done();
        }, 200);
      }

    });
  }
}
