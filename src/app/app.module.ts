import { NgModule } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from  './components/sign-up/sign-up.component';

const routesApp: Routes = [
  {path: '', component: HomeComponent },
  {path: 'sign-up', component: SignUpComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(routesApp) ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, FooterComponent, HomeComponent, SignUpComponent ],
  bootstrap:    [ AppComponent ] 
})
export class AppModule { }
