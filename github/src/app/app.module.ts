import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatCheckboxModule,MatInputModule, MatButtonToggleModule} from '@angular/material';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {APP_BASE_HREF} from '@angular/common';
import { ProductModuleModule } from './product-module/product-module.module';
import { ProductListDisplayComponent } from './product-module/product-list-display/product-list-display.component';

@NgModule({
  declarations:
  
  [
    AppComponent,  

      
  ],
 
  imports: 
  
  [
    BrowserModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    ProductModuleModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatCheckboxModule, 
    MatFormFieldModule,
  
  
    MatInputModule,
    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'register', component:RegistrationComponent},
     {path:'productlist',component:ProductListDisplayComponent}
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: './Ebazar/'}],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
