import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'bootcamp',
    loadChildren: () => import('./bootcamp/bootcamp.module').then((m)=> m.BootcampModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m)=> m.UserModule)
  },
  {path: '', component: HomePageComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    
    DropdownComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
