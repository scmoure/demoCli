import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SelectReactive } from './project-form/select-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingDetailComponent,
    ProjectFormComponent,
    SelectReactive
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
