import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SelectReactive } from './project-form/select-reactive.component';
import { LeftMenuComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
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
      { path: '', component: ProjectFormComponent },
      { path: '', component: LeftMenuComponent, outlet: 'left-menu' }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TrainingDetailComponent,
    ProjectFormComponent,
    SelectReactive,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
