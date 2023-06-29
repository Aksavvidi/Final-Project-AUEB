import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
     {path: 'login', component: LoginComponent},
     {path: '', component: HomePageComponent}
  ]

@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
