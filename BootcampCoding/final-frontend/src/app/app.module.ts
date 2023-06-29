import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from 'shared';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from 'ui';






const routes: Routes = [
  {
    path: 'bootcamp',
    loadChildren: () => import('./bootcamp/bootcamp.module').then((m)=> m.BootcampModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m)=> m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./public/public.module').then((m)=> m.PublicModule)
  },
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        DropdownComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule, 
        SharedModule,  HttpClientModule, UiModule
    ]
})
export class AppModule { }
