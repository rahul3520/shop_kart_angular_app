import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

import { AddNavbarComponent } from './add-navbar/add-navbar.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UserLoginComponent } from './user-login/user-login.component';

// import { AddNavbarComponent } from './add-navbar/add-navbar.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"user",
    component:UserLoginComponent
  },
  {
    path:"userregn",
    component:UserRegistrationComponent
  },
  {
    path:"view",
    component:ViewallProductComponent
  },
  {
    path:"add",
    component:AddProductComponent
  },
  {
    path:"search",
    component:SearchProductComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewallProductComponent,
    NavBarComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    AddNavbarComponent,
    SearchProductComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
