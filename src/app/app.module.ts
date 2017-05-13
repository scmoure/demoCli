import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from '@angular/http';


import { AppComponent } from './app.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { AjouterFormComponent } from './project-form/ajouter-form.component';
import { SelectReactive } from './project-form/select-reactive.component';
import { LeftMenuComponent } from './sidebar/sidebar.component';
import { UserService } from './services/user.service';
import { GuardService } from './services/guard.service';
import { ErrorComponent } from './error/error.component';
import { AuthGuardParentComponent } from './auth-guard-parent/auth-guard-parent.component';

const appRoutes: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    canActivateChild: [GuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        children: [
          { path: '', component: LeftMenuComponent, outlet: 'left-menu' }
        ]
      },
      {
        path: 'ajouter/:idDossierSocial',
        children: [
          { path: '', component: AjouterFormComponent },
          { path: '', component: LeftMenuComponent, outlet: 'left-menu' }
        ]
      },
      {
        path: 'myTest/:idDossierSocial',
        children: [
          { path: '', component: AjouterFormComponent },
          { path: '', component: LeftMenuComponent, outlet: 'left-menu', runGuardsAndResolvers: 'always' }
        ]
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TrainingDetailComponent,
    AjouterFormComponent,
    SelectReactive,
    LeftMenuComponent,
    ErrorComponent,
    AuthGuardParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
